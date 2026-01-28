import { Link } from 'wouter';

export default function HowWeMakeMoney() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-gray-600 hover:text-black mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-serif mb-6">How We Make Money</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Elegant Empiire is a reader-supported publication. To maintain our editorial independence and keep our content free, we generate revenue through a transparent, affiliate-based model.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Our Model: Affiliate Commissions</h2>
          <p className="text-gray-700">
            When you read an article and click on a link to a product on a retailer's site, we may earn a small commission if you make a purchase. This comes at <strong>no extra cost to you</strong>—the price is the same whether you use our link or not.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Why This Model Works</h2>
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong>It Keeps Us Honest:</strong> Our primary goal is to earn your trust. If we recommend a poor-quality product, you won't buy it, and we won't earn a commission. This model incentivizes us to be as accurate and unbiased as possible.
            </li>
            <li>
              <strong>It Funds Our Work:</strong> The revenue we generate allows us to buy our own products for testing, pay our team of experts, and invest in the data-driven research that makes our content unique.
            </li>
            <li>
              <strong>It Aligns Our Interests with Yours:</strong> We only make money when you find a product that you love and decide to purchase. Our success is directly tied to your satisfaction.
            </li>
          </ol>

          <h2 className="text-3xl font-serif mt-12 mb-4">Our Promise to You</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Our affiliate relationships <strong>do not</strong> influence our editorial content. We recommend products based on their quality, not their commission rate.</li>
            <li>We will always clearly disclose when a link is an affiliate link.</li>
            <li>We will never recommend a product that we haven't thoroughly researched and wouldn't consider for our own wardrobes.</li>
          </ul>

          <p className="text-lg text-gray-700 mt-12">
            Our mission is to provide you with the best possible advice. This transparent model allows us to do that without compromising our integrity.
          </p>
        </div>
      </div>
    </div>
  );
}
