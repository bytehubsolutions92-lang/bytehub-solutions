import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "your-email@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  });

  return Response.json({ success: true });
}