import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

export default function MegaMenu() {
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
