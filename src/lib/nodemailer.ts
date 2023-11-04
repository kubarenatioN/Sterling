import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class MailerError extends Error {}

export async function sendMail(
  receiver: string,
  subject: string,
  text: string
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: MailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: receiver,
    subject,
    text,
  };

  return new Promise<SMTPTransport.SentMessageInfo>((res, rej) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        rej(new MailerError('Error sending email via transporter'));
      }
      res(info);
    });
  });
}
