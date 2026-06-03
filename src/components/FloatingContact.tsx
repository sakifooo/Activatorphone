
"use client";

import { MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <div className={cn(
        "absolute bottom-16 right-0 mb-4 flex flex-col gap-3 transition-all duration-300 origin-bottom",
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )}>
        <Link 
          href="https://wa.me/1234567890" 
          target="_blank"
          className="flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors whitespace-nowrap"
        >
          <MessageSquare className="w-5 h-5" />
          WhatsApp Chat
        </Link>
        <Link 
          href="tel:+1234567890" 
          className="flex items-center gap-3 bg-accent text-white px-5 py-3 rounded-full font-bold shadow-lg hover:bg-primary transition-colors whitespace-nowrap"
        >
          <Phone className="w-5 h-5" />
          Call Support
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl floating-button hover:bg-accent transition-all duration-300 relative"
        aria-label="Contact support"
      >
        <div className={cn("transition-transform duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0")}>
          <MessageSquare className="w-7 h-7" />
        </div>
        <div className={cn("absolute transition-transform duration-300", isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0")}>
          <span className="text-2xl font-bold">×</span>
        </div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
          </span>
        )}
      </button>
    </div>
  );
}
