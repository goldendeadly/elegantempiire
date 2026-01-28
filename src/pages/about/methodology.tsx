import { Link } from 'wouter';

export default function EditorialStandards() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-gray-600 hover:text-black mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-serif mb-6">Editorial Standards</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Our reputation is built on trust. To maintain that trust, we adhere to a strict set of editorial standards that govern every piece of content we publish.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">1. Independence & Objectivity</h2>
          <ul className="space-y-2 text-gray-700">
            <li>We are 100% independent. Our reviews and recommendations are not influenced by advertisers, affiliate partners, or brand relationships.</li>
            <li>Our experts are anonymous to prevent conflicts of interest and ensure their analysis is unbiased.</li>
          </ul>

          <h2 className="text-3xl font-serif mt-12 mb-4">2. Rigorous Testing Methodology</h2>
          <ul className="space-y-2 text-gray-700">
            <li>We buy our own products at retail. We do not accept freebies or press samples.</li>
            <li>Every product is subjected to a standardized wear-testing protocol, which includes a minimum of 50 hours of real-world use.</li>
            <li>Garments are deconstructed to analyze internal construction, stitching, and material quality.</li>
          </ul>

          <h2 className="text-3xl font-serif mt-12 mb-4">3. Data-Driven Analysis</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Our reviews are based on objective, measurable criteria, including fiber micron count, stitch density, and our proprietary "Cost Per Wear" calculation.</li>
            <li>We use a 100-point scoring system to rate products across 5 key categories: Materials, Construction, Durability, Design, and Value.</li>
          </ul>

          <h2 className="text-3xl font-serif mt-12 mb-4">4. Commitment to Accuracy</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Every article is fact-checked by a dedicated research team before publication.</li>
            <li>We regularly update our content to reflect new product releases, price changes, and any shifts in brand quality.</li>
          </ul>

          <p className="text-lg text-gray-700 mt-12">
            Our goal is to provide you with the most accurate, unbiased, and useful information possible, so you can make informed decisions about the brands you choose to invest in.
          </p>
        </div>
      </div>
    </div>
  );
}
