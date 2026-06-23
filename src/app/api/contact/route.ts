import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Create a transporter using Gmail SMTP
    // We use environment variables for security
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (Must be your authenticated email for Gmail)
      replyTo: email,
      to: process.env.EMAIL_USER, // Send to your own email address
      subject: `New Contact Form Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0;">New Contact Form Submission</h2>
          <p style="color: #475569; font-size: 16px;">You have received a new message from the contact form on your website.</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 15px 0 5px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; color: #334155;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Contact Form Email Sent Successfully for:", name);

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
