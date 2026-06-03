
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const reviews = [
  {
    name: "Alex Johnson",
    role: "Tech Reviewer",
    text: "The iCloud bypass worked flawlessly on my old iPad. I thought it was a brick, but iRemoval Pro brought it back to life in under 10 minutes.",
    avatar: PlaceHolderImages.find(img => img.id === 'user-1')?.imageUrl
  },
  {
    name: "Sarah Williams",
    role: "Business Owner",
    text: "MDM removal for my fleet of corporate iPads was a breeze. Customer support was incredibly responsive and helpful through the process.",
    avatar: PlaceHolderImages.find(img => img.id === 'user-2')?.imageUrl
  },
  {
    name: "Michael Chen",
    role: "iPhone User",
    text: "Incredible service. I was skeptical at first but the carrier unlock was permanent and worked instantly. Highly recommended!",
    avatar: PlaceHolderImages.find(img => img.id === 'user-3')?.imageUrl
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">Success Stories</h2>
            <h3 className="text-4xl font-bold font-headline">What Our Clients Say</h3>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50 space-y-6 relative">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={review.avatar || ''}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
