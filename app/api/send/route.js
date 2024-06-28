
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
    const { name, email, subject, message, show_on_guestbook } = await req.json();
    console.log(name, email, subject, message, show_on_guestbook);
    
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email, myEmail],
      subject: subject,
      react: (
        <>
          <EmailTemplate name={name} email={email} subject={subject} message={message} />
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
