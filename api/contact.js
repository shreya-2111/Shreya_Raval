import nodemailer from 'nodemailer';
import { z } from 'zod';

// 1. Data Validation: Define validation schema using Zod
const contactSchema = z.object({
  user_name: z.string().min(2, "Name is too short"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
  website: z.string().optional() // Honeypot
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    
    // Validate the incoming data
    const validatedData = contactSchema.parse(body);

    // 2. Security (Honeypot): Check if the honeypot field is filled
    if (validatedData.website) {
      // If a spam bot filled the honeypot, reject it silently
      return res.status(400).json({ success: false, message: 'Spam detected' });
    }

    const { user_name, user_email, message } = validatedData;

    // 3. Environment Variables & Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4. Building the Email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      replyTo: user_email, // Set replyTo directly to the user who filled the form
      subject: `Portfolio Contact Form: Message from ${user_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #38BDF8; margin-bottom: 20px;">New Portfolio Submission</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${user_name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${user_email}">${user_email}</a></p>
          </div>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; line-height: 1.5;">${message}</div>
        </div>
      `,
    };

    // 5. Sending the Email
    await transporter.sendMail(mailOptions);

    // 6. Success/Error Handling
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email action error:', error);
    
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      return res.status(400).json({ 
        success: false, 
        message: error.errors[0].message
      });
    }

    // Handle sending errors (like wrong passwords)
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
}
