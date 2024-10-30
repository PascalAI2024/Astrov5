<content>export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishDate?: Date;
  author?: string;
}

export function generateSEOTags({
  title,
  description,
  image,
  type = 'website',
  publishDate,
  author,
}: SEOProps) {
  const seoDescription = description || 'Explore the cosmos through AI-generated astronomy content';
  const seoImage = image || '/images/og-default.jpg';

  return {
    title: `${title} | Cosmic AI`,
    description: seoDescription,
    openGraph: {
      title: `${title} | Cosmic AI`,
      description: seoDescription,
      type,
      image: seoImage,
      ...(publishDate && { publishedTime: publishDate.toISOString() }),
      ...(author && { author }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Cosmic AI`,
      description: seoDescription,
      image: seoImage,
    },
  };
}

export function generateArticleSchema(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.publishDate.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cosmic AI',
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo.svg',
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}</content>