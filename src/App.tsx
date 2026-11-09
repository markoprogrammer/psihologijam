import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, useLocation, type RouteObject } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, type ReactNode } from "react";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

const queryClient = new QueryClient();

// Wrapper komponenta koja resetuje scroll poziciju i obrađuje anchor linkove
const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Resetuj scroll poziciju kada se menja ruta
    window.scrollTo(0, 0);
    
    // Obradi anchor linkove ako postoje u hash-u
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
};

// One list of routes for both sides: the browser (main.tsx) and the build-time prerender (entry-server.tsx).
// A new page goes here and in PAGES in scripts/prerender.mjs and public/sitemap.xml.
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ScrollToTop><Index /></ScrollToTop>,
  },
  {
    path: "/cenovnik",
    element: <ScrollToTop><Pricing /></ScrollToTop>,
  },
  {
    path: "/o-meni",
    element: <ScrollToTop><About /></ScrollToTop>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

/** Everything around the router. `helmetContext` collects the page's head tags when prerendering. */
export const Providers = ({ children, helmetContext }: { children: ReactNode; helmetContext?: object }) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
