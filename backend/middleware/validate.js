const EMAIL_PATTERN = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;

const clean = (value) => (typeof value === "string" ? value.trim() : "");
const fits = (value, max) => value.length > 0 && value.length <= max;

export function validateContact(req, res, next) {
  const name = clean(req.body?.name);
  const email = clean(req.body?.email);
  const message = clean(req.body?.message);

  if (!fits(name, 100) || /[\r\n]/.test(name)) {
    return res.status(400).json({ error: "Please enter your name (up to 100 characters)." });
  }
  if (!fits(email, 254) || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!fits(message, 2000)) {
    return res.status(400).json({ error: "Please enter a message (up to 2000 characters)." });
  }

  req.body = { name, email, message };
  next();
}
