// Build-time only: scripts/prerender.mjs renders each page to HTML with this and writes it into dist/.
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import type { HelmetServerState } from 'react-helmet-async';
import { Providers, routes } from './App.tsx';

export async function render(path: string) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`https://www.psihologijam.rs${path}`));
  if (context instanceof Response) throw new Error(`prerender: ${path} answered with a redirect`);
  const router = createStaticRouter(handler.dataRoutes, context);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(<Providers helmetContext={helmetContext}><StaticRouterProvider router={router} context={context} /></Providers>);
  return { html, helmet: helmetContext.helmet! };
}
