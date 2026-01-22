import { Link } from "wouter";

export default function Footer() {
  const footerLinks = {
    fragrances: {
      title: "Fragrances",
      links: [
        { label: "Best Niche Fragrances", href: "/lifestyle/grooming/fragrance" },
        { label: "Best Oud Fragrances", href: "/best/oud-fragrances" },
        { label: "Amouage Review", href: "/brands/spotlight/amouage" },
        { label: "Creed vs MFK", href: "/comparison/creed-vs-mfk" },
        { label: "Parfums de Marly Guide", href: "/brands/spotlight/parfums-de-marly" },
        { label: "Xerjoff Collection", href: "/brands/spotlight/xerjoff" },
        { label: "Best Fresh Colognes", href: "/best/fresh-colognes" },
      ]
    },
    eyewear: {
      title: "Eyewear & Jewelry",
      links: [
        { label: "Best Luxury Sunglasses", href: "/accessories/eyewear" },
        { label: "Barton Perreira Review", href: "/brands/spotlight/barton-perreira" },
        { label: "Oliver Peoples Guide", href: "/brands/spotlight/oliver-peoples" },
        { label: "Best Luxury Cufflinks", href: "/accessories/jewelry/cufflinks" },
        { label: "Best Men's Jewelry", href: "/accessories/jewelry" },
        { label: "Tateossian Review", href: "/brands/spotlight/tateossian" },
        { label: "William Henry Collection", href: "/brands/spotlight/william-henry" },
      ]
    },
    outerwear: {
      title: "Outerwear",
      links: [
        { label: "Best Cashmere Coats", href: "/wardrobe/outerwear/coats" },
        { label: "Best Leather Jackets", href: "/wardrobe/outerwear/leather" },
        { label: "Mackage Review", href: "/brands/spotlight/mackage" },
        { label: "Moncler Guide", href: "/brands/spotlight/moncler" },
        { label: "Best Shearling Coats", href: "/wardrobe/outerwear/shearling" },
        { label: "Best Trench Coats", href: "/wardrobe/outerwear/trench-coats" },
        { label: "Nobis vs Canada Goose", href: "/comparison/nobis-vs-canada-goose" },
      ]
    },
    footwear: {
      title: "Footwear",
      links: [
        { label: "Best Dress Shoes", href: "/footwear/shoes" },
        { label: "Crockett & Jones Review", href: "/brands/spotlight/crockett-jones" },
        { label: "Berluti Guide", href: "/brands/spotlight/berluti" },
        { label: "Best Chelsea Boots", href: "/footwear/boots/chelsea-boots" },
        { label: "Santoni Collection", href: "/brands/spotlight/santoni" },
        { label: "Best Italian Loafers", href: "/footwear/shoes/loafers" },
        { label: "Best Luxury Sneakers", href: "/footwear/sneakers" },
      ]
    },
    travel: {
      title: "Travel & Luggage",
      links: [
        { label: "Best Luxury Luggage", href: "/travel" },
        { label: "Rimowa Review", href: "/brands/spotlight/rimowa" },
        { label: "Tumi Guide", href: "/brands/spotlight/tumi" },
        { label: "Best Hotels: Paris", href: "/travel/europe/france/paris" },
        { label: "Best Hotels: Milan", href: "/travel/europe/italy/milan" },
        { label: "Best Hotels: Tokyo", href: "/travel/asia/japan/tokyo" },
        { label: "Best Hotels: London", href: "/travel/europe/uk/london" },
      ]
    },
    brands: {
      title: "Top Brands",
      links: [
        { label: "The Row", href: "/brands/spotlight/the-row" },
        { label: "Loro Piana", href: "/brands/spotlight/loro-piana" },
        { label: "Brunello Cucinelli", href: "/brands/spotlight/brunello-cucinelli" },
        { label: "Lemaire", href: "/brands/spotlight/lemaire" },
        { label: "Bottega Veneta", href: "/brands/spotlight/bottega-veneta" },
        { label: "Zegna", href: "/brands/spotlight/zegna" },
        { label: "All Brands A-Z", href: "/brands/a-z" },
      ]
    }
  };

  return (
    <footer className="relative bg-[#1A1A1A] text-white overflow-hidden">
      {/* Giant EMPIIRE Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="font-serif text-[20vw] font-light tracking-tight text-white whitespace-nowrap"
          style={{ opacity: 0.03 }}
        >
          EMPIIRE
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-12">
        {/* 6-Column Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="font-serif text-sm uppercase tracking-widest text-white/60 mb-6 border-b border-white/10 pb-3">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 block leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">About</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/about/methodology" className="hover:text-white transition-colors">Editorial Standards</Link></li>
              <li><Link href="/about/team" className="hover:text-white transition-colors">Our Experts</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">How We Make Money</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/tools/wardrobe-builder" className="hover:text-white transition-colors">Wardrobe OS</Link></li>
              <li><Link href="/tools/cost-per-wear" className="hover:text-white transition-colors">Cost Per Wear Calculator</Link></li>
              <li><Link href="/guides/fabric-encyclopedia" className="hover:text-white transition-colors">Fabric Encyclopedia</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="https://instagram.com/elegantempiire" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com/@elegantempiire" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://pinterest.com/elegantempiire" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="https://twitter.com/elegantempiire" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <span className="font-serif text-xl tracking-tight">ELEGANT EMPIIRE</span>
              <span className="text-xs text-white/30 font-mono uppercase tracking-widest">
                © 2026 All rights reserved
              </span>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
            </div>
          </div>
          
          {/* Advertiser Disclosure */}
          <div className="mt-8 p-4 bg-white/5 rounded text-xs text-white/40 leading-relaxed">
            <strong className="text-white/50">Advertiser Disclosure:</strong> Elegant Empiire is an independent, advertising-supported publisher and comparison service. We may receive compensation when you click on links to products. This compensation may impact how and where products appear. We strive to provide accurate information, but make no warranties regarding completeness or accuracy.
          </div>
        </div>
      </div>
    </footer>
  );
}
