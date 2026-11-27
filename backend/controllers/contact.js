import { sendContactEmail } from "../services/email.js";

export async function sendContact(req, res) {
  try {
    await sendContactEmail(req.body);
    res.json({ ok: true });
  } catch (error) {
    console.error(error.message);
    res.status(502).json({ error: "Could not send the message. Please try again later." });
  }
}
