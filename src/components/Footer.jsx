import { MapPin } from 'lucide-react';
import { shop } from '../data/shop.js';
import { CallLink, EmailLink, WhatsAppLink } from './ActionLinks.jsx';

export default function Footer() {
  return (
    <footer className="bg-[#102f27] px-4 pb-28 pt-10 text-white sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="#home" className="inline-flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-citrus font-serif text-2xl font-bold text-forest">B.</span><span><span className="block font-serif text-xl font-bold">{shop.name}</span><span className="block text-sm text-white/60">{shop.descriptor}</span></span></a>
            <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-white/60"><MapPin size={16} className="mt-1 shrink-0"/>{shop.shortAddress}</p>
          </div>
          <div className="flex flex-wrap gap-2"><CallLink className="bg-citrus text-forest shadow-none hover:bg-white"/><EmailLink className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10"/><WhatsAppLink className="shadow-none"/></div>
        </div>
        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Bootle Village Stores. All rights reserved.</span><span>Stock and opening times can vary. Please contact the shop to confirm.</span></div>
      </div>
    </footer>
  );
}
