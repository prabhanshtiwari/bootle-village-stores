import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { shop } from '../data/shop.js';
import SectionIntro from './SectionIntro.jsx';

const initialForm = { name: '', reply: '', topic: 'Product availability', message: '' };

function buildEmail(form) {
  const subject = `Bootle Village Stores enquiry: ${form.topic}`;
  const body = [
    'Hello Bootle Village Stores,',
    '',
    form.message.trim(),
    '',
    `Name: ${form.name.trim()}`,
    `My email or phone: ${form.reply.trim()}`,
    `Enquiry topic: ${form.topic}`,
  ].join('\n');
  return `mailto:${shop.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.reply.trim() || !form.message.trim()) {
      setError('Please complete your name, a way to reply, and your message.');
      return;
    }
    window.location.href = buildEmail(form);
  }

  function openWhatsApp() {
    const message = `Hello Bootle Village Stores,\n\n${form.message.trim() || 'I have a question.'}\n\nName: ${form.name.trim() || '(not provided)'}\nEnquiry: ${form.topic}`;
    window.open(`https://wa.me/${shop.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" /><div className="pointer-events-none absolute -right-20 -top-12 h-[280px] w-[280px] rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionIntro eyebrow="Easy to get in touch" title={<>A question?<br /><span className="italic text-citrus">Just ask.</span></>} description="Telephone David Scott or send an enquiry about stock, grocery collection, the Post Office or the free cash-point." light />
            <div className="mt-8 grid gap-3">
              <a href={`tel:${shop.phoneHref}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-white transition hover:bg-white/10"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-citrus"><Phone size={22}/></span><span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wide text-white/55">Call David Scott, the shopkeeper</span><span className="mt-1 block font-bold">{shop.phoneDisplay}</span></span><ArrowUpRight size={18} className="text-white/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>
              <a href={`mailto:${shop.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-white transition hover:bg-white/10"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-citrus"><Mail size={22}/></span><span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wide text-white/55">Email the shop</span><span className="mt-1 block break-all font-bold">{shop.email}</span></span><ArrowUpRight size={18} className="text-white/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>
              <a href={shop.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-white transition hover:bg-white/10"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F8D55] text-white"><MessageCircle size={22}/></span><span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wide text-white/55">Message on WhatsApp</span><span className="mt-1 block font-bold">Start a chat with the shop</span></span><ArrowUpRight size={18} className="text-white/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>
            </div>
            <p className="mt-5 max-w-lg text-xs leading-5 text-white/55">Calls depend on your device and phone service. Email opens your email app, and WhatsApp opens the app or WhatsApp Web. You choose whether to send your message.</p>
          </div>

          <form onSubmit={submit} className="rounded-[1.8rem] border border-white/30 bg-paper p-5 shadow-[0_24px_70px_rgba(0,0,0,.16)] sm:p-8">
            <div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-citrus text-forest"><Mail size={22}/></span><div><h3 className="font-serif text-2xl font-bold text-forest">Send an enquiry</h3><p className="mt-1 text-sm text-stone-500">We’ll prepare a message for your email app.</p></div></div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-bold text-stone-700">Your name</span><input required maxLength={100} value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" placeholder="Your name" className="field-input" /></label>
              <label className="block"><span className="mb-2 block text-sm font-bold text-stone-700">Email or phone</span><input required maxLength={150} value={form.reply} onChange={(e) => update('reply', e.target.value)} autoComplete="email" placeholder="How can we reply?" className="field-input" /></label>
              <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-bold text-stone-700">What is it about?</span><select value={form.topic} onChange={(e) => update('topic', e.target.value)} className="field-input"><option>Product availability</option><option>Grocery collection order</option><option>Post Office service</option><option>Cash machine</option><option>Opening hours</option><option>General question</option></select></label>
              <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-bold text-stone-700">Your message</span><textarea required maxLength={2500} rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us what you would like to know…" className="field-input resize-y" /></label>
            </div>
            {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row"><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition hover:bg-forest-light">Open email to send <Send size={17}/></button><button type="button" onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F8D55]/30 bg-[#1F8D55]/5 px-5 py-3.5 text-sm font-bold text-[#197647] transition hover:bg-[#1F8D55]/10"><MessageCircle size={17}/> Send on WhatsApp</button></div>
            <p className="mt-4 text-xs leading-5 text-stone-500">This is a frontend-only website. It does not send or store messages itself; your email app or WhatsApp will open so you can review and send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
