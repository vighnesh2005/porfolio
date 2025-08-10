import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // Create transporter - example uses Gmail SMTP (you can use any SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,      // your Gmail email address
        pass: process.env.EMAIL_PASS,      // your Gmail app password or email password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,             // your receiving email address
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
