"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const wallets = [
    {
      name: 'USDT TRC20',
      address: 'TWbQ283JwzuxoaxvdSqhoqxpVUf9rejeJW',
      color: 'bg-[#ff0000]/10 border-[#ff0000]/20'
    },
    {
      name: 'USDC ERC20',
      address: '0xE43D19D0993e2C5b54BeF4cF68b6076a977c701d',
      color: 'bg-[#2775ca]/10 border-[#2775ca]/20'
    },
    {
      name: 'USDT BEP20',
      address: '0xE43D19D0993e2C5b54BeF4cF68b6076a977c701d',
      color: 'bg-[#f3ba2f]/10 border-[#f3ba2f]/20'
    }
  ];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    toast({
      title: "Address Copied",
      description: "Wallet address has been copied to clipboard.",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero pt-12 md:pt-16 pb-4 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="hero-copy max-w-xl text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-1 tracking-tight uppercase text-white">
                <span className="text-primary">A</span>CTIVATOR<span className="text-primary">P</span>HONE
              </h1>
              <div className="hero-cta space-y-1 mt-4">
                <div>
                  <p className="text-lg text-[#8a94a7] mb-4">Activatorphone premium v0.4</p>
                  <Button asChild className="button-primary h-auto py-4 px-10">
                    <Link href="https://www.mediafire.com/folder/5qa8i308xki7p/Activatorphone+premium+v0.4">Download Premium</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="hero-figure relative w-full max-w-[528px] h-[396px] hidden lg:block">
              <div className="hero-figure-box hero-figure-box-01"></div>
              <div className="hero-figure-box hero-figure-box-02"></div>
              <div className="hero-figure-box hero-figure-box-05"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pt-2 pb-24 px-4 bg-black/10">
        <div className="container-sm mx-auto max-w-4xl">
          <div className="pricing-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A12+ No Signal - Untethered</h2>
            <p className="text-lg text-[#8a94a7]">Activate your device and use it without signal</p>
          </div>
          
          <div className="flex justify-center">
            <div className="pricing-table w-full max-w-[400px]">
              <div className="pricing-table-inner">
                <div className="pricing-table-main">
                  <div className="pricing-table-header pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">$10</span>
                      <span className="text-xs text-[#8a94a7]">/device</span>
                    </div>
                  </div>
                  
                  <div className="text-xs font-bold uppercase tracking-widest text-white mb-6">Working Features Include</div>
                  <ul className="pricing-table-features list-none p-0 m-0 space-y-2">
                    <li>Untethered (shutdown support)</li>
                    <li>iServices/Notifications/iPay</li>
                    <li>iPhone XS to 17 Pro Max</li>
                    <li>iPad 8 to iPad Air M4</li>
                    <li>iOS 18.7.9 to 26.5.1</li>
                    <li>Fake Erase</li>
                    <li>No OTA</li>
                  </ul>
                </div>
                
                <div className="pricing-table-cta mt-8 space-y-3">
                  {wallets.map((wallet) => (
                    <Dialog key={wallet.name}>
                      <DialogTrigger asChild>
                        <Button className="w-full button-primary h-12">Register {wallet.name}</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#1d2026] border-white/10 text-white max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-center mb-4">Payment Information ({wallet.name})</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-y-6">
                          <div className="bg-white p-4 rounded-xl">
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${wallet.address}`} 
                              alt={`${wallet.name} QR Code`}
                              className="w-48 h-48"
                            />
                          </div>
                          
                          <div className={`w-full p-4 rounded-lg border ${wallet.color} break-all`}>
                            <p className="text-xs text-[#8a94a7] uppercase font-bold mb-2">Network: {wallet.name.split(' ')[1]}</p>
                            <p className="font-mono text-sm mb-4 leading-relaxed">{wallet.address}</p>
                            <Button 
                              variant="outline" 
                              className="w-full border-white/10 hover:bg-white/5 gap-2"
                              onClick={() => handleCopy(wallet.address)}
                            >
                              {copied === wallet.address ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              {copied === wallet.address ? 'Copied!' : 'Copy Address'}
                            </Button>
                          </div>

                          <p className="text-xs text-center text-[#8a94a7]">
                            Please send exactly <span className="text-white font-bold">$10</span> to the address above. 
                            Registration will be automatic once the transaction is confirmed.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Service Section */}
      <section className="py-16 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#15181d] p-12 rounded-sm border border-white/5">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold m-0 uppercase">
                <span className="text-primary">A</span>CTIVATOR<span className="text-primary">P</span>HONE
              </h3>
              <p className="text-[#8a94a7] text-sm max-w-2xl">
                The world's most advanced mobile diagnostics and recovery suite. Experience seamless untethered activation with premium stability and professional-grade support.
              </p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg mb-1">Rate our service!</p>
              <p className="text-[#8a94a7] text-xs">Join our thousands of satisfied users worldwide.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hidden SEO Block */}
      <div className="sr-only" aria-hidden="true">
        ios 18.7.9 ios 26.2 ios 26.3 ios 26.3.1 ios 26.4 ios 26.4.1 ios 26.5 ios 26.5.1 icloud bypass iphone xs to 17 pro max activatorphone bypass ios 18.7.9 icloud bypass iphone xs to 17 pro max icloud bypass ios 18.7.9 icloud activation lock bypass remove icloud lock iphone 17 pro max bypass icloud ios 18.7.9 icloud bypass without jailbreak iphone xs icloud bypass iphone 17 pro max icloud removal bypass icloud lock all models how to bypass icloud lock iphone 16 17 pro max ios 18 icloud bypass tool iphone xs xr 11 12 13 14 15 16 17 pro max remove icloud activation lock ios 18.7.9 without apple id free icloud bypass iphone 17 pro max ios 26.5.1 icloud bypass permanent iphone 15 16 17 series bypass icloud lock iphone 17 pro max ios 18.7.9 icloud removal tool all ios versions 18.7.9 to 26.5.1 factory reset icloud locked iphone without password cheap icloud bypass service permanent icloud bypass tool best icloud remover 2025 icloud bypass software for windows unlock icloud locked iphon
      </div>
    </main>
  );
}
