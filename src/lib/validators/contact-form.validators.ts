import z from 'zod';

export const contactFormSchema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  user_phone: z.string().optional(),
  user_message: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
