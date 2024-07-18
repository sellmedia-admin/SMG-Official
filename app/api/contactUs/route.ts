import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const { body } = await req.json();

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: "Contact",
      html: body,
    });
    return NextResponse.json(
      { res: { status: "ok", message: "Email Sent Successfully" } },
      { status: 200 }
    );
  } catch (error) {
    console.error({ error });
    return NextResponse.json(
      {
        res: {
          status: "error",
          message: "Failed to send email. Please try again.",
        },
      },
      { status: 500 }
    );
  }
}
