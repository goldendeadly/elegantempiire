import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function GuidesBestOfCreedFragrancesRanked() {
  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-16 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#999] mb-4 block">Guide — 2026</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Creed Fragrances Ranked
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            Every Creed fragrance reviewed and ranked. From Aventus to Green Irish Tweed.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-[#999]">
            <span>Updated January 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        <article className="max-w-3xl">
          <div className="prose prose-lg">
            <p className="text-xl text-[#666] leading-relaxed mb-8">
              Our editors have spent hundreds of hours researching, testing, and comparing 
              the finest options available. This guide represents our definitive recommendations 
              for the discerning gentleman.
            </p>
            
            <div className="bg-[#F5F5F0] p-8 my-12 border-l-4 border-[#1A1A1A]">
              <h3 className="text-lg font-medium mb-2">Editor's Note</h3>
              <p className="text-[#666]">
                Content for this guide is being curated by our editorial team. 
                Check back soon for our complete recommendations.
              </p>
            </div>
          </div>
        </article>

        <section className="mt-24 pt-16 border-t border-[#E5E5E0]">
          <h2 className="text-2xl font-light mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-[#F5F5F0] h-48 mb-4 group-hover:bg-[#F0F0EB] transition-colors"></div>
              <h3 className="text-lg font-light">More guides coming soon</h3>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
