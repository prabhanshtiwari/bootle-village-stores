import { useState } from 'react';
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { shop } from '../data/shop.js';
import { CallLink } from './ActionLinks.jsx';

const navigation = [
  { label: 'In the shop', href: '#shop' },
  { label: 'Our services', href: '#services' },
  { label: 'Opening times', href: '#hours' },
  { label: 'Find us', href: '#visit' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-forest px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        <span className="inline-flex items-center justify-center gap-2"><MapPin size={14} aria-hidden="true" /> Bootle, Cumbria <span className="text-white/40">·</span> FREE LINK Cash-Point Machine In-Store</span>
      </div>
      <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#home" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label={`${shop.name} home`}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest font-serif text-2xl font-bold text-cream shadow-sm">B<span className="-ml-1 text-rust">.</span></span>
            <span className="min-w-0"><span className="block truncate font-serif text-lg font-bold leading-tight text-forest sm:text-xl">Bootle Village Stores</span><span className="block text-xs font-medium text-stone-500">&amp; Post Office, Cumbria</span></span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-stone-600 transition hover:text-rust">{item.label}</a>)}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a href={shop.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the shop" className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-citrus"><MessageCircle size={19} /></a>
            <CallLink className="px-4 py-3 text-sm" iconSize={16}>Call the shop</CallLink>
          </div>

          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl border border-forest/15 text-forest lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-forest/10 bg-cream px-4 py-3 lg:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="block rounded-xl px-3 py-3 font-semibold text-forest hover:bg-white">{item.label}</a>)}
            <div className="mt-2 grid grid-cols-2 gap-2 pb-1">
              <a href={`tel:${shop.phoneHref}`} onClick={closeMenu} className="flex items-center justify-center gap-2 rounded-full bg-forest px-3 py-3 text-sm font-bold text-white"><Phone size={16} /> Call</a>
              <a href={shop.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex items-center justify-center gap-2 rounded-full bg-[#1F8D55] px-3 py-3 text-sm font-bold text-white"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14}/></a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
