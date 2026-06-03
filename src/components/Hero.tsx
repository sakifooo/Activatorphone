
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 text-white font-bold uppercase tracking-tight">
              ACTIVATORPHONE
            </h1>
            <div className="hero-cta space-y-6">
              <div>
                <p className="hero-paragraph text-lg mb-2 text-[#8a94a7]">Activatorphone premium v0.4</p>
                <Button asChild className="button-primary h-auto py-4 px-10">
                  <Link href="https://mega.nz/folder/XyBlwQyb#9fX9Bu7_I57OE4t2FjgJpQ">Download Premium</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-figure anime-element hidden lg:block">
            <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
              <rect width="528" height="396" style={{ fill: 'transparent' }} />
            </svg>
            <div className="hero-figure-box hero-figure-box-01"></div>
            <div className="hero-figure-box hero-figure-box-02"></div>
            <div className="hero-figure-box hero-figure-box-05"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
