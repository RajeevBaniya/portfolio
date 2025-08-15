
const nodemailer = require('nodemailer'); // eslint-disable-line

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // eslint-disable-line
        pass: process.env.EMAIL_PASSWORD, // eslint-disable-line
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // eslint-disable-line
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // eslint-disable-line
      subject: `Portfolio Contact: Message from ${fullname}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
}