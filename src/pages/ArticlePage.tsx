import { useRoute, Link } from 'wouter';
import { getArticleBySlug } from '@/lib/markdown';
import Layout from '@/components/Layout';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const [, params] = useRoute('/articles/:slug');
  const slug = params?.slug || '';
  
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-light mb-4">Article Not Found</h1>
          <Link href="/" className="text-sm text-gray-600 hover:text-black">
            ← Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const { metadata, content } = article;

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-[#1A1A1A]">
            {metadata.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 font-light">
            {metadata.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{metadata.author}</span>
            <span>•</span>
            <time dateTime={metadata.publishDate}>
              {new Date(metadata.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex gap-2 mt-4">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs uppercase tracking-wider rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-3xl font-light mt-12 mb-4 text-[#1A1A1A]">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-light mt-8 mb-3 text-[#1A1A1A]">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2">
                  {children}
                </ol>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[#1A1A1A]">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[#1A1A1A] underline hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full border-collapse border border-gray-300">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-100">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody>
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-gray-300">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300 last:border-r-0">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300 last:border-r-0">
                  {children}
                </td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}
