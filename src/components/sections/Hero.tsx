
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Premium leather jackets"
        data-ai-hint="leather jackets"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Exporting Premium Leather Jackets Worldwide
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
            Specializing in high-quality exports to the USA and Canada. Discover craftsmanship that defines style.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform hover:scale-105 hover:bg-accent/90">
              <Link href="#contact">Contact Us to Source</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
