
'use server';

import * as z from 'zod';

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
  
  console.log("New Inquiry Received:", parsedData.data);
  
  // In a real application, you would integrate with an email service (e.g., Resend, SendGrid)
  // or save the inquiry to a database here.
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  return { success: true, message: "Thank you for your inquiry! We will get back to you shortly." };
}
