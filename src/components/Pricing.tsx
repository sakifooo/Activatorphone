
"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

export default function Pricing() {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const features = [
    "Untethered (shutdown support)",
    "iServices/Notifications/iPay",
    "iPhone XS to 17 Pro Max",
    "iPad 8 to iPad Air M4",
    "iOS 18.7.9 to 26.5.1",
    "Fake Erase",
    "No OTA"
  ];

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
    <section className="pricing section py-24">
      <div className="container-sm">
        <div className="pricing-inner section-inner">
          <div className="pricing-header text-center mb-12">
            <h2 className="section-title mt-0 text-3xl font-bold text-white">A12+ No Signal - Untethered</h2>
            <p className="section-paragraph mb-0 opacity-70">Activate your device and use it without signal</p>
          </div>
          <div className="pricing-tables-wrap flex justify-center">
            <div className="pricing-table w-full max-w-[368px]">
              <div className="pricing-table-inner rounded-sm overflow-hidden">
                <div className="pricing-table-main w-full">
                  <div className="pricing-table-header pb-6 border-b border-white/10">
                    <div className="pricing-table-price">
                      <span className="pricing-table-price-amount text-5xl font-bold text-white">$10</span>
                      <span className="text-xs opacity-60 ml-2">/device</span>
                    </div>
                  </div>
                  <div className="pricing-table-features-title text-xs pt-6 pb-4 font-bold text-white uppercase tracking-wider">
                    Working Features Include
                  </div>
                  <ul className="pricing-table-features list-none p-0 text-sm">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center py-3 border-b border-white/5 opacity-80">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-table-cta mt-8 space-y-3 w-full">
                  {wallets.map((wallet) => (
                    <Dialog key={wallet.name}>
                      <DialogTrigger asChild>
                        <Button className="button button-primary button-block w-full">Register Now! ({wallet.name})</Button>
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
      </div>
    </section>
  );
}
