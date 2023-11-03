import { MailerError, sendMail } from '@/lib/nodemailer';
import { contactFormSchema } from '@/lib/validators/contact-form.validators';
import { ZodError } from 'zod';

const formId = '59';
const postUrl = `http://sterling.local/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const payload = contactFormSchema.parse(body);

    const { user_email, user_name, user_message, user_phone } = payload;

    const res = await sendMail(user_email, 'Hello', user_message ?? '');
    console.log(res);
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return new Response('Invalid schema', { status: 400 });
    }

    if (error instanceof MailerError) {
      return new Response(error.message, { status: 500 });
    }

    return new Response('Unknown server error', { status: 500 });
  }

  return new Response('Ok');
}
