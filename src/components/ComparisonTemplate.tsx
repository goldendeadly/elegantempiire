import { Button } from "@/components/ui/button";
import { ComparisonData } from "@/types/comparison";
import { ExternalLink, Minus } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "./Layout";

interface ComparisonTemplateProps {
  data: ComparisonData;
}

export default function ComparisonTemplate({ data }: ComparisonTemplateProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="bg-background text-foreground overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-20 pb-10 -mt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={data.hero_image} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-5xl w-full text-center text-white mix-blend-difference"
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center gap-4 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] uppercase border-b border-white/30 pb-2">Brand Lineage</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: data.title.replace('&', '<span class="font-sans font-thin text-4xl md:text-6xl align-middle mx-4 italic">&</span>') }}>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="font-sans font-light text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
              {data.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-white/30"></div>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 pt-2">
              <div className="h-[1px] w-12 bg-foreground mb-6"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{data.premise_title}</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
                {data.premise_text}
              </p>
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="border-y border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Brand 1 Glance */}
            <div className="p-12 flex flex-col justify-between min-h-[300px] hover:bg-secondary/30 transition-colors duration-500 group">
              <div>
                <h2 className="font-serif text-4xl mb-2">{data.brand_1.name}</h2>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">{data.brand_1.founded}</p>
                <p className="font-sans font-light text-lg leading-relaxed max-w-sm line-clamp-3">
                  {data.brand_1.silhouette}
                </p>
              </div>
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-mono text-xs border-b border-foreground pb-1">Read Analysis</span>
              </div>
            </div>

            {/* Brand 2 Glance */}
            <div className="p-12 flex flex-col justify-between min-h-[300px] hover:bg-secondary/30 transition-colors duration-500 group">
              <div>
                <h2 className="font-serif text-4xl mb-2">{data.brand_2.name}</h2>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">{data.brand_2.founded}</p>
                <p className="font-sans font-light text-lg leading-relaxed max-w-sm line-clamp-3">
                  {data.brand_2.silhouette}
                </p>
              </div>
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-mono text-xs border-b border-foreground pb-1">Read Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Texture Break 1 */}
        <div className="h-[40vh] w-full overflow-hidden relative">
          <img src={data.texture_break_1} alt="Texture 1" className="w-full h-full object-cover grayscale contrast-125" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-serif text-5xl md:text-7xl text-white mix-blend-overlay italic">Winter Aesthetic DNA</h2>
          </div>
        </div>

        {/* Brand 1 Deep Dive */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={data.brand_1.image} alt={data.brand_1.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="font-mono text-xs uppercase tracking-widest">{data.brand_1.image_caption}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">01 — {data.brand_1.name}</span>
                <h2 className="font-serif text-5xl md:text-6xl mb-8">{data.brand_1.vibe}</h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Silhouette</h4>
                    <p className="font-sans font-light text-lg text-muted-foreground">
                      {data.brand_1.silhouette}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Fabric Philosophy</h4>
                      <p className="font-sans font-light text-muted-foreground">
                        {data.brand_1.fabric}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Color Identity</h4>
                      <p className="font-sans font-light text-muted-foreground">
                        {data.brand_1.color}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs uppercase bg-secondary px-2 py-1">Price Tier: {data.brand_1.price_tier}</span>
                      <a href={data.brand_1.link} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase border-b border-foreground hover:text-muted-foreground transition-colors flex items-center gap-1">
                        Visit {data.brand_1.name} <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Texture Break 2 */}
        <div className="h-[20vh] w-full overflow-hidden">
          <img src={data.texture_break_2} alt="Texture 2" className="w-full h-full object-cover opacity-80" />
        </div>

        {/* Brand 2 Deep Dive */}
        <section className="py-24 px-6 bg-[#FDFBF7]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 lg:pr-12">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">02 — {data.brand_2.name}</span>
                <h2 className="font-serif text-5xl md:text-6xl mb-8">{data.brand_2.vibe}</h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Silhouette</h4>
                    <p className="font-sans font-light text-lg text-muted-foreground">
                      {data.brand_2.silhouette}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Fabric Philosophy</h4>
                      <p className="font-sans font-light text-muted-foreground">
                        {data.brand_2.fabric}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-2">Color Identity</h4>
                      <p className="font-sans font-light text-muted-foreground">
                        {data.brand_2.color}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs uppercase bg-secondary px-2 py-1">Price Tier: {data.brand_2.price_tier}</span>
                      <a href={data.brand_2.link} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase border-b border-foreground hover:text-muted-foreground transition-colors flex items-center gap-1">
                        Visit {data.brand_2.name} <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={data.brand_2.image} alt={data.brand_2.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="font-mono text-xs uppercase tracking-widest">{data.brand_2.image_caption}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-6 bg-foreground text-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">The Distinction</h2>
              <p className="font-sans font-light text-white/60">Side-by-side analysis of the winter DNA.</p>
            </div>

            <div className="border border-white/20">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-white/20 font-mono text-xs uppercase tracking-widest py-4">
                <div className="px-6 text-white/40">Feature</div>
                <div className="px-6 border-l border-white/20">{data.brand_1.name}</div>
                <div className="px-6 border-l border-white/20">{data.brand_2.name}</div>
              </div>

              {/* Rows */}
              {[
                { feature: "Origin", row: data.brand_1.founded, lemaire: data.brand_2.founded },
                { feature: "Designers", row: data.brand_1.designers, lemaire: data.brand_2.designers },
                { feature: "Silhouette", row: "Structured Minimalism", lemaire: "Relaxed & Fluid Minimalism" },
                { feature: "Palette", row: "Cold Toned Neutrals", lemaire: "Warm Earthy Tones" },
                { feature: "Vibe", row: data.brand_1.vibe, lemaire: data.brand_2.vibe },
                { feature: "Price", row: data.brand_1.price_tier, lemaire: data.brand_2.price_tier },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-white/10 last:border-0 py-6 hover:bg-white/5 transition-colors">
                  <div className="px-6 font-mono text-xs uppercase tracking-widest text-white/40 flex items-center">{item.feature}</div>
                  <div className="px-6 border-l border-white/10 font-sans font-light">{item.row}</div>
                  <div className="px-6 border-l border-white/10 font-sans font-light">{item.lemaire}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">Which Uniform is Yours?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="bg-secondary/30 p-10 md:p-16 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-foreground"></div>
                <h3 className="font-serif text-3xl mb-8">{data.decision_guide.brand_1_title}</h3>
                <ul className="space-y-6 font-sans font-light text-lg">
                  {data.decision_guide.brand_1_points.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <Minus className="shrink-0 mt-1.5" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-xs h-12 px-8" asChild>
                    <a href={data.brand_1.link} target="_blank" rel="noreferrer">Explore {data.brand_1.name}</a>
                  </Button>
                </div>
              </div>

              <div className="bg-[#F5F5F0] p-10 md:p-16 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#6B665F]"></div>
                <h3 className="font-serif text-3xl mb-8">{data.decision_guide.brand_2_title}</h3>
                <ul className="space-y-6 font-sans font-light text-lg">
                  {data.decision_guide.brand_2_points.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <Minus className="shrink-0 mt-1.5" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-xs h-12 px-8" asChild>
                    <a href={data.brand_2.link} target="_blank" rel="noreferrer">Explore {data.brand_2.name}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-24 px-6 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl mb-12">Starting Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.scenarios.map((item, i) => (
                <div key={i} className="p-6 border border-border hover:border-foreground transition-colors duration-300">
                  <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                  <p className="font-sans font-light text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
