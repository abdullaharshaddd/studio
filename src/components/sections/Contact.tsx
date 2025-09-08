
"use client";

import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
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

        <motion.div 
          className="mx-auto max-w-lg"
          variants={fadeIn}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="font-headline text-2xl font-bold text-center">Get in Touch Directly</h3>
                <a href="mailto:farhanimran5882@gmail.com" className="flex items-center gap-4 text-lg text-foreground transition-colors hover:text-primary">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                    <span>farhanimran5882@gmail.com</span>
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
