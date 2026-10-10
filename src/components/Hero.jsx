import { ArrowDown, ArrowUpRight, Leaf, MapPin, ShoppingBasket, Sparkles } from 'lucide-react';
import { shop } from '../data/shop.js';
import { CallLink, EmailLink, WhatsAppLink } from './ActionLinks.jsx';
import ShopImage from './ShopImage.jsx';

const signals = [
  { icon: Leaf, title: 'Fresh local produce', text: 'Fruit and locally grown vegetables' },
  { icon: ShoppingBasket, title: 'Everyday essentials', text: 'Groceries, cheese, bread and more' },
  { icon: Sparkles, title: 'Useful local services', text: 'Post Office and free LINK cash-point' },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-36 top-12 -z-10 h-96 w-96 rounded-full bg-citrus/60 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_.94fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-paper px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-forest shadow-sm sm:text-sm"><span className="h-2 w-2 rounded-full bg-rust" /> BOOTLE VILLAGE STORES & POST OFFICE · CUMBRIA</div>
          <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-[4.7rem]">Village essentials, <span className="italic text-rust">all in one place.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">Fresh, locally grown fruit and vegetables, poultry, bacon, free-range eggs, cheese, bread, newspapers and more. We also slow-roast hams and beef joints in-house in our AGA cooker.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallLink>Call {shop.phoneDisplay}</CallLink>
            <WhatsAppLink>WhatsApp an enquiry</WhatsAppLink>
          </div>
          <div className="mt-4"><EmailLink subject="Enquiry for Bootle Village Stores">Email the shop</EmailLink></div>
          <p className="mt-5 text-sm font-semibold leading-6 text-stone-500">{shop.locationNote} · Ask us about arranging grocery collection before your stay.</p>
          <a href="#shop" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:text-rust">Explore what’s in store <ArrowDown size={17} /></a>
          <div className="mt-9 flex items-center gap-3 border-t border-forest/10 pt-6 text-sm text-stone-600"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-citrus text-forest"><MapPin size={18}/></span><span><strong className="block text-forest">Right in the heart of Bootle</strong>{shop.shortAddress}</span><a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-white" aria-label="Get directions"><ArrowUpRight size={18}/></a></div>
        </div>
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -left-5 top-12 h-28 w-28 rounded-full border border-rust/20 sm:-left-8 sm:h-36 sm:w-36" />
          <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-paper shadow-[0_24px_70px_rgba(23,61,50,.15)] sm:rounded-[2.5rem]">
            <ShopImage src="/images/shopkeeper-hams.png" fallbackSrc="/images/hero-market.svg" alt="David Scott, the shopkeeper, with two hams destined for the AGA cooker" className="aspect-[0.94] w-full object-cover sm:aspect-[1.05]" fetchPriority="high" />
          </div>
          <div className="absolute -bottom-5 left-4 max-w-[230px] rounded-2xl border border-forest/10 bg-paper p-4 shadow-xl sm:-left-6 sm:bottom-8 sm:max-w-[245px] sm:p-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-rust">Prepared in-store</p>
            <p className="mt-1 font-serif text-xl font-bold leading-snug text-forest sm:text-2xl">Hams for the AGA</p>
            <p className="mt-1 text-sm text-stone-500">David Scott’s slow-roasted hams and beef joints.</p>
          </div>
          <div className="absolute -right-1 top-7 hidden rounded-2xl bg-forest px-4 py-3 text-white shadow-lg sm:block sm:-right-4"><p className="font-serif text-2xl font-bold">Free</p><p className="text-xs text-white/70">LINK cash-point</p></div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 pb-10 sm:grid-cols-3 sm:px-6 lg:px-8 lg:pb-14">
        {signals.map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-3 rounded-2xl border border-forest/8 bg-paper/80 p-4 sm:p-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrus text-forest"><Icon size={21}/></span><span><strong className="block text-sm text-forest">{title}</strong><span className="mt-1 block text-xs leading-5 text-stone-500 sm:text-sm">{text}</span></span></div>)}
      </div>
    </section>
  );
}
