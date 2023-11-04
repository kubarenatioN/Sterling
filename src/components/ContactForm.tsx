'use client';

import {
  ContactFormSchema,
  contactFormSchema,
} from '@/lib/validators/contact-form.validators';
import { Button } from '@/ui-kit/ui/button';
import { Input } from '@/ui-kit/ui/input';
import { Label } from '@/ui-kit/ui/label';
import { Textarea } from '@/ui-kit/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface ContactFormProps extends React.AllHTMLAttributes<HTMLFormElement> {}

const postUrl = `api/contact-form`;

const ContactForm: FC<ContactFormProps> = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (req: ContactFormSchema) => {
    setIsLoading(true);
    toast('Sending e-mail...', { duration: 2000 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    try {
      await fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(req),
      });

      toast.success('Your email was sent!');
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='grid w-full items-center gap-1.5'>
        <Label>Name</Label>
        <Input
          type='text'
          required
          placeholder='How can we name you?'
          {...register('user_name')}
        />
      </div>

      <div className='grid w-full items-center gap-1.5'>
        <Label>E-mail</Label>
        <Input
          type='email'
          required
          placeholder='Please, enter your email'
          {...register('user_email')}
        />
      </div>

      <div className='grid w-full items-center gap-1.5'>
        <Label>Phone (optional)</Label>
        <Input
          type='tel'
          placeholder='Your phone number'
          {...register('user_phone')}
        />
      </div>

      <div className='grid w-full items-center gap-1.5'>
        <Label>Message</Label>
        <Textarea
          placeholder='Please, leave your message here'
          {...register('user_message')}
        />
      </div>

      <Button
        disabled={isLoading}
        type='submit'
        variant='accent'
        className='self-center w-1/2'
        aria-label='Submit form'>
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
