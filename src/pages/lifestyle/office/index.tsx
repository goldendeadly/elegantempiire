import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function LifestyleOffice() {
  return (
    <Layout>
      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-24 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#999] mb-4 block">Lifestyle</span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Office & Stationery
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            The well-appointed desk. Fine writing instruments, leather goods, and accessories for the modern professional.
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
          <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Explore Office & Stationery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E0] border border-[#E5E5E0]">
          <Link href="/lifestyle/office/pens" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">01 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Pens</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/office/notebooks" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">02 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Notebooks</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/office/desk-accessories" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">03 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Desk Accessories</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/office/portfolios" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">04 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Portfolios</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          <Link href="/lifestyle/office/business-cards" className="bg-[#F5F5F0] p-12 min-h-[300px] flex flex-col justify-between group hover:bg-[#F0F0EB] transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#999]">05 — Explore</span>
            <h3 className="text-2xl font-light mt-4 mb-8">Card Holders</h3>
            <div className="w-full h-px bg-[#E5E5E0] group-hover:bg-[#D5D5D0] transition-colors" />
          </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
