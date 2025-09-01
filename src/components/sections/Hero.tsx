
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full">
      <Image
  src="/new.jpg"
  alt="Premium leather jackets"
  data-ai-hint="leather jackets"
  fill
  className="object-cover"
  priority
/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="font-headline text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Exporting Premium Leather Jackets Worldwide
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Specializing in high-quality exports to the USA and Canada. Discover craftsmanship that defines style.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-10"
            style={{ animationDelay: '0.4s' }}
          >
            <Button size="lg" asChild className="bg-primary text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90">
              <Link href="#contact">Contact Us to Source</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
