import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Coats & Outerwear",
      href: "/hub/coats",
      children: [
        { label: "Best Winter Coats", href: "/best/winter-coats" },
        { label: "Trench Coats", href: "/best/trench-coats" },
        { label: "Cashmere & Wool", href: "/best/cashmere-coats" },
        { label: "Comparisons", href: "/comparisons/coats" }
      ]
    },
    {
      label: "Suiting & Tailoring",
      href: "/hub/suiting",
      children: [
        { label: "Best Suits", href: "/best/suits" },
        { label: "Made-to-Measure", href: "/reviews/mtm" },
        { label: "Blazers", href: "/best/blazers" }
      ]
    },
    {
      label: "Knitwear",
      href: "/hub/knitwear",
      children: [
        { label: "Cashmere Guide", href: "/guides/cashmere" },
        { label: "Best Sweaters", href: "/best/sweaters" },
        { label: "Brand Reviews", href: "/reviews/knitwear-brands" }
      ]
    },
    {
      label: "Shoes",
      href: "/hub/shoes",
      children: [
        { label: "Boots", href: "/best/boots" },
        { label: "Loafers", href: "/best/loafers" },
        { label: "Sneakers", href: "/best/sneakers" }
      ]
    },
    {
      label: "Brands",
      href: "/hub/brands",
      children: [
        { label: "Brand Directory", href: "/brands" },
        { label: "Comparisons", href: "/comparisons" },
        { label: "Deep Dives", href: "/reviews/brands" }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-2xl tracking-tighter hover:opacity-80 transition-opacity">
            ELEGANT EMPIIRE
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href}>
                <a className={cn(
                  "flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors py-8",
                  location.startsWith(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}>
                  {item.label}
                  <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </a>
              </Link>
              
              {/* Dropdown */}
              <div className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 w-64 bg-background border border-border shadow-lg p-4 opacity-0 invisible translate-y-2 transition-all duration-200",
                activeDropdown === item.label && "opacity-100 visible translate-y-0"
              )}>
                <div className="flex flex-col gap-2">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href}>
                      <a className="text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 px-3 py-2 transition-colors block">
                        {child.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Utilities / Search */}
        <div className="flex items-center gap-4">
          <Link href="/tools/wardrobe-builder">
            <a className="hidden md:block text-xs font-mono uppercase tracking-widest border border-border px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Wardrobe OS
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
