const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";

async function sendEmail(templateName, templateParams) {
  const required = ["EMAILJS_SERVICE_ID", "EMAILJS_PUBLIC_KEY", "EMAILJS_PRIVATE_KEY", templateName];
  const missing = required.filter((name) => !process.env[name]);
  if (missing.length > 0) throw new Error(`Missing environment variables: ${missing.join(", ")}`);

  const response = await fetch(EMAILJS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env[templateName],
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: templateParams,
    }),
    signal: AbortSignal.timeout(15_000),
  });

  // The reason (e.g. "Gmail_API: Invalid grant") goes to the server log only.
  if (!response.ok) throw new Error(`EmailJS ${response.status}: ${await response.text()}`);
}

export const sendContactEmail = ({ name, email, message }) =>
  sendEmail("EMAILJS_TEMPLATE_CONTACT", { from_name: name, from_email: email, message });
