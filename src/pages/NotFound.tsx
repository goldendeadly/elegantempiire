import { Link } from "wouter";
import { ArrowRight, Search } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFound() {
  const popularPages = [
    { title: "Cashmere Guide", href: "/wardrobe/knitwear/cashmere", category: "Knitwear" },
    { title: "Best Coats", href: "/wardrobe/outerwear/coats", category: "Outerwear" },
    { title: "Luxury Watches", href: "/accessories/watches", category: "Accessories" },
    { title: "The Row", href: "/brands/spotlight/the-row", category: "Brands" },
    { title: "Brunello Cucinelli", href: "/brands/spotlight/brunello-cucinelli", category: "Brands" },
    { title: "Chelsea Boots", href: "/footwear/boots/chelsea-boots", category: "Footwear" },
  ];

  const categories = [
    { title: "Wardrobe", href: "/wardrobe", description: "Outerwear, Knitwear, Suiting" },
    { title: "Footwear", href: "/footwear", description: "Boots, Sneakers, Dress Shoes" },
    { title: "Accessories", href: "/accessories", description: "Watches, Bags, Eyewear" },
    { title: "Travel", href: "/travel", description: "City Guides & Hotels" },
    { title: "Lifestyle", href: "/lifestyle", description: "Grooming, Home, Tech" },
    { title: "Brands", href: "/brands", description: "A-Z Directory & Spotlights" },
  ];

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col">
        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#999] mb-6 block">
              Coming Soon
            </span>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 tracking-tight text-[#1A1A1A]">
              This Page Is <br/><span className="italic font-light">In Progress</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              We're crafting something exceptional. In the meantime, explore our curated guides and brand spotlights.
            </p>
            
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest hover:bg-[#333] transition-colors"
            >
              Return to Home
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="border-t border-[#E5E5E0] py-16 px-6 bg-[#FAFAF8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl mb-8 text-center">Popular Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularPages.map((page, i) => (
                <Link 
                  key={i} 
                  href={page.href}
                  className="group p-4 bg-white border border-[#E5E5E0] hover:border-[#1A1A1A] transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-widest text-[#999] block mb-2">
                    {page.category}
                  </span>
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:underline">
                    {page.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="border-t border-[#E5E5E0] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl mb-8 text-center">Explore Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E5E0]">
              {categories.map((cat, i) => (
                <Link 
                  key={i} 
                  href={cat.href}
                  className="bg-[#F5F5F0] p-6 hover:bg-[#EEEEE8] transition-colors group"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:underline">{cat.title}</h3>
                  <p className="text-xs text-[#999]">{cat.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Spotlight CTA */}
        <section className="border-t border-[#E5E5E0] py-16 px-6 bg-[#1A1A1A] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-4">Discover Luxury Brands</h2>
            <p className="text-[#999] mb-8 max-w-xl mx-auto">
              From The Row to Brunello Cucinelli, explore in-depth spotlights on the world's finest menswear houses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/brands/spotlight/the-row"
                className="px-6 py-3 border border-white/30 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                The Row
              </Link>
              <Link 
                href="/brands/spotlight/brunello-cucinelli"
                className="px-6 py-3 border border-white/30 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Brunello Cucinelli
              </Link>
              <Link 
                href="/brands/spotlight/lemaire"
                className="px-6 py-3 border border-white/30 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Lemaire
              </Link>
              <Link 
                href="/brands/a-z"
                className="px-6 py-3 bg-white text-[#1A1A1A] text-sm uppercase tracking-widest hover:bg-[#E5E5E0] transition-colors"
              >
                View All Brands A-Z
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
