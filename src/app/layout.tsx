import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import TelegramPopup from '@/components/TelegramPopup';

export const metadata: Metadata = {
  title: 'Home | ActivatorPhone',
  description: 'The world\'s most advanced mobile diagnostics and recovery suite. Experience seamless untethered activation with premium stability and professional-grade support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased is-boxed">
        <div className="body-wrap">
          <Navbar />
          {children}
          <Footer />
          <TelegramPopup />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
