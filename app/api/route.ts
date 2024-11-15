import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  const { firstName, lastName, companyName, email, phone, address, message } = data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sales@palmfromindonesia.com',
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Message from ${firstName} ${lastName}:
        Company: ${companyName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
