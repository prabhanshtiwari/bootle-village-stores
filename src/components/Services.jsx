import { ArrowUpRight, Banknote, Mail, PackageCheck, Stamp } from 'lucide-react';
import { services, shop } from '../data/shop.js';
import SectionIntro from './SectionIntro.jsx';
import ShopImage from './ShopImage.jsx';

const serviceIcons = { 'post-office': Stamp, cash: Banknote, basket: PackageCheck };

export default function Services() {
  return (
    <section id="services" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="More than a shop" title="Useful services, right around the corner." description="Everyday convenience and a few extra helpful services to make village life a little easier." />
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article key={service.id} className={`relative overflow-hidden rounded-[1.6rem] p-6 sm:p-7 ${index === 1 ? 'bg-forest text-white' : 'border border-forest/10 bg-paper text-forest'}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${index === 1 ? 'bg-white/10 text-citrus' : 'bg-citrus text-forest'}`}><Icon size={26}/></span>
                <h3 className="mt-6 font-serif text-2xl font-bold">{service.title}</h3>
                <p className={`mt-3 min-h-[76px] text-sm leading-6 ${index === 1 ? 'text-white/70' : 'text-stone-600'}`}>{service.description}</p>
                <a href={service.href} target={service.external ? '_blank' : undefined} rel={service.external ? 'noopener noreferrer' : undefined} className={`mt-6 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${index === 1 ? 'bg-citrus text-forest hover:bg-white' : 'border border-forest/15 hover:bg-citrus/50'}`}>{service.actionLabel}<ArrowUpRight size={16}/></a>
                {index === 1 && <div className="pointer-events-none absolute -bottom-8 -right-6 h-36 w-36 rounded-full border border-white/10" />}
              </article>
            );
          })}
        </div>
        <div className="mt-8 grid overflow-hidden rounded-[1.8rem] bg-[#f1e5d3] lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 sm:p-9 lg:p-11">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-rust">Planning a visit?</p>
            <h3 className="mt-3 max-w-md font-serif text-3xl font-bold leading-tight text-forest sm:text-4xl">A quick message can make collection easy.</h3>
            <p className="mt-4 max-w-lg leading-7 text-stone-600">Staying at Eskmeals House? The shop is around 3 miles away. Telephone David Scott or email your requirements ahead of time and ask about having groceries ready for collection.</p>
            <a href={`mailto:${shop.email}?subject=${encodeURIComponent('Grocery collection order enquiry')}&body=${encodeURIComponent('Hello Bootle Village Stores,\n\nI would like to ask about arranging a grocery collection order.\n\nMy requirements are:\n')}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition hover:bg-forest-light"><Mail size={18}/> Enquire about collection</a>
          </div>
          <div className="min-h-[260px] p-4 sm:p-6 lg:p-8">
            <ShopImage src="/images/pantry-shelves.png" fallbackSrc="/images/pantry.svg" alt="A comprehensive selection of tinned and packaged foods on the shop shelves" className="h-full min-h-[250px] w-full rounded-[1.3rem] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
