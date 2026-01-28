import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface Article {
  metadata: ArticleMetadata;
  content: string;
}

// Load all markdown files from the content directory
const markdownFiles = import.meta.glob('/src/content/articles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  for (const [path, content] of Object.entries(markdownFiles)) {
    if (typeof content === 'string') {
      const { data, content: markdownContent } = matter(content);
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      articles.push({
        metadata: {
          title: data.title || '',
          description: data.description || '',
          publishDate: data.publishDate || '',
          author: data.author || 'Julian Ashford',
          tags: data.tags || [],
          slug
        },
        content: markdownContent
      });
    }
  }

  // Sort by publish date, newest first
  return articles.sort((a, b) => 
    new Date(b.metadata.publishDate).getTime() - new Date(a.metadata.publishDate).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find(article => article.metadata.slug === slug) || null;
}
