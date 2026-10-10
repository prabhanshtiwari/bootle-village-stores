# Bootle Village Stores & Post Office

A self-contained, frontend-only landing page built with React, JavaScript/JSX, Vite and Tailwind CSS v4. The page uses reusable components, local visual assets, and shop information in `src/data/shop.js`.

## Run locally

Requirements: Node.js 20.19+ or 22.12+, and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Import the original shop photos once

The app already uses local image paths. Until the original files are imported, it falls back to bundled local SVG illustrations.

With an internet connection, run:

```bash
npm run assets:download
```

The one-time importer attempts to save seven photographs into `public/images/`: the shopkeeper with hams, fresh produce, cheese, tinned-food shelves, wines and beers, plus two additional images from the old page. Some additional source images may be very small; review those files before using them.

Only reuse photographs if the shop owner or rights holder has authorised it.

## Remove the old source origin from the project

After the five main photographs are present locally, run the cleanup command and provide the source domain as an argument:

```bash
npm run clean:origin -- <source-domain>
```

This one-time command maps known image URLs to local `/images/` paths, removes remaining URLs to the supplied source domain, deletes the one-time photo importer, and removes its npm script. It refuses to run before the main local photos have been downloaded successfully. Review your Git diff and search the project for the former domain after cleanup.

## Production build

After cleanup:

```bash
npm run build
npm run preview
```

Vite writes the static site to `dist/`. Deploy that folder to a static host such as Netlify, Vercel or Cloudflare Pages.

## Contact actions

- **Call:** `tel:` links ask the visitor's device to open the dialler or a compatible calling app.
- **Email:** the enquiry form creates a prefilled `mailto:` message to the shop address. The visitor must send it from their mail app or browser mail handler.
- **WhatsApp:** the buttons open a prepared chat through WhatsApp or WhatsApp Web. The shop number must be registered with WhatsApp for chat to work.
- **Map and directions:** these are supplied by Google Maps and therefore need an internet connection; the former shop website is not used at runtime.

## Current shop details in the site

- Bootle Village Stores & Post Office, 4 Main St, Bootle, Millom LA19 5TF.
- Telephone: 01229 718233.
- Email: `bootlestores@hotmail.com`.
- Free LINK cash-point machine in store.
- Products listed on the provided store information: locally grown fruit and vegetables, fresh chickens and turkeys, bacon, free-range eggs, cheeses, breads, magazines and newspapers, slow-roasted hams and beef joints prepared in the AGA cooker, tinned foods, wines and beers.
- The store can be contacted in advance to ask about grocery orders prepared for collection before a stay nearby.
- Opening times as supplied: Mon/Tue/Thu/Fri 06:15–17:30; Wed 06:15–12:30; Sat 07:00–19:00; Sun 09:00–12:00.

Confirm details, opening hours, services, photo rights and WhatsApp availability with the owner before official launch. The website does not promise live stock or online ordering; it encourages customers to enquire directly.
