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
          <p className="text-xl text-gray-700 mb-12">
            Elegant Empiire is built by a team of industry insiders, textile scientists, and master tailors who have dedicated their careers to understanding the world of luxury menswear.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-2">Julian Ashford</h2>
              <p className="text-sm text-gray-500 mb-4">Former Luxury Buyer & Editorial Lead</p>
              <p className="text-gray-700">
                Julian spent 15 years as a senior buyer for one of Europe's most prestigious department stores, where he was responsible for curating collections from Loro Piana, Brunello Cucinelli, and The Row. He now leads our editorial team, bringing an insider's perspective on what separates the truly exceptional from the merely expensive.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-2">Dr. Alistair Finch</h2>
              <p className="text-sm text-gray-500 mb-4">Textile Scientist & Materials Analyst</p>
              <p className="text-gray-700">
                With a PhD in textile engineering and 20 years of experience in luxury fabric mills, Dr. Finch is our authority on material quality. He conducts all of our fiber analysis, stitch density testing, and durability assessments. If a brand claims "Italian cashmere," Alistair will tell you exactly which mill it came from—and whether it's worth the price.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-2">Matteo D'Angelo</h2>
              <p className="text-sm text-gray-500 mb-4">Master Tailor & Construction Expert</p>
              <p className="text-gray-700">
                Matteo trained on Savile Row and spent a decade working for one of Milan's most exclusive tailoring houses. He is responsible for deconstructing every garment we review, analyzing internal construction, canvas work, and finishing details that most consumers never see. His eye for craftsmanship is unmatched.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-2">Elias Vance</h2>
              <p className="text-sm text-gray-500 mb-4">Investigative Journalist & Brand Analyst</p>
              <p className="text-gray-700">
                Elias has spent his career exposing the truth behind luxury marketing. He investigates supply chains, tracks ownership changes, and monitors brand quality shifts that often go unnoticed by the public. If a heritage brand has been quietly cutting corners, Elias will find out—and we'll tell you.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mt-12">
            Our experts remain anonymous to preserve their industry relationships and ensure their analysis is free from external pressure. What you read on Elegant Empiire is the unfiltered truth.
          </p>
        </div>
      </div>
    </div>
  );
}
