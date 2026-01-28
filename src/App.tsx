import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Link, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

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
        label: 'Suiting & Tailoring',
        href: '/wardrobe/suiting',
        children: [
          { label: 'Suits', href: '/wardrobe/suiting/suits' },
          { label: 'Blazers', href: '/wardrobe/suiting/blazers' },
          { label: 'Trousers', href: '/wardrobe/suiting/trousers' },
        ]
      },
      {
        label: 'Shirts',
        href: '/wardrobe/shirts',
        children: [
          { label: 'Dress Shirts', href: '/wardrobe/shirts/dress-shirts' },
          { label: 'Casual Shirts', href: '/wardrobe/shirts/casual-shirts' },
          { label: 'Polos', href: '/wardrobe/shirts/polos' },
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
        label: 'Denim',
        href: '/wardrobe/denim',
        children: [
          { label: 'Raw Denim', href: '/wardrobe/denim/raw-denim' },
          { label: 'Selvedge', href: '/wardrobe/denim/selvedge' },
          { label: 'Slim', href: '/wardrobe/denim/slim' },
          { label: 'Straight', href: '/wardrobe/denim/straight' },
        ]
      },
      {
        label: 'T-Shirts & Basics',
        href: '/wardrobe/basics',
        children: [
          { label: 'Premium Tees', href: '/wardrobe/basics/premium-tees' },
          { label: 'Henleys', href: '/wardrobe/basics/henleys' },
          { label: 'Underwear', href: '/wardrobe/basics/underwear' },
        ]
      },
      {
        label: 'Loungewear',
        href: '/wardrobe/loungewear',
        children: [
          { label: 'Robes', href: '/wardrobe/loungewear/robes' },
          { label: 'Pajamas', href: '/wardrobe/loungewear/pajamas' },
          { label: 'Luxury Sweats', href: '/wardrobe/loungewear/luxury-sweats' },
        ]
      },
      {
        label: 'Activewear',
        href: '/wardrobe/activewear',
        children: [
          { label: 'Performance', href: '/wardrobe/activewear/performance' },
          { label: 'Technical Gear', href: '/wardrobe/activewear/technical-gear' },
        ]
      },
      {
        label: 'Neckwear & Formal',
        href: '/wardrobe/neckwear',
        children: [
          { label: 'Ties', href: '/wardrobe/neckwear/ties' },
          { label: 'Bow Ties', href: '/wardrobe/neckwear/bow-ties' },
          { label: 'Pocket Squares', href: '/wardrobe/neckwear/pocket-squares' },
          { label: 'Formal Accessories', href: '/wardrobe/neckwear/formal-accessories' },
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
          { label: 'Chelsea', href: '/footwear/boots/chelsea' },
          { label: 'Combat', href: '/footwear/boots/combat' },
          { label: 'Chukka', href: '/footwear/boots/chukka' },
        ]
      },
      {
        label: 'Sneakers',
        href: '/footwear/sneakers',
        children: [
          { label: 'Minimalist', href: '/footwear/sneakers/minimalist' },
          { label: 'Retro', href: '/footwear/sneakers/retro' },
          { label: 'Luxury Runners', href: '/footwear/sneakers/luxury-runners' },
        ]
      },
      {
        label: 'Shoes',
        href: '/footwear/shoes',
        children: [
          { label: 'Loafers', href: '/footwear/shoes/loafers' },
          { label: 'Derbies', href: '/footwear/shoes/derbies' },
          { label: 'Oxfords', href: '/footwear/shoes/oxfords' },
        ]
      },
      {
        label: 'Shoe Care & Accessories',
        href: '/footwear/care',
        children: [
          { label: 'Polishes', href: '/footwear/care/polishes' },
          { label: 'Trees', href: '/footwear/care/trees' },
          { label: 'Horns', href: '/footwear/care/horns' },
          { label: 'Laces', href: '/footwear/care/laces' },
        ]
      },
      {
        label: 'Warm-Weather & Casual',
        href: '/footwear/warm-weather',
        children: [
          { label: 'Slip-Ons', href: '/footwear/warm-weather/slip-ons' },
          { label: 'Sandals', href: '/footwear/warm-weather/sandals' },
          { label: 'Espadrilles', href: '/footwear/warm-weather/espadrilles' },
        ]
      },
      {
        label: 'At-Home & Leisure',
        href: '/footwear/at-home',
        children: [
          { label: 'Slippers', href: '/footwear/at-home/slippers' },
          { label: 'Driving Shoes', href: '/footwear/at-home/driving-shoes' },
        ]
      },
    ]
  },
  {
    label: 'Fragrance',
    href: '/fragrance',
    children: [
      {
        label: 'Niche Fragrance',
        href: '/fragrance/niche',
        children: [
          { label: 'Amouage', href: '/fragrance/niche/amouage' },
          { label: 'Roja', href: '/fragrance/niche/roja' },
          { label: 'MFK', href: '/fragrance/niche/mfk' },
        ]
      },
      {
        label: 'Designer Fragrance (Selective)',
        href: '/fragrance/designer',
        children: [
          { label: 'Creed', href: '/fragrance/designer/creed' },
          { label: 'Tom Ford', href: '/fragrance/designer/tom-ford' },
          { label: 'Dior', href: '/fragrance/designer/dior' },
        ]
      },
      {
        label: 'Fragrance Notes & Education',
        href: '/fragrance/education',
        children: [
          { label: 'Fragrance Families', href: '/fragrance/education/families' },
          { label: 'Note Breakdowns', href: '/fragrance/education/notes' },
          { label: 'Seasonality', href: '/fragrance/education/seasonality' },
        ]
      },
      {
        label: 'Brand Spotlights',
        href: '/fragrance/brands',
        children: [
          { label: 'Creed', href: '/fragrance/brands/creed' },
          { label: 'MFK', href: '/fragrance/brands/mfk' },
          { label: 'Amouage', href: '/fragrance/brands/amouage' },
          { label: 'Roja', href: '/fragrance/brands/roja' },
        ]
      },
      {
        label: 'Comparisons',
        href: '/fragrance/comparisons',
        children: [
          { label: 'Brand vs Brand', href: '/fragrance/comparisons/brand-vs-brand' },
          { label: 'Scent vs Scent', href: '/fragrance/comparisons/scent-vs-scent' },
        ]
      },
      {
        label: 'Buying Guides',
        href: '/fragrance/guides',
        children: [
          { label: 'Investment Fragrances', href: '/fragrance/guides/investment' },
          { label: 'Signature Scents', href: '/fragrance/guides/signature' },
        ]
      },
      {
        label: 'Longevity & Sillage Analysis',
        href: '/fragrance/analysis',
        children: [
          { label: 'Performance Testing', href: '/fragrance/analysis/performance' },
          { label: 'Projection Guide', href: '/fragrance/analysis/projection' },
        ]
      },
    ]
  },
  {
    label: 'Watches',
    href: '/watches',
    children: [
      {
        label: 'By Style',
        href: '/watches/style',
        children: [
          { label: 'Dress Watches', href: '/watches/style/dress' },
          { label: 'Dive Watches', href: '/watches/style/dive' },
          { label: 'Chronographs', href: '/watches/style/chronographs' },
          { label: 'Sports Watches', href: '/watches/style/sports' },
          { label: 'Complications', href: '/watches/style/complications' },
        ]
      },
      {
        label: 'By Intent',
        href: '/watches/intent',
        children: [
          { label: 'Investment Watches', href: '/watches/intent/investment' },
          { label: 'Vintage & Neo-Vintage', href: '/watches/intent/vintage' },
          { label: 'Daily Wear vs Occasion', href: '/watches/intent/daily-vs-occasion' },
          { label: 'Buying Guides', href: '/watches/intent/buying-guides' },
        ]
      },
      {
        label: 'Iconic Brands',
        href: '/watches/brands',
        children: [
          { label: 'Rolex', href: '/watches/brands/rolex' },
          { label: 'Cartier', href: '/watches/brands/cartier' },
          { label: 'Audemars Piguet', href: '/watches/brands/audemars-piguet' },
          { label: 'Patek Philippe', href: '/watches/brands/patek-philippe' },
          { label: 'Richard Mille', href: '/watches/brands/richard-mille' },
        ]
      },
    ]
  },
  {
    label: 'Accessories',
    href: '/accessories',
    children: [
      {
        label: 'Eyewear',
        href: '/accessories/eyewear',
        children: [
          { label: 'Sunglasses', href: '/accessories/eyewear/sunglasses' },
          { label: 'Optical', href: '/accessories/eyewear/optical' },
          { label: 'Prescription Glasses', href: '/accessories/eyewear/prescription-glasses' },
        ]
      },
      {
        label: 'Jewelry',
        href: '/accessories/jewelry',
        children: [
          { label: 'Rings', href: '/accessories/jewelry/rings' },
          { label: 'Bracelets', href: '/accessories/jewelry/bracelets' },
          { label: 'Necklaces', href: '/accessories/jewelry/necklaces' },
          { label: 'Cufflinks', href: '/accessories/jewelry/cufflinks' },
        ]
      },
      {
        label: 'Travel & Carry',
        href: '/accessories/travel & carry',
        children: [
          { label: 'Suitcases', href: '/accessories/Travel & Carry/suitcases' },
          { label: 'Weekenders', href: '/accessories/Travel & Carry/weekenders' },
          { label: 'Duffel Bags', href: '/accessories/Travel & Carry/duffel Bags' },
          { label: 'Briefcases', href: '/accessories/Travel & Carry/driefcases' },
          { label: 'Travel Sets', href: '/accessories/Travel & Carry/travel Sets' },
          { label: 'Totes', href: '/accessories/Travel & Carry/totes' },
        ]
      },
      {
        label: 'Small Leather Goods',
        href: '/accessories/leather-goods',
        children: [
          { label: 'Wallets', href: '/accessories/leather-goods/wallets' },
          { label: 'Card Holders', href: '/accessories/leather-goods/card-holders' },
          { label: 'Folios', href: '/accessories/leather-goods/folios' },
        ]
      },
      {
        label: 'Hats',
        href: '/accessories/hats',
        children: [
          { label: 'Dress Hats', href: '/accessories/hats/dress hats' },
          { label: 'Beanies', href: '/accessories/hats/beanies' },
          { label: 'Caps', href: '/accessories/hats/caps' },
        ]
      },
      {
        label: 'Scarves & Gloves',
        href: '/accessories/scarves-gloves',
        children: [
          { label: 'Cashmere Scarves', href: '/accessories/scarves-gloves/cashmere-scarves' },
          { label: 'Wool & Winter Scarves', href: '/accessories/scarves-gloves/wool & winter scarves' },
          { label: 'Leather Gloves', href: '/accessories/scarves-gloves/leather-gloves' },
          { label: 'Lined & Cashmere Gloves', href: '/accessories/scarves-gloves/lined & cashmere gloves' },
        ]
      },
    ]
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
    children: [
      {
        label: 'Personal Care & Ritual',
        href: '/lifestyle/personal-care',
        children: [
          { label: 'Shaving', href: '/lifestyle/personal-care/shaving' },
          { label: 'Skincare', href: '/lifestyle/personal-care/skincare' },
          { label: 'Haircare', href: '/lifestyle/personal-care/haircare' },
          { label: 'Body', href: '/lifestyle/personal-care/body' },
          { label: 'Tools & Devices', href: '/lifestyle/personal-care/tools-devices' },
        ]
      },
      {
        label: 'Home',
        href: '/lifestyle/home',
        children: [
          { label: 'Furniture', href: '/lifestyle/home/furniture' },
          { label: 'Lighting', href: '/lifestyle/home/lighting' },
          { label: 'Decor', href: '/lifestyle/home/decor' },
          { label: 'Textiles', href: '/lifestyle/home/textiles' },
        ]
      },
      {
        label: 'Bar & Spirits',
        href: '/lifestyle/bar-spirits',
        children: [
          { label: 'Rare Spirits', href: '/lifestyle/bar-spirits/rare-spirits' },
          { label: 'Glassware', href: '/lifestyle/bar-spirits/glassware' },
          { label: 'Bar Tools', href: '/lifestyle/bar-spirits/bar-tools' },
        ]
      },
      {
        label: 'Cigars & Tobacco',
        href: '/lifestyle/cigars',
        children: [
           { label: 'Cigars', href: '/lifestyle/cigars/cigars' },
          { label: 'Humidors', href: '/lifestyle/cigars/humidors' },
          { label: 'Cigar & Tobacco Accessories', href: '/lifestyle/cigars/cigar & tobacco accessories' },
          { label: 'Guides', href: '/lifestyle/cigars/guides' },
        ]
      },
      {
        label: 'Tech',
        href: '/lifestyle/tech',
        children: [
          { label: 'Audio', href: '/lifestyle/tech/audio' },
           { label: 'Wellness Tech', href: '/lifestyle/tech/wellness tech' },
          { label: 'Minimalist Gadgets', href: '/lifestyle/tech/minimalist-gadgets' },
        ]
      },
      {
        label: 'Office & Study',
        href: '/lifestyle/office',
        children: [
          { label: 'Pens', href: '/lifestyle/office/pens' },
          { label: 'Stationery', href: '/lifestyle/office/stationery' },
          { label: 'Desk Accessories', href: '/lifestyle/office/desk-accessories' },
        ]
      },
      {
        label: 'Books & Culture',
        href: '/lifestyle/books',
        children: [
          { label: 'Business', href: '/lifestyle/books/business' },
          { label: 'Mindset', href: '/lifestyle/books/mindset' },
           { label: 'Philosophy & Thought', href: '/lifestyle/books/philosophy & thought' },
        ]
      },
    ]
  },
  {
    label: 'Travel',
    href: '/travel',
    children: [
      {
        label: 'Luggage & Packing',
        href: '/travel/luggage',
        children: [
          { label: 'Carry-ons', href: '/travel/luggage/carry-ons' },
          { label: 'Checked', href: '/travel/luggage/checked' },
          { label: 'Organizers', href: '/travel/luggage/organizers' },
        ]
      },
      {
        label: 'Hotels & Resorts',
        href: '/travel/hotels',
        children: [
          { label: 'Boutique', href: '/travel/hotels/boutique' },
          { label: 'Luxury', href: '/travel/hotels/luxury' },
          { label: 'Reviews', href: '/travel/hotels/reviews' },
        ]
      },
      {
        label: 'Airlines & Lounges',
        href: '/travel/airlines',
        children: [
          { label: 'First Class', href: '/travel/airlines/first-class' },
          { label: 'Private Jets', href: '/travel/airlines/private-jets' },
          { label: 'Lounge Guides', href: '/travel/airlines/lounge-guides' },
        ]
      },
      {
        label: 'Private Travel',
        href: '/travel/private',
        children: [
          { label: 'Charters', href: '/travel/private/charters' },
          { label: 'Concierge Services', href: '/travel/private/concierge-services' },
        ]
      },
      {
        label: 'Travel Finance',
        href: '/travel/finance',
        children: [
          { label: 'Insurance', href: '/travel/finance/insurance' },
          { label: 'Premium Cards', href: '/travel/finance/premium-cards' },
        ]
      },
    ]
  },
  {
    label: 'Brands',
    href: '/brands',
    children: [
      {
        label: 'Brand Spotlights A–Z',
        href: '/brands/a-z',
        children: [
          { label: 'Full Directory', href: '/brands/a-z' },
        ]
      },
      {
        label: 'Heritage Houses',
        href: '/brands/heritage',
        children: [
          { label: 'Loro Piana', href: '/brands/heritage/loro-piana' },
          { label: 'Zegna', href: '/brands/heritage/zegna' },
          { label: 'Hermès', href: '/brands/heritage/hermes' },
        ]
      },
      {
        label: 'Modern Luxury',
        href: '/brands/modern',
        children: [
          { label: 'The Row', href: '/brands/modern/the-row' },
          { label: 'Lemaire', href: '/brands/modern/lemaire' },
          { label: 'Fear of God', href: '/brands/modern/fear-of-god' },
        ]
      },
    ]
  },
  {
    label: 'Guides & Analysis',
    href: '/guides',
    children: [
      {
        label: 'Best Of Guides',
        href: '/guides/best-of',
        children: [
          { label: 'Best in Class', href: '/guides/best in class' },
          { label: 'Curated Lists', href: '/guides/curated lists' },
           { label: 'Editor’s Picks', href: '/guides/editor’s picks' },
        ]
      },
      {
        label: 'Brand vs Brand',
        href: '/guides/analysis',
        children: [
          { label: 'Head-to-Head Analysis', href: '/guides/analysis' },
          { label: 'Heritage vs Modern', href: '/guides/heritage vs modern' },
          { label: 'Entry vs Flagship', href: '/guides/entry vs flagship' },
        ]
      },
      {
        label: 'Buying Guides',
        href: '/guides/buying',
        children: [
          { label: 'Investment Frameworks', href: '/guides/buying' },
        ]
      },
      {
        label: 'Investment Guides',
        href: '/guides/investment',
        children: [
          { label: 'Investment-Grade Cashmere', href: ''/articles/2026-guide-to-investment-grade-cashmere' },
          { label: 'Investment-Grade Leather', href: '/guides/investment-grade-leather' },
          { label: 'Investment-Grade Watches', href: '/guides/investment-grade-watches' },
        ]
      },
    ]
  }
];

function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center space-x-4 h-full" onMouseLeave={() => setActiveMenu(null)}>
      {menuStructure.map((item, index) => {
        // Determine if this is one of the last two items that need left-aligned dropdown
        const isLastTwo = index >= menuStructure.length - 2;
        
        return (
          <div 
            key={item.label} 
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveMenu(item.label)}
          >
            <Link 
              href={item.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                activeMenu === item.label ? 'text-[#1A1A1A]' : 'text-[#666] hover:text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </Link>

            {/* Mega Menu Dropdown */}
            {activeMenu === item.label && item.children && (
              <div className={`absolute top-full ${isLastTwo ? 'right-0' : 'left-0'} w-[600px] bg-[#F5F5F0] border border-[#E5E5E0] shadow-sm p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
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
        );
      })}
    </nav>
  );
}

// --- END EMBEDDED MEGAMENU ---

// 1. Find all the pages in the folder
const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });

// 2. Build a list of routes
const routes: { path: string; component: React.ComponentType }[] = [];
for (const path in pages) {
  const module = pages[path] as { default: React.ComponentType };
  let routePath = path
    .replace(/\.\/pages/, "")
    .replace(/\.tsx$/, "")
    .replace(/\/index$/, "");

  if (routePath === "") routePath = "/";

  routes.push({ path: routePath, component: module.default });
}

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} component={Component} />
        ))}
        <Route path="/articles/:slug" component={ArticlePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-[#F5F5F0]">
            <nav className="sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#E5E5E0]">
              <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity mr-12 whitespace-nowrap">
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
