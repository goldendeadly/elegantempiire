import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { comparisons } from "@/data/comparisons";
import { ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";

// Mock data for hub content (in a real app, this would come from a CMS or database)
const hubContent = {
  coats: {
    title: "Coats & Outerwear",
    subtitle: "Invest in your armor. The definitive guide to winter protection.",
    hero_image: "/images/texture-wool-macro.jpg",
    featured_articles: [
      { title: "High-Luxury Insight: Jil Sander", category: "Brand Deep Dive", date: "Jan 18" },
      { title: "The 5 Essential Winter Coats", category: "Capsule Guide", date: "Jan 15" },
      { title: "Winter Capsule Scenarios: 3 Client Cases", category: "Style Guide", date: "Jan 12" }
    ]
  },
  knitwear: {
    title: "Knitwear",
    subtitle: "Texture, warmth, and the art of layering.",
    hero_image: "/images/hero-winter-minimalism.jpg",
    featured_articles: [
      { title: "Filippa K Heavyweight Knitwear", category: "Brand Insight", date: "Jan 19" },
      { title: "7 Key Knitwear Pieces", category: "Capsule Guide", date: "Jan 14" },
      { title: "Merino vs Alpaca vs Cashmere", category: "Material Guide", date: "Jan 10" }
    ]
  },
  shoes: {
    title: "Footwear",
    subtitle: "Foundation pieces. From combat boots to minimal sneakers.",
    hero_image: "/images/lemaire-dna.jpg",
    featured_articles: [
      { title: "Winter Leather Sneakers", category: "Product Insight", date: "Jan 17" },
      { title: "Chelsea vs Combat vs Hiking Boots", category: "Comparison", date: "Jan 13" }
    ]
  },
  suiting: {
    title: "Suiting & Tailoring",
    subtitle: "Modern armor. Soft structures and winter weights.",
    hero_image: "/images/texture-linen-macro.jpg",
    featured_articles: [
      { title: "Winter Suits in Minimalist Aesthetics", category: "Style Insight", date: "Jan 16" },
      { title: "The Row Winter Trousers", category: "Product Deep Dive", date: "Jan 11" }
    ]
  }
};

export default function HubPage() {
  const [match, params] = useRoute("/hub/:category");
  
  if (!match || !params?.category || !hubContent[params.category as keyof typeof hubContent]) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl mb-4">Hub Not Found</h1>
            <Link href="/" className="border-b border-foreground">Return Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const content = hubContent[params.category as keyof typeof hubContent];
  
  // Filter comparisons relevant to this hub (simple logic for demo)
  // In a real app, comparisons would have a 'category' field
  const relevantComparisons = comparisons.filter(c => {
    if (params.category === 'knitwear' && (c.slug.includes('cos') || c.slug.includes('row'))) return true;
    if (params.category === 'coats' && (c.slug.includes('row') || c.slug.includes('toteme'))) return true;
    return false;
  });

  return (
    <Layout>
      {/* Hub Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.hero_image} 
            alt={content.title} 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
            Curated Hub
          </span>
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">
            {content.title}
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl">Essential Reading</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.featured_articles.map((article, i) => (
              <div key={i} className="group cursor-pointer border-t border-border pt-6 hover:border-foreground transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{article.category}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                  Read Article <ArrowRight size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Comparisons */}
      {relevantComparisons.length > 0 && (
        <section className="py-24 px-6 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl mb-12 text-center">Brand Comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantComparisons.map((comparison) => (
                <Link key={comparison.id} href={`/comparison/${comparison.slug}`} className="block">
                  <div className="bg-background p-8 group cursor-pointer hover:shadow-lg transition-all duration-500 border border-border">
                    <div className="aspect-[16/9] overflow-hidden mb-6 relative">
                      <img 
                        src={comparison.hero_image} 
                        alt={comparison.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <h3 className="font-serif text-3xl mb-2">{comparison.title}</h3>
                    <p className="font-sans font-light text-sm text-muted-foreground line-clamp-2">
                      {comparison.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter / Lead Magnet */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl mb-6">Build Your Wardrobe OS</h2>
          <p className="font-sans font-light text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Download our free 2026 Capsule Guide. A complete system for building a minimalist, high-luxury wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-transparent border border-border px-6 h-14 text-xs tracking-widest focus:border-foreground outline-none w-full"
            />
            <Button className="rounded-none h-14 px-8 text-xs uppercase tracking-widest w-full sm:w-auto">
              Get Access
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
