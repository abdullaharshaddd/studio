
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitInquiry } from '@/lib/actions';
import { Card, CardContent } from '../ui/card';
import { Mail, MapPin, Phone, Loader2, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitInquiry(values);
      if (result.success) {
        toast({
          title: "Inquiry Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <motion.section 
      id="contact" 
      className="w-full bg-secondary py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={fadeIn}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Contact Us
          </div>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Start a Conversation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We're here to answer any questions you have about our products and services.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            variants={fadeIn}
          >
             <h3 className="font-headline text-2xl font-bold">Get in Touch Directly</h3>
             <a href="mailto:info@prestigeleathers.com" className="flex items-center gap-4 text-lg text-foreground transition-colors hover:text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                <span>info@prestigeleathers.com</span>
             </a>
             <a href="https://wa.me/17807789577" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-foreground transition-colors hover:text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                <span>WhatsApp Us</span>
             </a>
              <a href="https://www.linkedin.com/company/prestige-leather-wholesale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-foreground transition-colors hover:text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Linkedin className="h-6 w-6 text-primary" /></div>
                <span>Connect on LinkedIn</span>
              </a>
             <div className="flex items-center gap-4 text-lg text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                <span>Lahore, Pakistan</span>
             </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="p-6 md:p-8">
              <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your sourcing needs..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Inquiry
                  </Button>
                </form>
              </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
