import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function FragranceGuides() {
  const guides = [
    {
      number: '01',
      category: 'Framework',
      title: 'Cologne Persona Grid',
      subtitle: '6 Signature Scents for Men',
      description: 'Choose a signature scent by style archetype. Includes prices, outfit pairings, sunglasses, accessories, and cost per wear logic.',
      href: '/articles/cologne-persona-grid-signature-scents-men',
      readTime: '12 min read',
    },
    {
      number: '02',
      category: 'Framework',
      title: 'Day to Night Cologne',
      subtitle: '6 Dual Identity Profiles',
      description: 'A day to night cologne framework with dual identity profiles, pricing, cost per wear math, and outfit transitions.',
      href: '/articles/day-to-night-cologne-dual-identity-profiles',
      readTime: '14 min read',
    },
  ];

  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-24 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#999] mb-4 block">Fragrance</span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Guides & Frameworks
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            Strategic frameworks for building a coherent fragrance wardrobe. Choose scents like investments, not impulse purchases.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
          {guides.map((guide) => (
            <Link 
              key={guide.href}
              href={guide.href} 
              className="bg-[#F5F5F0] p-12 min-h-[400px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#999]">{guide.number} — {guide.category}</span>
                <h3 className="text-3xl font-light mt-4 mb-2 text-[#1A1A1A]">{guide.title}</h3>
                <p className="text-xl font-light text-[#666] mb-4">{guide.subtitle}</p>
                <p className="text-sm text-[#999] leading-relaxed max-w-md">{guide.description}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-xs text-[#999]">{guide.readTime}</span>
                  <span className="text-xs uppercase tracking-widest text-[#1A1A1A] group-hover:underline">Read Guide →</span>
                </div>
                <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-24 pt-16 border-t border-[#E5E5E0]">
          <h2 className="text-2xl font-light mb-8 text-[#1A1A1A]">The Elegant Empiire Approach</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              Most men buy fragrance reactively—chasing trends, accumulating bottles, and never building a coherent scent identity. 
              Our frameworks treat fragrance as a wardrobe system: each bottle has a role, each purchase earns its cost per wear, 
              and the result is a signature that reinforces your visual message.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              Start with one framework. Commit to it for 30 days. Then expand only when you have a clear role for the next bottle.
            </p>
          </div>
        </section>

        <section className="mt-24 pt-16 border-t border-[#E5E5E0]">
          <h2 className="text-2xl font-light mb-8 text-[#1A1A1A]">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
            <Link href="/fragrance/niche" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Explore</span>
              <h3 className="text-xl font-light mt-4">Niche Fragrance</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
            <Link href="/fragrance/designer" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Explore</span>
              <h3 className="text-xl font-light mt-4">Designer Fragrance</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
            <Link href="/fragrance/comparisons" className="bg-[#F5F5F0] p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#999]">Explore</span>
              <h3 className="text-xl font-light mt-4">Comparisons</h3>
              <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors mt-4" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
