import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">ELEGANT EMPIIRE</h2>
            <p className="font-sans font-light text-white/60 max-w-md text-sm leading-relaxed mb-8">
              The definitive authority on luxury menswear. We decode the world's finest brands, fabrics, and silhouettes to help you build a wardrobe of uncompromising quality.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Editorial</h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li><Link href="/about/methodology" className="hover:text-white transition-colors">Review Methodology</Link></li>
              <li><Link href="/about/editorial-standards" className="hover:text-white transition-colors">Editorial Standards</Link></li>
              <li><Link href="/about/team" className="hover:text-white transition-colors">Our Experts</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Tools & Resources</h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li><Link href="/tools/wardrobe-builder" className="hover:text-white transition-colors">Wardrobe OS</Link></li>
              <li><Link href="/tools/cost-per-wear" className="hover:text-white transition-colors">ROI Calculator</Link></li>
              <li><Link href="/guides/fabric-encyclopedia" className="hover:text-white transition-colors">Fabric Encyclopedia</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-xs font-mono text-white/30 uppercase tracking-widest">
            © 2026 Elegant Empiire. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs font-light text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/5 rounded text-xs font-light text-white/40 leading-relaxed">
          <strong>Advertiser Disclosure:</strong> Elegant Empiire is an independent, advertising-supported publisher and comparison service. We may be compensated in exchange for placement of sponsored products and services, or your clicking on links posted on this website. This compensation may impact how, where and in what order products appear.
        </div>
      </div>
    </footer>
  );
}
