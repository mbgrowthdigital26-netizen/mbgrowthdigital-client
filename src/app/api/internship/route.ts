import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();
    const { name, email, phone, program, message } = data;

    // Validate required fields
    if (!name || !email || !program) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'M.B Growth Digital <onboarding@resend.dev>',
      replyTo: email,
      to: process.env.EMAIL_TO || 'mbgrowthdigital26@gmail.com',
      subject: `New Internship Application: ${name} — ${program}`,
      text: `New Internship Application\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #009966, #00734d); padding: 24px; border-radius: 6px 6px 0 0; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Internship Application</h2>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">M.B Growth Digital — Internship Program</p>
          </div>
          <div style="padding: 24px; background: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a; width: 120px;">Applicant</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;"><a href="mailto:${email}" style="color: #009966;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;"><a href="tel:${phone}" style="color: #009966;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">Program</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">${program}</td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-top: 20px;">
              <p style="font-weight: 600; color: #0f172a; margin-bottom: 8px;">Goals / Message:</p>
              <p style="color: #334155; white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${message}</p>
            </div>` : ''}
          </div>
          <div style="padding: 16px 24px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0;">
            M.B Growth Digital · Mangadu, Chennai, Tamil Nadu 600122
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Internship] Error from Resend:", error);
      return NextResponse.json(
        { success: false, message: "Failed to submit application. Please try again or contact us directly.", error: error },
        { status: 500 }
      );
    }

    console.log(`[Internship] Application received from ${name} for program: ${program}`);

    return NextResponse.json(
      { success: true, message: "Application submitted successfully. We will contact you shortly." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Internship] Error processing application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please try again or contact us directly.", error: error.message },
      { status: 500 }
    );
  }
}
