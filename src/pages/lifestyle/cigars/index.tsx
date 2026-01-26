import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function LifestyleCigars() {
  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-24 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#999] mb-4 block">Lifestyle</span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Cigars & Tobacco
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            The ritual of the fine cigar. From Cuban legends to boutique blends, everything for the aficionado.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
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

        <section className="mt-16">
          <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Explore Cigars & Tobacco</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
          <Link href="/lifestyle/cigars/cuban-cigars" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">01 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Cuban Cigars</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/cigars/nicaraguan-cigars" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">02 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Nicaraguan Cigars</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/cigars/humidors" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">03 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Humidors</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/cigars/cigar-accessories" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">04 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Cigar Accessories</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/cigars/pipes" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">05 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Pipes</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/cigars/lighters" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">06 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Lighters</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
