import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Link, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComparisonPage from "./pages/ComparisonPage";
import HubPage from "./pages/HubPage";
import ArticlePage from "./pages/ArticlePage";
import React, { Suspense, useState } from 'react';

// --- EMBEDDED MEGAMENU COMPONENT ---
// This is embedded directly to avoid "split brain" import issues between /src and /client/src

type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

const menuStructure: MenuItem[] = [
  {
    label: 'Wardrobe',
    href: '/wardrobe',
    children: [
      {
        label: 'Outerwear',
        href: '/wardrobe/outerwear',
        children: [
          { label: 'Coats', href: '/wardrobe/outerwear/coats' },
          { label: 'Jackets', href: '/wardrobe/outerwear/jackets' },
          { label: 'Trench Coats', href: '/wardrobe/outerwear/trench-coats' },
          { label: 'Leather', href: '/wardrobe/outerwear/leather' },
        ]
      },
      {
        label: 'Knitwear',
        href: '/wardrobe/knitwear',
        children: [
          { label: 'Cashmere', href: '/wardrobe/knitwear/cashmere' },
          { label: 'Merino', href: '/wardrobe/knitwear/merino' },
          { label: 'Cardigans', href: '/wardrobe/knitwear/cardigans' },
        ]
      },
      {
        label: 'Suiting',
        href: '/wardrobe/suiting',
        children: [
          { label: 'Suits', href: '/wardrobe/suiting/suits' },
          { label: 'Blazers', href: '/wardrobe/suiting/blazers' },
          { label: 'Trousers', href: '/wardrobe/suiting/trousers' },
        ]
      },
    ]
  },
  {
    label: 'Footwear',
    href: '/footwear',
    children: [
      {
        label: 'Boots',
        href: '/footwear/boots',
        children: [
          { label: 'Chelsea Boots', href: '/footwear/boots/chelsea-boots' },
          { label: 'Combat Boots', href: '/footwear/boots/combat-boots' },
        ]
      },
      {
        label: 'Sneakers',
        href: '/footwear/sneakers',
        children: [
          { label: 'Minimalist', href: '/footwear/sneakers/minimalist' },
          { label: 'Retro Runners', href: '/footwear/sneakers/retro-runners' },
        ]
      },
      {
        label: 'Shoes',
        href: '/footwear/shoes',
        children: [
          { label: 'Loafers', href: '/footwear/shoes/loafers' },
          { label: 'Derbies', href: '/footwear/shoes/derbies' },
        ]
      },
    ]
  },
  {
    label: 'Travel',
    href: '/travel',
    children: [
      {
        label: 'Europe',
        href: '/travel/europe',
        children: [
          { label: 'Italy', href: '/travel/europe/italy' },
          { label: 'France', href: '/travel/europe/france' },
          { label: 'UK', href: '/travel/europe/uk' },
        ]
      },
      {
        label: 'Asia',
        href: '/travel/asia',
        children: [
          { label: 'Japan', href: '/travel/asia/japan' },
          { label: 'South Korea', href: '/travel/asia/south-korea' },
        ]
      },
      {
        label: 'Americas',
        href: '/travel/americas',
        children: [
          { label: 'USA', href: '/travel/americas/usa' },
          { label: 'Canada', href: '/travel/americas/canada' },
        ]
      },
    ]
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
    children: [
      {
        label: 'Home',
        href: '/lifestyle/home',
        children: [
          { label: 'Furniture', href: '/lifestyle/home/furniture' },
          { label: 'Lighting', href: '/lifestyle/home/lighting' },
        ]
      },
      {
        label: 'Grooming',
        href: '/lifestyle/grooming',
        children: [
          { label: 'Skincare', href: '/lifestyle/grooming/skincare' },
          { label: 'Fragrance', href: '/lifestyle/grooming/fragrance' },
        ]
      },
    ]
  },
  {
    label: 'Brands',
    href: '/brands',
    children: [
      {
        label: 'Spotlight',
        href: '/brands/spotlight',
        children: [
          { label: 'The Row', href: '/brands/spotlight/the-row' },
          { label: 'Lemaire', href: '/brands/spotlight/lemaire' },
        ]
      },
      {
        label: 'A-Z',
        href: '/brands/a-z',
        children: [
          { label: 'A', href: '/brands/a-z/a' },
          { label: 'B', href: '/brands/a-z/b' },
        ]
      },
    ]
  }
];

function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center space-x-8 h-full" onMouseLeave={() => setActiveMenu(null)}>
      {menuStructure.map((item) => (
        <div 
          key={item.label} 
          className="relative h-full flex items-center"
          onMouseEnter={() => setActiveMenu(item.label)}
        >
          <Link 
            href={item.href}
            className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
              activeMenu === item.label ? 'text-[#1A1A1A]' : 'text-[#666] hover:text-[#1A1A1A]'
            }`}
          >
            {item.label}
          </Link>

          {/* Mega Menu Dropdown */}
          {activeMenu === item.label && item.children && (
            <div className="absolute top-full left-0 w-[600px] bg-[#F5F5F0] border border-[#E5E5E0] shadow-sm p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {item.children.map((subItem) => (
                <div key={subItem.label} className="space-y-4">
                  <Link 
                    href={subItem.href}
                    className="block text-sm font-medium text-[#1A1A1A] hover:opacity-70 uppercase tracking-wide border-b border-[#E5E5E0] pb-2 mb-2"
                  >
                    {subItem.label}
                  </Link>
                  {subItem.children && (
                    <ul className="space-y-2">
                      {subItem.children.map((child) => (
                        <li key={child.label}>
                          <Link 
                            href={child.href}
                            className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors block py-1"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

// --- END EMBEDDED MEGAMENU ---

// 1. Find all the pages in the folder
const pages = import.meta.glob('./pages/**/*.tsx');

// 2. Build a list of valid routes based on the actual files
const generatedRoutes = Object.keys(pages).map((filePath) => {
  // Convert "./pages/wardrobe/outerwear/index.tsx" -> "/wardrobe/outerwear"
  // Convert "./pages/about/methodology.tsx" -> "/about/methodology"
  let routePath = filePath
    .replace('./pages', '')
    .replace('/index.tsx', '')
    .replace('.tsx', '');
    
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
      <Route path="/articles/:slug" component={ArticlePage} />

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
