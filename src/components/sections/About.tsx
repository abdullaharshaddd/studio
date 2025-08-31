"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full bg-secondary py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div variants={fadeIn} className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              About Us
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Legacy in Leather
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Prestige Leather is a premier exporter of high-quality leather jackets based in Pakistan. With years of expertise in sourcing the finest materials and masterful craftsmanship, we deliver products that meet the highest international standards.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Our mission is to connect the world with Pakistan's rich heritage of leatherwork. We have a strong export history, with established partners in the USA and Canada, and have previously sold our premium collections on platforms like Amazon, earning a reputation for quality and reliability.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1599623572452-458f24445358?q=80&w=600&auto=format&fit=crop"
                  alt="Craftsman working on a leather jacket"
                  data-ai-hint="leather craft"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
