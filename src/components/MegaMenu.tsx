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
    ]
  },
  {
    label: 'Accessories',
    href: '/accessories',
    children: [
      {
        label: 'Watches',
        href: '/accessories/watches',
        children: [
          { label: 'Dress', href: '/accessories/watches/dress' },
          { label: 'Dive', href: '/accessories/watches/dive' },
          { label: 'Chronographs', href: '/accessories/watches/chronographs' },
          { label: 'Vintage', href: '/accessories/watches/vintage' },
          { label: 'Investment', href: '/accessories/watches/investment' },
        ]
      },
      {
        label: 'Eyewear',
        href: '/accessories/eyewear',
        children: [
          { label: 'Sunglasses', href: '/accessories/eyewear/sunglasses' },
          { label: 'Optical', href: '/accessories/eyewear/optical' },
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
        label: 'Bags',
        href: '/accessories/bags',
        children: [
          { label: 'Weekenders', href: '/accessories/bags/weekenders' },
          { label: 'Briefcases', href: '/accessories/bags/briefcases' },
          { label: 'Totes', href: '/accessories/bags/totes' },
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
          { label: 'Fedoras', href: '/accessories/hats/fedoras' },
          { label: 'Beanies', href: '/accessories/hats/beanies' },
          { label: 'Caps', href: '/accessories/hats/caps' },
        ]
      },
      {
        label: 'Scarves & Gloves',
        href: '/accessories/scarves-gloves',
        children: [
          { label: 'Cashmere Scarves', href: '/accessories/scarves-gloves/cashmere-scarves' },
          { label: 'Leather Gloves', href: '/accessories/scarves-gloves/leather-gloves' },
        ]
      },
    ]
  },
  {
    label: 'Grooming & Fragrance',
    href: '/grooming',
    children: [
      {
        label: 'Fragrance',
        href: '/grooming/fragrance',
        children: [
          { label: 'Niche', href: '/grooming/fragrance/niche' },
          { label: 'Designer', href: '/grooming/fragrance/designer' },
          { label: 'Oud', href: '/grooming/fragrance/oud' },
          { label: 'Fresh', href: '/grooming/fragrance/fresh' },
        ]
      },
      {
        label: 'Shaving',
        href: '/grooming/shaving',
        children: [
          { label: 'Razors', href: '/grooming/shaving/razors' },
          { label: 'Creams', href: '/grooming/shaving/creams' },
          { label: 'Aftershave', href: '/grooming/shaving/aftershave' },
        ]
      },
      {
        label: 'Skincare',
        href: '/grooming/skincare',
        children: [
          { label: 'Cleansers', href: '/grooming/skincare/cleansers' },
          { label: 'Moisturizers', href: '/grooming/skincare/moisturizers' },
          { label: 'Serums', href: '/grooming/skincare/serums' },
        ]
      },
      {
        label: 'Haircare',
        href: '/grooming/haircare',
        children: [
          { label: 'Styling', href: '/grooming/haircare/styling' },
          { label: 'Shampoo', href: '/grooming/haircare/shampoo' },
          { label: 'Conditioners', href: '/grooming/haircare/conditioners' },
        ]
      },
      {
        label: 'Body',
        href: '/grooming/body',
        children: [
          { label: 'Soaps', href: '/grooming/body/soaps' },
          { label: 'Lotions', href: '/grooming/body/lotions' },
          { label: 'Deodorant', href: '/grooming/body/deodorant' },
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
          { label: 'Decor', href: '/lifestyle/home/decor' },
        ]
      },
      {
        label: 'Bar & Spirits',
        href: '/lifestyle/bar-spirits',
        children: [
          { label: 'Glassware', href: '/lifestyle/bar-spirits/glassware' },
          { label: 'Rare Spirits', href: '/lifestyle/bar-spirits/rare-spirits' },
          { label: 'Bar Tools', href: '/lifestyle/bar-spirits/bar-tools' },
        ]
      },
      {
        label: 'Cigars & Tobacco',
        href: '/lifestyle/cigars',
        children: [
          { label: 'Humidors', href: '/lifestyle/cigars/humidors' },
          { label: 'Accessories', href: '/lifestyle/cigars/accessories' },
          { label: 'Guides', href: '/lifestyle/cigars/guides' },
        ]
      },
      {
        label: 'Tech',
        href: '/lifestyle/tech',
        children: [
          { label: 'Audio', href: '/lifestyle/tech/audio' },
          { label: 'Minimalist Gadgets', href: '/lifestyle/tech/minimalist-gadgets' },
        ]
      },
      {
        label: 'Office & Study',
        href: '/lifestyle/office',
        children: [
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
    label: 'Guides & Comparisons',
    href: '/guides',
    children: [
      {
        label: 'Best Of Guides',
        href: '/guides/best-of',
        children: [
          { label: 'Curated Lists', href: '/guides/best-of' },
        ]
      },
      {
        label: 'Brand vs Brand',
        href: '/guides/comparisons',
        children: [
          { label: 'Head-to-Head Analysis', href: '/guides/comparisons' },
        ]
      },
      {
        label: 'Buying Guides',
        href: '/guides/buying',
        children: [
          { label: 'Investment Frameworks', href: '/guides/buying' },
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
