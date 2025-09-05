import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Prestige Leather',
    description: 'Exporting Premium Leather Jackets Worldwide',
      icons: {
          icon: '/favicon.png', // served from public/favicon.png
            },
            };

            export default function RootLayout({
              children,
              }: Readonly<{
                children: React.ReactNode;
                }>) {
                  return (
                      <html lang="en">
                            <body className="font-body antialiased">
                                    {children}
                                            <Toaster />
                                                  </body>
                                                      </html>
                                                        );
                                                        }
                                                        