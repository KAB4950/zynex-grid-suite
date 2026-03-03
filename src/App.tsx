import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Battery from "./pages/Battery";
import TheMarket from "./pages/TheMarket";
import Market from "./pages/Market";
import About from "./pages/About";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/battery" element={<Battery />} />
              <Route path="/the-battery" element={<Battery />} />
              <Route path="/market" element={<Market />} />
              <Route path="/the-market" element={<TheMarket />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
