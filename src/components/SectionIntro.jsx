export default function SectionIntro({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`text-xs font-extrabold uppercase tracking-[.2em] ${light ? 'text-citrus' : 'text-rust'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-forest'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${light ? 'text-white/70' : 'text-stone-600'}`}>{description}</p>}
    </div>
  );
}
