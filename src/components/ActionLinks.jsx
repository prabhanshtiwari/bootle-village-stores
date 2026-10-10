import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { shop } from '../data/shop.js';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export function CallLink({ className = '', children = 'Call the shop', iconSize = 18 }) {
  return (
    <a href={`tel:${shop.phoneHref}`} className={`${base} bg-forest text-white shadow-lg shadow-forest/15 hover:-translate-y-0.5 hover:bg-forest-light ${className}`}>
      <Phone size={iconSize} aria-hidden="true" /> {children}
    </a>
  );
}

export function EmailLink({ className = '', children = 'Email the shop', subject = 'Enquiry for Bootle Village Stores' }) {
  return (
    <a href={`mailto:${shop.email}?subject=${encodeURIComponent(subject)}`} className={`${base} border border-forest/20 bg-paper text-forest hover:-translate-y-0.5 hover:border-forest/40 hover:bg-citrus/40 ${className}`}>
      <Mail size={18} aria-hidden="true" /> {children}
    </a>
  );
}

export function WhatsAppLink({ className = '', children = 'WhatsApp us', message = 'Hello Bootle Village Stores, I have an enquiry.' }) {
  const href = `https://wa.me/${shop.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} bg-[#1F8D55] text-white hover:-translate-y-0.5 hover:bg-[#197647] ${className}`}>
      <MessageCircle size={18} aria-hidden="true" /> {children} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}
