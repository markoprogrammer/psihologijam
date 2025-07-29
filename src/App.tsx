import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

const queryClient = new QueryClient();

// Wrapper komponenta koja resetuje scroll poziciju i obrađuje anchor linkove
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
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

const router = createBrowserRouter([
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
]);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
