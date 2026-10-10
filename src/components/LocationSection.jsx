import { ArrowUpRight, Clock3, MapPin, Navigation, Star } from 'lucide-react';
import { shop } from '../data/shop.js';
import SectionIntro from './SectionIntro.jsx';
import { CallLink } from './ActionLinks.jsx';

export default function LocationSection() {
  return (
    <section id="visit" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <SectionIntro eyebrow="Pop in and say hello" title={<>Find us in<br /><span className="italic text-rust">Bootle, Cumbria.</span></>} description="A handy local stop for your weekly essentials, your holiday shop or a quick question for the team." />
            <div className="mt-7 flex items-start gap-3 text-stone-600"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrus text-forest"><MapPin size={20}/></span><p className="pt-1 text-sm leading-6">{shop.address}</p></div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition hover:bg-forest-light"><Navigation size={17}/> Get directions <ArrowUpRight size={15}/></a><CallLink className="justify-center">Call before you visit</CallLink></div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-500"><span className="inline-flex items-center gap-2"><Clock3 size={16}/> Opening times below</span><a href={shop.listingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-rust hover:text-forest"><Star size={16}/> Find us on Google <ArrowUpRight size={14}/></a></div>
            <p className="mt-6 max-w-lg text-xs leading-5 text-stone-500">The Google Maps panel below is loaded from Google. The shop information, illustrations and other page content are stored in this project.</p>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border-[6px] border-paper bg-stone-100 shadow-xl shadow-forest/10">
            <iframe title="Map showing Bootle Village Stores in Bootle, Cumbria" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={shop.mapEmbedUrl} className="h-[320px] w-full sm:h-[420px]" allowFullScreen />
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-3 rounded-[1.4rem] border border-forest/10 bg-paper p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><p className="max-w-2xl text-sm leading-6 text-stone-600"><strong className="text-forest">Had a good visit?</strong> Reviews help local people discover the shop. If you choose to leave feedback, please share your honest experience.</p><a href={shop.reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-forest/15 px-5 py-3 text-sm font-bold text-forest transition hover:bg-citrus/50">Leave a Google review <ArrowUpRight size={16}/></a></div>
      </div>
    </section>
  );
}
