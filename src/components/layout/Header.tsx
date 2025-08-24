
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Style Match', href: '#style-match' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold font-headline text-primary transition-transform hover:scale-105">
          Prestige Leathers
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 text-2xl font-bold font-headline text-primary" onClick={handleLinkClick}>
                  Prestige Leathers
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary" onClick={handleLinkClick}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8">
                  <Link href="#contact" onClick={handleLinkClick}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
