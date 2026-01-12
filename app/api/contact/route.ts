import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, recaptchaToken } = body;

        // Vérification reCAPTCHA (si la clé secrète est configurée)
        const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecretKey && recaptchaToken) {
            const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
            const verificationResponse = await fetch(verificationUrl, { method: 'POST' });
            const verificationData = await verificationResponse.json();

            if (!verificationData.success) {
                console.error('Échec reCAPTCHA:', verificationData);
                return NextResponse.json(
                    { error: 'Échec de la vérification reCAPTCHA' },
                    { status: 400 }
                );
            }
        }

        // Envoi de l'email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Focale 2.8 <contact@focale28.be>',
            to: [process.env.CONTACT_EMAIL || 'focale2.8@gmail.com'],
            replyTo: email,
            subject: `Nouvelle demande de contact de ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Nouvelle demande de contact</h1>
          <p>Vous avez reçu un nouveau message depuis votre site web.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #666;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Erreur Resend:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Erreur API Contact:', error);
        return NextResponse.json(
            { error: 'Une erreur est survenue lors du traitement de la demande' },
            { status: 500 }
        );
    }
}
