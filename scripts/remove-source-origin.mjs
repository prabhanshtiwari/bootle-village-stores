/**
 * One-time project cleanup. Supply the old domain as a CLI argument, e.g.
 * `npm run clean:origin -- <source-domain>`.
 * Known image URLs are rewritten to local /images paths; any remaining URLs
 * to that domain are removed. The importer is deleted only after core photos
 * exist locally, so it can still be retried if downloads failed.
 */
import { readdir, readFile, writeFile, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const suppliedDomain = (process.argv[2] || '').trim().replace(/^https?:\/\//i, '').replace(/^www\./i, '').replace(/\/$/, '');
if (!suppliedDomain || suppliedDomain.includes('/') || suppliedDomain.includes(' ')) {
  console.error('Usage: npm run clean:origin -- <source-domain>');
  process.exit(2);
}

const requiredPhotos = [
  'shopkeeper-hams.png',
  'local-produce.png',
  'cheese-selection.png',
  'pantry-shelves.png',
  'wine-beer-shelves.png',
];
const imagesDir = path.join(root, 'public', 'images');
const missingPhotos = [];
for (const file of requiredPhotos) {
  try {
    const info = await stat(path.join(imagesDir, file));
    if (!info.isFile() || info.size < 1500) missingPhotos.push(file);
  } catch {
    missingPhotos.push(file);
  }
}
if (missingPhotos.length) {
  console.error(`Cannot remove the one-time importer yet. Import the main photos first; missing or too-small files: ${missingPhotos.join(', ')}`);
  process.exit(1);
}

const assetMap = new Map([
  ['wp4305d1ec_06.png', '/images/shopkeeper-hams.png'],
  ['wp221ca727_06.png', '/images/local-produce.png'],
  ['wp4a3e6e65_06.png', '/images/cheese-selection.png'],
  ['wp8f423c65_06.png', '/images/pantry-shelves.png'],
  ['wp0a5389da_06.png', '/images/wine-beer-shelves.png'],
  ['wpb339eaa9_05_06.jpg', '/images/collection-order.jpg'],
  ['wpd30100c2_05_06.jpg', '/images/opening-times.jpg'],
]);
const hostPattern = suppliedDomain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const basePattern = new RegExp(`https?:\\/\\/(?:www\\.)?${hostPattern}`, 'gi');
const knownImagePattern = new RegExp(`https?:\\/\\/(?:www\\.)?${hostPattern}\\/_wp_generated\\/([^\\s"'<>\\)]+)`, 'gi');
const ignoredDirs = new Set(['node_modules', '.git', '.vite', 'coverage']);
const textExtensions = new Set(['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.css', '.html', '.json', '.md', '.txt', '.xml', '.svg', '.yml', '.yaml', '.toml']);
let filesChanged = 0;
let linksMapped = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) await walk(fullPath);
      continue;
    }
    if (!entry.isFile() || !textExtensions.has(path.extname(entry.name).toLowerCase())) continue;
    if (fullPath === fileURLToPath(import.meta.url)) continue;
    let content;
    try { content = await readFile(fullPath, 'utf8'); } catch { continue; }
    const original = content;
    content = content.replace(knownImagePattern, (whole, pathAndMaybeSuffix) => {
      const basename = path.basename(pathAndMaybeSuffix.split(/[?#]/)[0]);
      const localPath = assetMap.get(basename);
      if (localPath) { linksMapped += 1; return localPath; }
      return '';
    });
    // Remove any other absolute URL pointing to the former source host.
    content = content.replace(new RegExp(`${basePattern.source}[^\\s"'<>)]*`, 'gi'), '');
    // Also catch bare domain references if present in notes or configuration.
    content = content.replace(new RegExp(hostPattern, 'gi'), '');
    if (content !== original) {
      await writeFile(fullPath, content, 'utf8');
      filesChanged += 1;
    }
  }
}

// Remove the one-time downloader, which is the only file that needs source URLs.
const importerPath = path.join(root, 'scripts', 'import-source-photos.mjs');
try { await unlink(importerPath); console.log('Removed one-time photo importer.'); } catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

// Remove its npm script so the cleaned project does not point to a deleted file.
const packagePath = path.join(root, 'package.json');
const packageData = JSON.parse(await readFile(packagePath, 'utf8'));
if (packageData.scripts?.['assets:download']) {
  delete packageData.scripts['assets:download'];
  await writeFile(packagePath, `${JSON.stringify(packageData, null, 2)}\n`, 'utf8');
}

await walk(root);
console.log(`Cleaned source references. Files changed: ${filesChanged}; known image links mapped: ${linksMapped}.`);
console.log('The website now uses local image paths; check your Git diff and run `npm run build` before publishing.');
