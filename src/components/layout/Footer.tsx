import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold uppercase font-headline text-primary">
              <Image src="/Prestige leather.png" alt="Prestige Leather Logo" width={40} height={40} className="h-10 w-auto" />
              <span>Prestige Leather</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Prestige Leather. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium tracking-wider uppercase text-foreground/80 transition-colors hover:text-primary">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
