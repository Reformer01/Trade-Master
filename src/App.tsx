import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster />
          
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen 
                key="loading"
                onComplete={() => setIsLoading(false)} 
              />
            ) : (
              <BrowserRouter key="app">
                <Routes>
                  <Route path="/" element={<Index />} />
                </Routes>
              </BrowserRouter>
            )}
          </AnimatePresence>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;