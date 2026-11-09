import { createRoot, hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Providers, routes } from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;
const app = <Providers><RouterProvider router={createBrowserRouter(routes)} /></Providers>;
// The built pages arrive with their HTML already in place (scripts/prerender.mjs), marked with the page it is for:
// React takes it over. If the server answered with another page's HTML (a fallback to index.html for an address that
// has no file) or in development, where the root is empty, React renders from scratch instead.
const same = (a: string) => a.replace(/\/+$/, "") || "/";
if (root.dataset.page && same(root.dataset.page) === same(location.pathname)) hydrateRoot(root, app);
else { root.replaceChildren(); createRoot(root).render(app); }
