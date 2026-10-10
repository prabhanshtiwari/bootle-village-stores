import { ArrowUpRight, PackageSearch } from 'lucide-react';
import { products, shop } from '../data/shop.js';
import SectionIntro from './SectionIntro.jsx';
import ShopImage from './ShopImage.jsx';

function ProductCard({ product }) {
  const subject = `Enquiry about ${product.title.toLowerCase()}`;
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-forest/8 bg-paper transition duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-[0_18px_40px_rgba(23,61,50,.09)]">
      <a href={`mailto:${shop.email}?subject=${encodeURIComponent(subject)}`} className="block" aria-label={`Ask the shop about ${product.title}`}>
        <div className="relative overflow-hidden bg-citrus/25">
          <ShopImage src={product.image} fallbackSrc={product.fallbackImage} alt={product.imageAlt} loading="lazy" decoding="async" className="aspect-[1.4] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-paper/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] text-forest backdrop-blur">{product.label}</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3"><div><span className="text-xs font-bold tracking-[.12em] text-rust">{product.number}</span><h3 className="mt-2 font-serif text-xl font-bold leading-snug text-forest sm:text-2xl">{product.title}</h3></div><span className="mt-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest transition group-hover:border-forest group-hover:bg-forest group-hover:text-white"><ArrowUpRight size={18}/></span></div>
          <p className="mt-3 text-sm leading-6 text-stone-600">{product.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest">Ask about availability <ArrowUpRight size={15}/></span>
        </div>
      </a>
    </article>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro eyebrow="Good things on the shelves" title={<>A little bit of everything.<br /><span className="italic text-rust">A lot of local care.</span></>} description="Fresh fruit and vegetables, poultry, bacon, free-range eggs, cheeses, bread, tinned foods, wines, beers, magazines and newspapers. Ask us about current stock before making a special trip." />
          <a href={`mailto:${shop.email}?subject=${encodeURIComponent('Product availability enquiry')}`} className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-forest/15 px-5 py-3.5 text-sm font-bold text-forest transition hover:bg-citrus/50">Ask about today’s stock <ArrowUpRight size={17}/></a>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-forest/10 bg-cream p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-start gap-3"><span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-forest"><PackageSearch size={20}/></span><p className="max-w-2xl text-sm leading-6 text-stone-600"><strong className="text-forest">Looking for something specific?</strong> Stock changes, so contact the shop to check availability before making a special trip.</p></div><a href={`mailto:${shop.email}?subject=${encodeURIComponent('Product availability enquiry')}`} className="inline-flex items-center gap-2 self-start whitespace-nowrap text-sm font-bold text-rust hover:text-forest sm:self-center">Ask the shop <ArrowUpRight size={16}/></a></div>
      </div>
    </section>
  );
}
