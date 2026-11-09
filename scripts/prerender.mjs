// After `vite build`: render every page to HTML and write it into dist/, so the served pages have their headings,
// text, links and their own <title>, description and canonical without JavaScript. Run by `npm run build`.
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';

const PAGES = ['/', '/cenovnik', '/o-meni'];
const { render } = await import('../dist-ssr/entry-server.js');
const template = readFileSync('dist/index.html', 'utf8');
if (!template.includes('<!--app-->')) throw new Error('prerender: <!--app--> not found in dist/index.html');

for (const path of PAGES) {
  const { html, helmet } = await render(path);
  // The page's own head tags (react-helmet) replace the general ones from index.html, so no tag appears twice.
  const head = template
    .replace(/<title>[^<]*<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace(/<meta property="og:(url|title|description)"[^>]*>\s*/g, '')
    .replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}\n  </head>`);
  const out = path === '/' ? 'dist/index.html' : `dist${path}/index.html`;
  if (path !== '/') mkdirSync(`dist${path}`, { recursive: true });
  writeFileSync(out, head.replace('<div id="root">', `<div id="root" data-page="${path}">`).replace('<!--app-->', html));
  console.log('prerendered', out);
}
rmSync('dist-ssr', { recursive: true, force: true });
