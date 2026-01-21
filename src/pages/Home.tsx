import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 border-b border-border">
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
              <Link href="/hub/coats">Explore Collections</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-none px-8 h-14 text-xs uppercase tracking-widest bg-transparent" asChild>
              <Link href="/comparisons">View Comparisons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals (NerdWallet Style) */}
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

      {/* Category Hubs */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">Curated Hubs</h2>
            <Link href="/hubs" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-foreground pb-1">View All <ArrowRight size={12}/></Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { title: "Coats & Outerwear", subtitle: "Invest in your armor", img: "/images/texture-wool-macro.jpg", link: "/hub/coats" },
              { title: "Suiting", subtitle: "Modern tailoring decoded", img: "/images/texture-linen-macro.jpg", link: "/hub/suiting" },
              { title: "Knitwear", subtitle: "Cashmere, wool & blends", img: "/images/hero-winter-minimalism.jpg", link: "/hub/knitwear" },
              { title: "Footwear", subtitle: "From loafers to boots", img: "/images/lemaire-dna.jpg", link: "/hub/shoes" },
            ].map((hub, i) => (
              <Link key={i} href={hub.link} className="block">
                <div className="bg-background p-8 h-[400px] flex flex-col justify-between group cursor-pointer hover:bg-secondary/30 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <img src={hub.img} className="w-full h-full object-cover grayscale" alt="" />
                  </div>
                  <div className="relative z-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">0{i+1}</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-serif text-3xl mb-2">{hub.title}</h3>
                    <p className="font-sans font-light text-sm text-muted-foreground">{hub.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Comparison (The Row vs Lemaire) */}
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
              <Link href="/comparison/the-row-vs-lemaire">Read the Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl mb-12 text-center">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "The Best Cashmere Sweaters of 2026", category: "Best Of", date: "Jan 15" },
              { title: "Is Loro Piana Worth the Premium?", category: "Brand Deep Dive", date: "Jan 12" },
              { title: "5 Trench Coats That Will Last a Lifetime", category: "Investment Guide", date: "Jan 08" },
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-secondary/30 mb-6 overflow-hidden">
                  {/* Placeholder for post image */}
                  <div className="w-full h-full bg-muted group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <div className="flex justify-between items-center mb-3 border-b border-border pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{post.category}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl leading-tight group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
