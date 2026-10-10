import { ArrowUpRight, Clock3 } from 'lucide-react';
import { openingHours, shop } from '../data/shop.js';
import SectionIntro from './SectionIntro.jsx';

export default function OpeningHours() {
  return (
    <section id="hours" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionIntro eyebrow="Come by when it suits" title={<>Early starts.<br /><span className="italic text-rust">Local convenience.</span></>} description="We open early through much of the week to help make your everyday shop a little easier." />
          <div className="mt-7 flex items-start gap-3 rounded-2xl bg-citrus/55 p-4 text-sm leading-6 text-forest"><Clock3 className="mt-0.5 shrink-0" size={20}/><p>These are the regular shop hours currently listed. Opening may vary on public holidays, so call ahead if you are making a special trip.</p></div>
          <p className="mt-5 text-sm leading-6 text-stone-500">The Post Office counter may keep different hours from the shop.</p>
          <a href={shop.postOfficeUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-rust transition hover:text-forest">Check Post Office branch details <ArrowUpRight size={16}/></a>
        </div>
        <div className="rounded-[1.8rem] border border-forest/10 bg-cream p-5 shadow-sm sm:p-8">
          <div className="flex items-center justify-between border-b border-forest/10 pb-5"><div><p className="font-serif text-2xl font-bold text-forest">Shop opening times</p><p className="mt-1 text-sm text-stone-500">Monday to Sunday</p></div><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-citrus"><Clock3 size={23}/></span></div>
          <div className="divide-y divide-forest/8">
            {openingHours.map((item) => <div key={item.day} className="flex items-center justify-between gap-4 py-4 text-sm"><span className="font-semibold text-stone-600">{item.day}</span><span className="rounded-lg bg-white px-3 py-2 font-bold tabular-nums text-forest">{item.hours}</span></div>)}
          </div>
          <p className="mt-3 text-xs leading-5 text-stone-500">Hours provided for the shop; please confirm current times directly with the owner.</p>
        </div>
      </div>
    </section>
  );
}
