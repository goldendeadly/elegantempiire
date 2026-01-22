import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Star, Award, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // High-commission affiliate categories for maximum link density
  const quickLinks = {
    fragrances: [
      { name: "Best Niche Fragrances", href: "/lifestyle/grooming/fragrance" },
      { name: "Amouage Review", href: "/brands/spotlight/amouage" },
      { name: "Creed vs MFK", href: "/comparison/creed-vs-mfk" },
      { name: "Best Oud Fragrances", href: "/best/oud-fragrances" },
    ],
    watches: [
      { name: "Best Dress Watches", href: "/accessories/watches/dress-watches" },
      { name: "Best Dive Watches", href: "/accessories/watches/dive-watches" },
      { name: "Rolex vs Omega", href: "/comparison/rolex-vs-omega" },
      { name: "Watch Buying Guide", href: "/guides/watches" },
    ],
    outerwear: [
      { name: "Best Cashmere Coats", href: "/wardrobe/outerwear/coats" },
      { name: "Best Leather Jackets", href: "/wardrobe/outerwear/leather" },
      { name: "Mackage Review", href: "/brands/spotlight/mackage" },
      { name: "Moncler vs Canada Goose", href: "/comparison/moncler-vs-canada-goose" },
    ],
    footwear: [
      { name: "Best Chelsea Boots", href: "/footwear/boots/chelsea-boots" },
      { name: "Best Dress Shoes", href: "/footwear/shoes/oxfords" },
      { name: "Crockett & Jones Review", href: "/brands/spotlight/crockett-jones" },
      { name: "Berluti vs John Lobb", href: "/comparison/berluti-vs-john-lobb" },
    ],
  };

  const bestOfGuides = [
    { title: "Best Cashmere Sweaters", href: "/wardrobe/knitwear/cashmere", tag: "Editor's Pick" },
    { title: "Best Luxury Watches Under $5K", href: "/accessories/watches", tag: "Value" },
    { title: "Best Niche Fragrances", href: "/lifestyle/grooming/fragrance", tag: "High Commission" },
    { title: "Best Italian Suits", href: "/wardrobe/suiting/suits", tag: "Investment" },
    { title: "Best Leather Bags", href: "/accessories/bags", tag: "Trending" },
    { title: "Best Sunglasses", href: "/accessories/eyewear/sunglasses", tag: "Summer" },
    { title: "Best Chelsea Boots", href: "/footwear/boots/chelsea-boots", tag: "Classic" },
    { title: "Best Wool Overcoats", href: "/wardrobe/outerwear/coats", tag: "Winter" },
  ];

  const brandSpotlights = [
    { name: "The Row", href: "/brands/spotlight/the-row", tier: "Ultra-Luxury" },
    { name: "Brunello Cucinelli", href: "/brands/spotlight/brunello-cucinelli", tier: "Ultra-Luxury" },
    { name: "Loro Piana", href: "/brands/spotlight/lora-piana", tier: "Ultra-Luxury" },
    { name: "Lemaire", href: "/brands/spotlight/lemaire", tier: "Luxury" },
    { name: "Bottega Veneta", href: "/brands/spotlight/bottega-veneta", tier: "Luxury" },
    { name: "Toteme", href: "/brands/spotlight/toteme", tier: "Contemporary" },
  ];

  const travelGuides = [
    { city: "Paris", country: "France", href: "/travel/europe/france/paris" },
    { city: "Milan", country: "Italy", href: "/travel/europe/italy/milan" },
    { city: "Tokyo", country: "Japan", href: "/travel/asia/japan/tokyo" },
    { city: "London", country: "UK", href: "/travel/europe/uk/london" },
    { city: "New York", country: "USA", href: "/travel/americas/usa/new-york" },
    { city: "Florence", country: "Italy", href: "/travel/europe/italy/florence" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-winter-minimalism.jpg" 
            alt="Luxury Menswear" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
            The Authority on Luxury Menswear
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
            Build Your <br/><span className="italic font-light">Empiire</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We decode the world's finest brands, fabrics, and silhouettes to help you invest in a wardrobe of uncompromising quality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none px-8 h-14 text-xs uppercase tracking-widest" asChild>
              <Link href="/wardrobe">Explore Collections</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-none px-8 h-14 text-xs uppercase tracking-widest bg-transparent" asChild>
              <Link href="/brands">View Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Bar - NerdWallet Style */}
      <section className="py-6 border-b border-border bg-[#FAFAF8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link href="/wardrobe/knitwear/cashmere" className="text-muted-foreground hover:text-foreground hover:underline">Best Cashmere</Link>
            <Link href="/accessories/watches" className="text-muted-foreground hover:text-foreground hover:underline">Best Watches</Link>
            <Link href="/lifestyle/grooming/fragrance" className="text-muted-foreground hover:text-foreground hover:underline">Best Fragrances</Link>
            <Link href="/footwear/boots/chelsea-boots" className="text-muted-foreground hover:text-foreground hover:underline">Best Boots</Link>
            <Link href="/wardrobe/outerwear/coats" className="text-muted-foreground hover:text-foreground hover:underline">Best Coats</Link>
            <Link href="/accessories/bags" className="text-muted-foreground hover:text-foreground hover:underline">Best Bags</Link>
            <Link href="/wardrobe/suiting/suits" className="text-muted-foreground hover:text-foreground hover:underline">Best Suits</Link>
            <Link href="/brands/a-z" className="text-muted-foreground hover:text-foreground hover:underline">All Brands A-Z</Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-b border-border bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-serif text-lg">Unbiased Methodology</h3>
              <p className="text-sm text-muted-foreground max-w-xs">Our reviews are independent. We buy our own products and test them rigorously.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Users className="w-8 h-8 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-serif text-lg">Expert Analysis</h3>
              <p className="text-sm text-muted-foreground max-w-xs">Written by industry insiders, tailors, and textile experts.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <TrendingUp className="w-8 h-8 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-serif text-lg">Investment Focus</h3>
              <p className="text-sm text-muted-foreground max-w-xs">We focus on "Cost Per Wear" and longevity, not fast fashion trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Of Guides - High Link Density Section */}
      <section className="py-16 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Curated Guides</span>
              <h2 className="font-serif text-3xl md:text-4xl">Best Of 2026</h2>
            </div>
            <Link href="/best" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-foreground pb-1">
              View All Guides <ArrowRight size={12}/>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bestOfGuides.map((guide, i) => (
              <Link key={i} href={guide.href} className="group">
                <div className="bg-[#FAFAF8] border border-border p-6 h-full hover:border-foreground transition-colors">
                  <span className="inline-block px-2 py-1 bg-foreground/5 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                    {guide.tag}
                  </span>
                  <h3 className="font-serif text-lg group-hover:underline">{guide.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Quick Links - 4 Column NerdWallet Style */}
      <section className="py-16 px-6 bg-[#1A1A1A] text-white">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Fragrances Column */}
            <div>
              <h3 className="font-serif text-xl mb-6 pb-2 border-b border-white/20">Fragrances</h3>
              <ul className="space-y-3">
                {quickLinks.fragrances.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-white/70 hover:text-white hover:underline text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Watches Column */}
            <div>
              <h3 className="font-serif text-xl mb-6 pb-2 border-b border-white/20">Watches</h3>
              <ul className="space-y-3">
                {quickLinks.watches.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-white/70 hover:text-white hover:underline text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Outerwear Column */}
            <div>
              <h3 className="font-serif text-xl mb-6 pb-2 border-b border-white/20">Outerwear</h3>
              <ul className="space-y-3">
                {quickLinks.outerwear.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-white/70 hover:text-white hover:underline text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Footwear Column */}
            <div>
              <h3 className="font-serif text-xl mb-6 pb-2 border-b border-white/20">Footwear</h3>
              <ul className="space-y-3">
                {quickLinks.footwear.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-white/70 hover:text-white hover:underline text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Spotlights */}
      <section className="py-16 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Deep Dives</span>
              <h2 className="font-serif text-3xl md:text-4xl">Brand Spotlights</h2>
            </div>
            <Link href="/brands" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-foreground pb-1">
              All Brands <ArrowRight size={12}/>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {brandSpotlights.map((brand, i) => (
              <Link key={i} href={brand.href} className="group">
                <div className="bg-background p-6 h-[180px] flex flex-col justify-between hover:bg-secondary/30 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{brand.tier}</span>
                  <div>
                    <h3 className="font-serif text-xl group-hover:underline">{brand.name}</h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                      Read Spotlight <ArrowRight size={10}/>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Comparison */}
      <section className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-winter-minimalism.jpg" className="w-full h-full object-cover grayscale" alt="" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4 block">Featured Editorial</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-[0.9]">The Row <span className="font-sans font-thin italic">&</span> Lemaire</h2>
            <p className="font-sans text-xl font-light text-white/80 mb-10 leading-relaxed">
              A study in winter silence. We dissect the two reigning philosophies of quiet luxury to help you find your uniform.
            </p>
            <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black h-14 px-8 text-xs uppercase tracking-widest" asChild>
              <Link href="/brands/spotlight/the-row">Read the Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Guides */}
      <section className="py-16 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">City Guides</span>
              <h2 className="font-serif text-3xl md:text-4xl">Travel in Style</h2>
            </div>
            <Link href="/travel" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-foreground pb-1">
              All Destinations <ArrowRight size={12}/>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {travelGuides.map((guide, i) => (
              <Link key={i} href={guide.href} className="group">
                <div className="bg-[#FAFAF8] border border-border p-4 hover:border-foreground transition-colors text-center">
                  <h3 className="font-serif text-lg group-hover:underline">{guide.city}</h3>
                  <span className="text-xs text-muted-foreground">{guide.country}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Hubs */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-3xl md:text-4xl">Explore by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { title: "Wardrobe", subtitle: "Outerwear, Knitwear, Suiting, Shirts", link: "/wardrobe" },
              { title: "Footwear", subtitle: "Boots, Sneakers, Dress Shoes, Sandals", link: "/footwear" },
              { title: "Accessories", subtitle: "Watches, Bags, Eyewear, Jewelry", link: "/accessories" },
              { title: "Lifestyle", subtitle: "Grooming, Home, Tech, Wellness", link: "/lifestyle" },
            ].map((hub, i) => (
              <Link key={i} href={hub.link} className="block">
                <div className="bg-background p-8 h-[250px] flex flex-col justify-between group cursor-pointer hover:bg-secondary/30 transition-colors">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl mb-2 group-hover:underline">{hub.title}</h3>
                    <p className="font-sans font-light text-sm text-muted-foreground">{hub.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Quick Links - Bottom Section */}
      <section className="py-12 px-6 bg-[#FAFAF8] border-t border-border">
        <div className="container mx-auto">
          <h3 className="font-serif text-xl mb-6 text-center">More Popular Guides</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link href="/accessories/watches/chronographs" className="text-muted-foreground hover:text-foreground hover:underline">Best Chronographs</Link>
            <Link href="/wardrobe/knitwear/cardigans" className="text-muted-foreground hover:text-foreground hover:underline">Best Cardigans</Link>
            <Link href="/accessories/bags/weekenders" className="text-muted-foreground hover:text-foreground hover:underline">Best Weekender Bags</Link>
            <Link href="/footwear/shoes/loafers" className="text-muted-foreground hover:text-foreground hover:underline">Best Loafers</Link>
            <Link href="/wardrobe/outerwear/trench-coats" className="text-muted-foreground hover:text-foreground hover:underline">Best Trench Coats</Link>
            <Link href="/accessories/small-leather-goods/wallets" className="text-muted-foreground hover:text-foreground hover:underline">Best Wallets</Link>
            <Link href="/wardrobe/shirts/dress-shirts" className="text-muted-foreground hover:text-foreground hover:underline">Best Dress Shirts</Link>
            <Link href="/accessories/jewelry/cufflinks" className="text-muted-foreground hover:text-foreground hover:underline">Best Cufflinks</Link>
            <Link href="/footwear/sneakers/minimalist" className="text-muted-foreground hover:text-foreground hover:underline">Best Minimalist Sneakers</Link>
            <Link href="/wardrobe/denim/raw-denim" className="text-muted-foreground hover:text-foreground hover:underline">Best Raw Denim</Link>
            <Link href="/travel/europe/italy" className="text-muted-foreground hover:text-foreground hover:underline">Italy Travel Guide</Link>
            <Link href="/travel/asia/japan" className="text-muted-foreground hover:text-foreground hover:underline">Japan Travel Guide</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
