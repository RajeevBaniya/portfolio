import { test, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

const ORIGIN = "http://localhost:5173";
process.env.ALLOWED_ORIGINS = ORIGIN;
Object.assign(process.env, {
  EMAILJS_SERVICE_ID: "svc_test",
  EMAILJS_TEMPLATE_CONTACT: "tpl_test",
  EMAILJS_PUBLIC_KEY: "public_test",
  EMAILJS_PRIVATE_KEY: "private_test",
});

// Stub only EmailJS; requests to the local test server stay real.
const realFetch = globalThis.fetch;
let sent = [];
let emailStatus = 200;
globalThis.fetch = (url, options) => {
  if (!String(url).startsWith("https://api.emailjs.com/")) return realFetch(url, options);
  sent.push(JSON.parse(options.body));
  return Promise.resolve(new Response(emailStatus === 200 ? "OK" : "nope", { status: emailStatus }));
};

const { createApp } = await import("./server.js");

const valid = { name: "Visitor", email: "visitor@example.com", message: "Hello" };
let server;
let base;

before(async () => {
  console.error = () => {};
});

// A fresh app per test keeps the rate limiter counts separate.
beforeEach(async () => {
  sent = [];
  emailStatus = 200;
  server?.close();
  server = createApp().listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => server.close());

const post = (body, headers = {}) =>
  realFetch(`${base}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: ORIGIN, ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });

test("health answers 200 ok", async () => {
  const res = await realFetch(`${base}/health`);
  assert.equal(res.status, 200);
  assert.equal(await res.text(), "ok");
});

test("a valid message is sent through EmailJS with the private key", async () => {
  const res = await post({ name: "  Visitor ", email: " visitor@example.com", message: "Hello  " });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
  assert.deepEqual(sent, [
    {
      service_id: "svc_test",
      template_id: "tpl_test",
      user_id: "public_test",
      accessToken: "private_test",
      template_params: { from_name: "Visitor", from_email: "visitor@example.com", message: "Hello" },
    },
  ]);
});

for (const [label, body] of [
  ["missing name", { ...valid, name: "" }],
  ["name over 100 characters", { ...valid, name: "a".repeat(101) }],
  ["line break in name", { ...valid, name: "a\r\nBcc: x@example.com" }],
  ["bad email", { ...valid, email: "not-an-email" }],
  ["two email addresses", { ...valid, email: "a@example.com,b@example.com" }],
  ["message over 2000 characters", { ...valid, message: "a".repeat(2001) }],
  ["non-string message", { ...valid, message: { a: 1 } }],
  ["broken JSON", "{"],
]) {
  test(`rejects ${label} without sending`, async () => {
    const res = await post(body);
    assert.equal(res.status, 400);
    assert.equal(typeof (await res.json()).error, "string");
    assert.equal(sent.length, 0);
  });
}

test("an EmailJS failure returns 502 without leaking details", async () => {
  emailStatus = 412;
  const res = await post(valid);
  assert.equal(res.status, 502);
  assert.deepEqual(await res.json(), { error: "Could not send the message. Please try again later." });
});

test("the 11th request in a minute is rate limited", async () => {
  for (let i = 0; i < 10; i++) assert.equal((await post(valid)).status, 200);
  assert.equal((await post(valid)).status, 429);
  assert.equal(sent.length, 10);
});

test("only listed websites are allowed", async () => {
  const allowed = await post(valid);
  assert.equal(allowed.headers.get("access-control-allow-origin"), ORIGIN);

  sent = [];
  const blocked = await post(valid, { Origin: "https://evil.example" });
  assert.equal(blocked.status, 403);
  assert.equal(blocked.headers.get("access-control-allow-origin"), null);
  assert.equal(sent.length, 0);
});
