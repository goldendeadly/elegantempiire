import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Link, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComparisonPage from "./pages/ComparisonPage";
import HubPage from "./pages/HubPage";
import MegaMenu from "@/components/MegaMenu";
import React, { Suspense, useEffect } from 'react';

// Auto-import all generated pages
const pages = import.meta.glob('./pages/**/*.tsx');

// Component to handle dynamic routing for the generated structure
const DynamicRoute = ({ path }: { path: string }) => {
  // Construct the import path based on the URL
  // e.g., /wardrobe/outerwear -> ./pages/wardrobe/outerwear/index.tsx
  const importPath = `./pages${path}/index.tsx`;
  
  // Safety check
  if (!pages[importPath]) {
    return <NotFound />;
  }

  const Component = React.lazy(() => pages[importPath]() as any);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#666] uppercase tracking-widest text-xs">Loading...</div>}>
      <Component />
    </Suspense>
  );
};

function Router() {
  const [location] = useLocation();

  // Helper to check if a path exists in our generated pages
  const checkPathExists = (path: string) => {
    // Remove trailing slash if present
    const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const importPath = `./pages${cleanPath}/index.tsx`;
    return !!pages[importPath];
  };

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/comparison/:slug" component={ComparisonPage} />
      <Route path="/hub/:category" component={HubPage} /> 
      <Route path="/comparisons" component={Home} />
      
      {/* 
        Catch-all for the generated structure.
        We use a wildcard route that matches everything, then manually check if we have a page for it.
      */}
      <Route path="/:rest*">
        {(params) => {
           const path = `/${params.rest || ''}`;
           
           // If the path exists in our file structure, render it
           if (checkPathExists(path)) {
             return <DynamicRoute path={path} />;
           }
           
           // Otherwise 404
           return <NotFound />;
        }}
      </Route>
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
            {/* Global Navigation */}
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

