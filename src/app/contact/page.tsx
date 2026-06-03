
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your request and will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our unlocking services? Our technical support team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 space-y-8">
              <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Call Us</p>
                    <p className="text-muted-foreground">+1 (800) I-UNLOCK</p>
                    <p className="text-xs text-primary font-semibold mt-1 uppercase">Mon-Fri 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email Support</p>
                    <p className="text-muted-foreground">support@iremovalpro.com</p>
                    <p className="text-xs text-primary font-semibold mt-1 uppercase">24/7 Response Guaranteed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Headquarters</p>
                    <p className="text-muted-foreground">123 Tech Avenue<br />Silicon Valley, CA 94025, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="rounded-2xl overflow-hidden bg-muted h-64 relative border border-border/50">
               <img src="https://picsum.photos/seed/map1/600/400" alt="Map" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 border border-primary/20 animate-bounce">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-bold">Find Us on Google Maps</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 h-full">
              <h3 className="text-2xl font-bold font-headline mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="h-12 bg-secondary/30 border-none rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="h-12 bg-secondary/30 border-none rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12 bg-secondary/30 border-none rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="device">Device Model (Optional)</Label>
                  <Input id="device" placeholder="iPhone 15 Pro Max" className="h-12 bg-secondary/30 border-none rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe the issue you're facing or the service you're interested in..." 
                    required 
                    className="min-h-[160px] bg-secondary/30 border-none rounded-xl resize-none p-4" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full md:w-auto px-12 h-14 rounded-full text-lg font-bold group"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
