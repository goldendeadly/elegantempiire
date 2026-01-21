import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Link, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComparisonPage from "./pages/ComparisonPage";
import HubPage from "./pages/HubPage";
import MegaMenu from "@/components/MegaMenu";
import React, { Suspense } from 'react';

// 1. Find all the pages in the folder
const pages = import.meta.glob('./pages/**/*.tsx');

// 2. Build a list of valid routes based on the actual files
const generatedRoutes = Object.keys(pages).map((filePath) => {
  // Convert "./pages/wardrobe/outerwear/index.tsx" -> "/wardrobe/outerwear"
  let routePath = filePath
    .replace('./pages', '')
    .replace('/index.tsx', '');
    
  return {
    path: routePath,
    // Create a lazy-loading component for this page
    component: React.lazy(() => pages[filePath]() as any)
  };
});

function Router() {
  return (
    <Switch>
      {/* Hardcoded Main Routes */}
      <Route path="/" component={Home} />
      <Route path="/comparison/:slug" component={ComparisonPage} />
      <Route path="/hub/:category" component={HubPage} /> 
      <Route path="/comparisons" component={Home} />

      {/* Generated Routes from the File System */}
      {generatedRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path}>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#666] uppercase tracking-widest text-xs">Loading...</div>}>
            <Component />
          </Suspense>
        </Route>
      ))}

      {/* 404 Catch-All */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#E5E5E0]">
            <nav className="sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#E5E5E0]">
              <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity mr-12">
                  ELEGANT EMPIIRE
                </Link>
                <MegaMenu />
                <div className="flex items-center gap-4 ml-auto">
                    <Link href="/wardrobe" className="hidden md:block px-4 py-2 text-xs font-medium uppercase tracking-widest border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
                        Wardrobe OS
                    </Link>
                </div>
              </div>
            </nav>
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


