import { Link } from 'wouter';

export default function AboutElegantEmpiire() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-gray-600 hover:text-black mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-serif mb-6">About Elegant Empiire</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            <strong>Elegant Empiire is a private, independent authority on luxury menswear.</strong> We are not a fashion magazine chasing trends, nor are we a retailer with inventory to move. We are a team of industry insiders, textile experts, and seasoned tailors dedicated to one mission: <strong>decoding the world of high-end menswear to help you make smarter, more confident investments in your wardrobe.</strong>
          </p>

          <p className="text-gray-700 mb-6">
            Our philosophy is built on the principle of "Cost Per Wear." We believe true luxury is not found in a logo, but in the quiet confidence of a garment that is built to last a lifetime. We focus on the tangible markers of quality—fiber length, stitch density, and artisanal construction—to separate the truly exceptional from the merely expensive.
          </p>

          <p className="text-gray-700">
            We buy our own products, test them rigorously, and provide unbiased, data-driven analysis. Our goal is to be your most trusted advisor in building a wardrobe of uncompromising quality and enduring style.
          </p>
        </div>
      </div>
    </div>
  );
}
