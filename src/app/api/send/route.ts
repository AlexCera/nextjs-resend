import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
    /* data from client */
    const body = await req.json();

    /* validate data from client */
    if (!body.subject || body.message.length === 0) {
        return NextResponse.json({ message: "Campos incompletos." }, {
            status: 400
        })
    }

    /* send email */
    const { subject, message } = body;
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['mail@mail.com'],
            subject,
            react: EmailTemplate({ description: message }),
            text: ''
        });
        return NextResponse.json({ code: 200, message: "Email sent" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ code: 400, message: "Email was not send", detail: error }, { status: 400 });
    }

};
