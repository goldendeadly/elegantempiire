import { Link } from 'wouter';

export default function OurExperts() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-gray-600 hover:text-black mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-serif mb-6">Our Experts</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Elegant Empiire operates as a collective, not a personality-driven publication. Our contributors have worked behind the scenes at heritage mills, luxury retailers, ateliers, and brand advisory desks.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Environments where discretion is not optional, but required. Anonymity allows us to speak candidly about construction quality, material sourcing, pricing integrity, and long-term value without compromising professional obligations or industry relationships.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our experts remain anonymous to preserve their independence and ensure their analysis is free from external pressure. What you read on Elegant Empiire is the unfiltered truth.
          </p>

          <hr className="my-12 border-gray-300" />

          <h2 className="text-3xl font-serif mb-6">Our Standards</h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every review, guide, and comparison published on Elegant Empiire follows a standardized evaluation framework grounded in textile science, craftsmanship analysis, and real-world wear testing. We do not accept paid placements, sponsored rankings, or editorial influence tied to commercial relationships. Products are assessed on fiber quality, construction method, durability, and cost-per-wear logic, not on trend relevance or brand prestige alone.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Elegant Empiire exists for readers who value discernment over novelty and precision over hype. We believe in higher standards, fewer recommendations, and purchases that stand the test of time.
          </p>
        </div>
      </div>
    </div>
  );
}
