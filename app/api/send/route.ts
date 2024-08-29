import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any){
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['bolarinwaoluwadamilare91@gmail.com'],
            subject: subject,
            html: `<p>Message From ${email}: MESSAGE: ${message}</p>`
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
    
}