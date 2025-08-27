"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const productCategories = [
  {
    title: 'Custom Orders',
    description: 'Your vision, our craftsmanship. We offer bespoke services for unique designs.',
    image: 'https://images.unsplash.com/photo-1528245582846-d8f516886e08?q=80&w=400&auto=format&fit=crop',
    aiHint: 'custom design',
  },
  {
    title: 'Biker Jackets',
    description: 'Classic and rebellious, our biker jackets are crafted for the modern adventurer.',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=400&auto=format&fit=crop',
    aiHint: 'biker jacket',
  },
  {
    title: 'Cowhide Jackets',
    description: 'Durable and timeless, made from premium full-grain cowhide leather.',
    image: 'https://images.unsplash.com/photo-1603217183398-34994a5e3e23?q=80&w=400&auto=format&fit=crop',
    aiHint: 'leather jacket',
  },
  {
    title: 'Fashion Jackets',
    description: 'Trend-setting designs that blend contemporary style with classic leather appeal.',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=400&auto=format&fit=crop',
    aiHint: 'fashion jacket',
  },
  {
    title: 'Suede Jackets',
    description: 'Soft, luxurious, and sophisticated. A perfect statement piece for any wardrobe.',
    image: 'https://images.unsplash.com/photo-1629228847842-81c74a065917?q=80&w=400&auto=format&fit=crop',
    aiHint: 'suede jacket',
  },
  {
    title: 'Bomber Jackets',
    description: 'An iconic silhouette, reimagined with premium materials and modern details.',
    image: 'https://images.unsplash.com/photo-1611842637209-9686518a2ba8?q=80&w=400&auto=format&fit=crop',
    aiHint: 'bomber jacket',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Products() {
  return (
    <motion.section 
      id="products" 
      className="w-full py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Our Catalog
          </div>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A Style for Every Story
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Explore our diverse range of leather jackets, each with its own character and built to last.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              custom={i}
            >
              <Card className="group h-full overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      data-ai-hint={category.aiHint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="font-headline text-xl font-bold">{category.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">{category.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
