export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: Date;
  category: string;
  tags: string[];
  imageUrl: string;
}

export interface AIResponse {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
}