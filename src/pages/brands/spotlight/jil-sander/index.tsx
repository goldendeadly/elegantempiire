import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function BrandsSpotlightJilSander() {
  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-24 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Jil Sander
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            Curated selection of the finest jil sander. 
            Coming soon to Elegant Empiire.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
          {/* Placeholder Content Blocks */}
          <div className="bg-[#F5F5F0] p-12 min-h-[400px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">01 — Featured</span>
            <h3 className="text-3xl font-light mt-4 mb-8">The Edit</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </div>
          <div className="bg-[#F5F5F0] p-12 min-h-[400px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">02 — Reviews</span>
            <h3 className="text-3xl font-light mt-4 mb-8">Top Rated</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </div>
          <div className="bg-[#F5F5F0] p-12 min-h-[400px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">03 — Guide</span>
            <h3 className="text-3xl font-light mt-4 mb-8">Buying Guide</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
