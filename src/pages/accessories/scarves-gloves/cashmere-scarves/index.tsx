import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function AccessoriesScarvesGlovesCashmereScarves() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#E5E5E0]">
      {/* Navigation Bar Placeholder */}
      <nav className="sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#E5E5E0]">
        <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
            ELEGANT EMPIIRE
          </Link>
          <div className="text-xs uppercase tracking-widest text-[#666]">
            ACCESSORIES / SCARVES GLOVES / CASHMERE SCARVES
          </div>
        </div>
      </nav>

      <main className="max-w-[1800px] mx-auto px-6 py-24">
        <header className="mb-24 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-[#1A1A1A]">
            Cashmere Scarves
          </h1>
          <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed max-w-2xl">
            Curated selection of the finest cashmere scarves. 
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
      
      <footer className="border-t border-[#E5E5E0] py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-[1800px] mx-auto flex justify-between items-end">
          <h2 className="text-[12vw] leading-none font-light tracking-tighter text-[#E5E5E0] select-none">
            EMPIIRE
          </h2>
        </div>
      </footer>
    </div>
  );
}
