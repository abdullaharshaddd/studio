
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, ShieldCheck, Globe, Package, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: '100% Genuine Leather',
    description: 'We source only the finest, full-grain leathers for a premium look and feel that lasts a lifetime.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Premium Craftsmanship',
    description: 'Our jackets are meticulously constructed by skilled artisans with decades of experience.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Export-Ready Quality',
    description: 'All products meet rigorous international quality standards, ready for global distribution.',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Samples Available',
    description: 'We provide samples for quality assessment, ensuring confidence before you place a bulk order.',
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: 'Worldwide Shipping',
    description: 'Reliable and efficient shipping to partners across the globe, including the USA and Canada.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  return (
    <motion.section 
      id="why-us" 
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
            Our Commitment
          </div>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why Partner with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We are dedicated to providing exceptional value through quality, reliability, and service.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div 
              key={feature.title} 
              className="flex flex-col items-center text-center md:items-start md:text-left"
              variants={fadeIn}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
