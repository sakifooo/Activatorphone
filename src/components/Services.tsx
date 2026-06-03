
import { Shield, Smartphone, Monitor, Signal, Key, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    title: 'iCloud Bypass with Signal',
    description: 'Bypass Hello Screen on iPhone 5s to X with full signal support, iMessage, and FaceTime.',
    icon: <Signal className="w-8 h-8 text-primary" />,
    specs: ['iOS 12 - 16.x', 'Signal Supported', 'OTA Updates']
  },
  {
    title: 'T2 Chip Bypass (Mac)',
    description: "The world's first and only solution to bypass Activation Lock on T2 Mac devices.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    specs: ['MacBook Pro/Air', 'Mac Mini/Pro', 'iMac Pro']
  },
  {
    title: 'MDM Removal',
    description: 'Permanently remove MDM (Remote Management) profiles without needing credentials.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    specs: ['All iOS versions', 'No data loss', 'Instant']
  },
  {
    title: 'Passcode / Disabled',
    description: 'Fix disabled or passcode-locked devices while keeping your network active.',
    icon: <Key className="w-8 h-8 text-primary" />,
    specs: ['iPhone 5s - X', 'Fix Restore', 'Data Retained']
  },
  {
    title: 'Carrier Unlock',
    description: 'Unlock your network carrier permanently for use with any global SIM card.',
    icon: <Globe className="w-8 h-8 text-primary" />,
    specs: ['Worldwide', 'Factory Unlock', 'Safe']
  },
  {
    title: 'A-Series Hello Screen',
    description: 'Specialized bypass for A-series chips with premium stability and success rates.',
    icon: <Shield className="w-8 h-8 text-primary" />,
    specs: ['Fast Process', 'Lifetime Support', 'Verified']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Enterprise Grade Solutions</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-headline">Unrivaled Performance</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            iRemoval Pro is the industry leader in providing high-end bypass solutions for Apple devices with 100% reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-500 group overflow-hidden">
              <CardHeader className="p-8 space-y-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-foreground/60 text-base leading-relaxed mb-6">
                    {feature.description}
                  </CardDescription>
                </div>
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {feature.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {spec}
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
