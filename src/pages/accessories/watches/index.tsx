import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function AccessoriesWatches() {
  const watches = [
    {
      number: '01',
      name: 'Rolex Submariner',
      variant: 'No-Date / Date',
      category: 'Sports / Daily',
      strength: 'Durability, liquidity, universal styling',
      bestFor: 'One-watch ownership, pragmatic luxury',
      valueProfile: 'Historically strong demand; high resale confidence',
    },
    {
      number: '02',
      name: 'Cartier Tank',
      variant: 'Must / Louis / Tank Américaine',
      category: 'Dress / Design',
      strength: 'Iconic proportion, elegance, versatility',
      bestFor: 'Taste-led buyers, formal and smart-casual wardrobes',
      valueProfile: 'Strong brand equity; style longevity',
    },
    {
      number: '03',
      name: 'Audemars Piguet Royal Oak',
      variant: 'Steel',
      category: 'Luxury Sports',
      strength: 'Bracelet/case finishing, distinct presence',
      bestFor: 'Modernists, founders, statement minimalists',
      valueProfile: 'Demand-driven; condition and reference matter',
    },
    {
      number: '04',
      name: 'Patek Philippe Calatrava',
      variant: 'Dress Reference',
      category: 'Dress / Heritage',
      strength: 'Refinement, finishing, classical codes',
      bestFor: 'Traditionalists, discreet prestige',
      valueProfile: 'Long-term desirability; reference selection critical',
    },
    {
      number: '05',
      name: 'Richard Mille',
      variant: 'Entry-Level Reference Family',
      category: 'Avant-Garde',
      strength: 'Materials engineering, bold identity',
      bestFor: 'Maximalists, modern performance luxury',
      valueProfile: 'Highly reference-sensitive; buy with counsel',
    },
  ];

  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        {/* Header */}
        <header className="mb-16 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#999] mb-4 block">Guide ,  2026</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Best Watches: The Iconic Brands Worth Owning
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            Luxury watches are not purchased for timekeeping. They are chosen for provenance, engineering integrity, and the quiet authority of objects made to outlast trend cycles.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-[#999]">
            <span>Updated January 2026</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* Introduction */}
        <article className="max-w-3xl mb-24">
          <div className="prose prose-lg">
            <p className="text-xl text-[#666] leading-relaxed mb-8">
              At the top of the market, the difference between a "great" watch and a <em>great decision</em> is rarely aesthetics alone. It is the marriage of finishing standards, serviceability, long-term desirability, and the brand's discipline in protecting its own legacy.
            </p>
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              This guide focuses on five maisons that define modern watch collecting: <strong>Rolex, Cartier, Audemars Piguet, Patek Philippe, and Richard Mille</strong>, with a practical lens: what to buy, why it matters, and who each brand truly serves.
            </p>
          </div>
        </article>

        {/* Five Top-Tier Recommendations */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-4 text-[#1A1A1A]">The Best Watches Right Now: Five Top-Tier Recommendations</h2>
          <p className="text-lg text-[#666] mb-12 max-w-3xl">
            Below are five reference points, each a "best of" in its lane. Not because they are the loudest, but because they combine lasting design language with genuine manufacturing competence and durable demand.
          </p>

          {/* Watch 1: Rolex Submariner */}
          <div className="border-t border-[#E5E5E0] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#999] mb-2 block">01 ,  Sports / Daily</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mb-2">Rolex Submariner</h3>
                <p className="text-lg text-[#666]">No-Date / Date</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Why it's the best</h4>
                  <p className="text-[#666] leading-relaxed">
                    The Submariner is the rare luxury watch that is both culturally iconic and technically pragmatic. It is legible, robust, and engineered for daily wear with minimal compromise. For many collectors, it becomes the baseline: the watch that can handle travel, water, boardrooms, and decades of ownership.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Material & construction</h4>
                  <p className="text-[#666] leading-relaxed">
                    Modern Submariners are typically produced in <strong>Oystersteel (904L-family steel)</strong> with a ceramic bezel insert and a highly refined case architecture. The bracelet and clasp system are purpose-built for comfort and security, with practical adjustment features that matter in real life.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">The experience</h4>
                  <p className="text-[#666] leading-relaxed">
                    The Submariner wears with effortless certainty. It does not require "styling." It simply works, under a cuff, with knitwear, with tailoring, with casual uniform dressing. It is a watch you stop thinking about, which is precisely its power.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Who it's for</h4>
                  <p className="text-[#666] leading-relaxed">
                    The executive with no time, the minimalist collector, or the buyer who wants one high-quality watch that never looks out of place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Watch 2: Cartier Tank */}
          <div className="border-t border-[#E5E5E0] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#999] mb-2 block">02 ,  Dress / Design</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mb-2">Cartier Tank</h3>
                <p className="text-lg text-[#666]">Must / Louis / Tank Américaine</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Why it's the best</h4>
                  <p className="text-[#666] leading-relaxed">
                    Cartier's Tank is not a "watch enthusiast's watch." It is a design object with enduring relevance, arguably the most important dress watch silhouette in modern style history. In a world of oversized sports cases, a Tank signals restraint and taste.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Material & construction</h4>
                  <p className="text-[#666] leading-relaxed">
                    Depending on the model, you'll find <strong>steel or precious metals</strong>, with dial execution that prioritizes proportion and clarity. Many Tanks use reliable movements that emphasize serviceability and long-term ownership rather than technical theater.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">The experience</h4>
                  <p className="text-[#666] leading-relaxed">
                    This is one of the most wearable expressions of luxury: thin, elegant, and visually complete. It elevates tailoring, but it also sharpens simple outfits, white shirt, dark denim, cashmere, fine leather.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Who it's for</h4>
                  <p className="text-[#666] leading-relaxed">
                    The traditionalist, the design-minded dresser, and the man who values aesthetic intelligence over mechanical one-upmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Watch 3: Audemars Piguet Royal Oak */}
          <div className="border-t border-[#E5E5E0] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#999] mb-2 block">03 ,  Luxury Sports</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mb-2">Audemars Piguet Royal Oak</h3>
                <p className="text-lg text-[#666]">Steel</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Why it's the best</h4>
                  <p className="text-[#666] leading-relaxed">
                    The Royal Oak is the defining luxury sports watch with genuine finishing credibility. Its identity is not subtle, yet its appeal is not "hype" at its core. The best Royal Oaks are appreciated for architectural casework, bracelet finishing, and a design that remains singular decades after introduction.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Material & construction</h4>
                  <p className="text-[#666] leading-relaxed">
                    The strength here is in the surfaces: <strong>brushed planes, polished bevels, crisp geometry</strong>, and the integrated bracelet that demands technical precision. When executed correctly, it reads as industrial elegance rather than jewelry.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">The experience</h4>
                  <p className="text-[#666] leading-relaxed">
                    A Royal Oak has presence. It changes how you carry your wrist and how others read you. The bracelet drape and case profile create a specific feeling: modern, confident, and unmistakably premium.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Who it's for</h4>
                  <p className="text-[#666] leading-relaxed">
                    The modernist collector, the founder who wants a visual signature, and the buyer who values finishing as much as brand prestige.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Watch 4: Patek Philippe Calatrava */}
          <div className="border-t border-[#E5E5E0] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#999] mb-2 block">04 ,  Dress / Heritage</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mb-2">Patek Philippe Calatrava</h3>
                <p className="text-lg text-[#666]">Dress Reference</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Why it's the best</h4>
                  <p className="text-[#666] leading-relaxed">
                    The Calatrava is a masterclass in <em>restraint</em>. It represents the upper tier of traditional Geneva watchmaking where refinement is expressed through proportion, dial calm, and finishing rather than spectacle.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Material & construction</h4>
                  <p className="text-[#666] leading-relaxed">
                    Typically in <strong>precious metals</strong> with an emphasis on dial execution, case profile, and movement finishing standards that justify the brand's reputation. When evaluating, pay attention to reference-specific details: dial layout, hand style, and case thickness.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">The experience</h4>
                  <p className="text-[#666] leading-relaxed">
                    This is quiet authority in its purest form. It complements formalwear and elevated business dress without competing for attention. The watch reads as "chosen," not "shown."
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Who it's for</h4>
                  <p className="text-[#666] leading-relaxed">
                    The traditionalist, the collector who prefers discretion, and anyone building a wardrobe where refinement matters more than recognition.
                  </p>
                </div>
                <div className="bg-[#F5F5F0] p-6 border-l-4 border-[#1A1A1A]">
                  <p className="text-sm text-[#666] italic">
                    Expert tip: Prioritize proportion over complications. A well-sized, clean Calatrava reference will outlast most "feature-heavy" alternatives in both style and wearability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Watch 5: Richard Mille */}
          <div className="border-t border-[#E5E5E0] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs uppercase tracking-widest text-[#999] mb-2 block">05 ,  Avant-Garde</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mb-2">Richard Mille</h3>
                <p className="text-lg text-[#666]">Entry-Level Reference Family</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Why it's the best</h4>
                  <p className="text-[#666] leading-relaxed">
                    Richard Mille is polarizing, and that is the point. It is contemporary horology as a materials and engineering statement: shock resistance, extreme case construction, and a design language that refuses traditional restraint. The best RM purchases are made with self-awareness: you are buying a modern totem of performance luxury.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Material & construction</h4>
                  <p className="text-[#666] leading-relaxed">
                    Expect <strong>high-tech composites, titanium, carbon-based case structures</strong>, and movements designed around structural rigidity and real-world shock tolerance. This is not finishing in the old-world sense; it is engineering as identity.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">The experience</h4>
                  <p className="text-[#666] leading-relaxed">
                    Unmistakable on wrist, extremely light in many cases, and visually aggressive. It communicates modern wealth codes and a preference for technical audacity over tradition.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">Who it's for</h4>
                  <p className="text-[#666] leading-relaxed">
                    The modern maximalist, the collector with deep allocation access or strong pre-owned counsel, and anyone who wants avant-garde engineering as a personal signature.
                  </p>
                </div>
                <div className="bg-[#F5F5F0] p-6 border-l-4 border-[#1A1A1A]">
                  <p className="text-sm text-[#666] italic">
                    Expert tip: If you cannot explain why a specific Richard Mille reference exists (materials, architecture, purpose), you are likely paying for the logo more than the object.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Quick Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#E5E5E0]">
              <thead className="bg-[#F5F5F0]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#1A1A1A] border-b border-[#E5E5E0]">Watch</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#1A1A1A] border-b border-[#E5E5E0]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#1A1A1A] border-b border-[#E5E5E0]">Strength</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#1A1A1A] border-b border-[#E5E5E0]">Best For</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#1A1A1A] border-b border-[#E5E5E0]">Value Profile</th>
                </tr>
              </thead>
              <tbody>
                {watches.map((watch, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-6 py-4 text-sm text-[#1A1A1A] border-b border-[#E5E5E0] font-medium">{watch.name}</td>
                    <td className="px-6 py-4 text-sm text-[#666] border-b border-[#E5E5E0]">{watch.category}</td>
                    <td className="px-6 py-4 text-sm text-[#666] border-b border-[#E5E5E0]">{watch.strength}</td>
                    <td className="px-6 py-4 text-sm text-[#666] border-b border-[#E5E5E0]">{watch.bestFor}</td>
                    <td className="px-6 py-4 text-sm text-[#666] border-b border-[#E5E5E0]">{watch.valueProfile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Brand vs Brand Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-4 text-[#1A1A1A]">Brand vs Brand: Rolex, Cartier, AP, Patek, Richard Mille</h2>
          <p className="text-lg text-[#666] mb-12 max-w-3xl">
            Below is the honest comparison: not "which is best," but which philosophy aligns with how you live.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Philosophy & Heritage */}
            <div>
              <h3 className="text-xl font-light mb-6 text-[#1A1A1A] pb-2 border-b border-[#E5E5E0]">Philosophy & Heritage</h3>
              <ul className="space-y-4">
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Rolex:</strong> Industrial excellence. Relentless incremental improvement. A tool-watch ethos refined into global prestige.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Cartier:</strong> Design primacy. Watches as cultural objects, proportion, elegance, and recognizable codes.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Audemars Piguet:</strong> Finishing-forward modern luxury. A maison defined in the public mind by one silhouette, executed at a high level.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Patek Philippe:</strong> Traditional high watchmaking with a strong emphasis on lineage and finishing standards.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Richard Mille:</strong> Contemporary engineering as luxury. Modern materials, shock resistance, and visual disruption.</li>
              </ul>
            </div>

            {/* Signature Products */}
            <div>
              <h3 className="text-xl font-light mb-6 text-[#1A1A1A] pb-2 border-b border-[#E5E5E0]">Signature Products</h3>
              <ul className="space-y-4">
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Rolex:</strong> Submariner, GMT-Master II, Daytona, Datejust</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Cartier:</strong> Tank, Santos, Ballon Bleu</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">AP:</strong> Royal Oak (and Royal Oak Offshore)</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Patek:</strong> Calatrava, Nautilus, Aquanaut, complications</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">RM:</strong> RM sports references; case/material innovation as the core story</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Craftsmanship & Quality */}
            <div>
              <h3 className="text-xl font-light mb-6 text-[#1A1A1A] pb-2 border-b border-[#E5E5E0]">Craftsmanship & Quality</h3>
              <ul className="space-y-4">
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Rolex:</strong> Among the best in industrial consistency, especially cases, bracelets, and durability.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Cartier:</strong> Excels in design execution and wearable elegance; movement choices vary by line.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">AP:</strong> Competes on finishing and bracelet/case sophistication, particularly in steel Royal Oak references.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Patek:</strong> The benchmark for traditional finishing and movement refinement in its class.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">RM:</strong> Engineering-led craftsmanship: structural innovation, material science, shock tolerance.</li>
              </ul>
            </div>

            {/* Value Proposition */}
            <div>
              <h3 className="text-xl font-light mb-6 text-[#1A1A1A] pb-2 border-b border-[#E5E5E0]">Value Proposition</h3>
              <ul className="space-y-4">
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Rolex:</strong> One of the strongest "buy well, wear hard, resell confidently" propositions in luxury.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Cartier:</strong> Timeless design value, especially for a style-driven wardrobe, often with more accessible entry points.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">AP:</strong> Premium pricing justified when finishing and reference desirability align; volatility is higher.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">Patek:</strong> The most traditional "heirloom logic," but selection discipline matters.</li>
                <li className="text-[#666]"><strong className="text-[#1A1A1A]">RM:</strong> High-risk/high-reward positioning; reference knowledge is non-negotiable.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nuanced Winners by Buyer Type */}
        <section className="mb-24 bg-[#F5F5F0] p-12">
          <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Nuanced Winners by Buyer Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6">
              <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">For the traditionalist</h4>
              <p className="text-[#1A1A1A] font-light text-lg"><em>Patek Philippe Calatrava</em> (or Cartier Tank if design outweighs mechanics)</p>
            </div>
            <div className="bg-white p-6">
              <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">For the modernist</h4>
              <p className="text-[#1A1A1A] font-light text-lg"><em>Audemars Piguet Royal Oak</em> ,  presence without chaos</p>
            </div>
            <div className="bg-white p-6">
              <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">For the pragmatic investor-wearer</h4>
              <p className="text-[#1A1A1A] font-light text-lg"><em>Rolex Submariner</em> (or GMT-Master II, allocation permitting)</p>
            </div>
            <div className="bg-white p-6">
              <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">For the design purist</h4>
              <p className="text-[#1A1A1A] font-light text-lg"><em>Cartier Tank</em></p>
            </div>
            <div className="bg-white p-6">
              <h4 className="text-sm uppercase tracking-widest text-[#999] mb-2">For the maximalist</h4>
              <p className="text-[#1A1A1A] font-light text-lg"><em>Richard Mille</em> ,  purchased with expert guidance</p>
            </div>
          </div>
        </section>

        {/* Watch Buying Guide */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-4 text-[#1A1A1A]">Watch Buying Guide: How to Choose Like a Discerning Buyer</h2>
          <p className="text-lg text-[#666] mb-12 max-w-3xl">
            A watch purchase becomes expensive when it doesn't match your actual wardrobe and schedule.
          </p>

          <div className="space-y-12">
            <div className="border-l-4 border-[#1A1A1A] pl-8">
              <h3 className="text-xl font-light mb-4 text-[#1A1A1A]">1) Define the role: daily, dress, or signature</h3>
              <ul className="space-y-2 text-[#666]">
                <li><strong>Daily watch:</strong> prioritize durability, comfort, water resistance, and service network</li>
                <li><strong>Dress watch:</strong> prioritize thickness, proportion, and visual calm</li>
                <li><strong>Signature piece:</strong> prioritize design identity and how it aligns with your public presence</li>
              </ul>
              <p className="text-sm text-[#999] mt-4 italic">Expert tip: If you own one luxury watch, buy for your most common day, not your most aspirational event.</p>
            </div>

            <div className="border-l-4 border-[#1A1A1A] pl-8">
              <h3 className="text-xl font-light mb-4 text-[#1A1A1A]">2) Choose case size by proportion, not trend</h3>
              <p className="text-[#666] mb-4">A well-sized watch reads expensive because it looks <em>intentional</em>. Oversizing is rarely refined.</p>
              <ul className="space-y-2 text-[#666]">
                <li>Smaller can be powerful, especially for dress silhouettes (Cartier, Calatrava)</li>
                <li>Sports watches can tolerate slightly larger cases if lug-to-lug and thickness remain balanced</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#1A1A1A] pl-8">
              <h3 className="text-xl font-light mb-4 text-[#1A1A1A]">3) Prioritize materials that suit your lifestyle</h3>
              <ul className="space-y-2 text-[#666]">
                <li><strong>Steel:</strong> durable, versatile, low-maintenance</li>
                <li><strong>Gold/platinum:</strong> formal authority and warmth, but more visible and scratch-prone</li>
                <li><strong>Titanium/composites:</strong> comfort and modern engineering (especially relevant for RM)</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#1A1A1A] pl-8">
              <h3 className="text-xl font-light mb-4 text-[#1A1A1A]">4) Buy the condition, not the story</h3>
              <p className="text-[#666]">In the secondary market, condition and documentation frequently matter more than romantic narratives.</p>
              <p className="text-sm text-[#999] mt-4 italic">Expert tip: "Full set" (box/papers) and documented servicing often outperform vague provenance when it comes time to resell.</p>
            </div>

            <div className="border-l-4 border-[#1A1A1A] pl-8">
              <h3 className="text-xl font-light mb-4 text-[#1A1A1A]">5) Use reputable retail ecosystems</h3>
              <p className="text-[#666]">For new purchases, official channels protect warranty and long-term service. For pre-owned, choose retailers with authentication, return policies, and transparent grading.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-24 border-t border-[#E5E5E0] pt-16">
          <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Conclusion: The Elegant Empiire Standard</h2>
          <div className="max-w-3xl">
            <p className="text-xl text-[#666] leading-relaxed mb-8">
              The best watches are not simply the most expensive. They are the ones that remain correct on your wrist five years from now: mechanically sound, aesthetically disciplined, and aligned with the life you actually live.
            </p>
            <ul className="space-y-3 text-[#666] mb-8">
              <li>Choose <strong>Rolex</strong> for uncompromising daily utility and enduring demand.</li>
              <li>Choose <strong>Cartier</strong> when design intelligence and proportion matter most.</li>
              <li>Choose <strong>Audemars Piguet</strong> for modern luxury finishing with unmistakable presence.</li>
              <li>Choose <strong>Patek Philippe</strong> for traditional refinement and heirloom logic.</li>
              <li>Choose <strong>Richard Mille</strong> only when you want contemporary engineering as identity, and you have the reference knowledge to buy correctly.</li>
            </ul>
            <p className="text-lg text-[#666] leading-relaxed">
              Elegant Empiire's position is simple: luxury is not performance, it is <em>discernment</em>. Buy fewer pieces. Buy better. And ensure every object you wear can justify itself in craftsmanship, provenance, and long-term value.
            </p>
          </div>
        </section>

        {/* Explore More */}
        <section className="border-t border-[#E5E5E0] pt-16">
          <h2 className="text-2xl font-light mb-8 text-[#1A1A1A]">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
            <Link href="/accessories/watches/dress-watches" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Guide</span>
              <h3 className="text-xl font-light mt-4">Best Dress Watches</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
            <Link href="/accessories/watches/dive-watches" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Guide</span>
              <h3 className="text-xl font-light mt-4">Best Dive Watches</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
            <Link href="/guides/watches" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Guide</span>
              <h3 className="text-xl font-light mt-4">Watch Buying Guide</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
