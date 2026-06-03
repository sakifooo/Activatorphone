
"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function TelegramPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const alreadyShowed = localStorage.getItem('telegramShowed');
      if (alreadyShowed !== '1') {
        setIsVisible(true);
        localStorage.setItem('telegramShowed', '1');
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsVisible(false)} />
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in duration-300">
        <div className="h-2 bg-[#0fb7b3]" />
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[#0f7b78] hover:scale-110 transition-transform z-20"
        >
          <X size={20} />
        </button>

        <div className="p-10 text-center space-y-6">
          <h2 className="text-2xl font-bold text-[#222222] leading-tight font-headline">
            Official ActivatorPhone Telegram Channel
          </h2>
          
          <p className="text-[#8d8d8d] text-base leading-relaxed">
            Stay on top of software updates, news, discounts, and more!
          </p>

          <div className="pt-4">
            <a 
              href="https://t.me/iosremoval" 
              target="_blank" 
              className="inline-block bg-[#0f7b78] hover:bg-[#0d6663] text-white font-bold px-12 py-3 rounded-sm transition-all text-sm uppercase tracking-widest shadow-lg"
            >
              Join Us!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
