import { Mail, MessageCircle, Phone } from 'lucide-react';
import { shop } from '../data/shop.js';

export default function MobileQuickActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-forest/10 bg-paper/95 p-2.5 shadow-[0_-8px_24px_rgba(23,61,50,.10)] backdrop-blur sm:hidden">
      <a href={`tel:${shop.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-forest px-2 py-3 text-xs font-bold text-white"><Phone size={16}/> Call</a>
      <a href={`mailto:${shop.email}?subject=${encodeURIComponent('Enquiry for Bootle Village Stores')}`} className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-forest/15 bg-white px-2 py-3 text-xs font-bold text-forest"><Mail size={16}/> Email</a>
      <a href={shop.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-[#1F8D55] px-2 py-3 text-xs font-bold text-white"><MessageCircle size={16}/> WhatsApp</a>
    </div>
  );
}
