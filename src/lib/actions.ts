'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import InquiryEmail from '@/components/emails/InquiryEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitInquiry(data: z.infer<typeof formSchema>) {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data provided." };
  }

  const { name, email, message } = parsedData.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Prestige Leather <onboarding@resend.dev>', // This must be a verified domain in Resend
      to: ['farhanimran5882@gmail.com'], // The email address that will receive the inquiries
      subject: 'New Website Inquiry from ' + name,
      reply_to: email,
      react: InquiryEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send email.');
    }

    return { success: true, message: "Thank you for your message! We have received your inquiry and will get back to you shortly." };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "There was a problem submitting your inquiry. Please try again later." };
  }
}
