import { createClient } from '@libsql/client';
import { z } from 'zod';

const client = createClient({
  url: import.meta.env.DATABASE_URL ?? 'file:local.db',
});

export const BlogPostSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  publishDate: z.date(),
  category: z.string(),
  tags: z.array(z.string()),
  imageUrl: z.string(),
});

export type DBBlogPost = z.infer<typeof BlogPostSchema>;

export async function setupDatabase() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      publishDate TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT NOT NULL,
      imageUrl TEXT NOT NULL
    )
  `);

  await client.execute(`
    CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
    CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
  `);
}

export async function insertPost(post: DBBlogPost) {
  const { success } = BlogPostSchema.safeParse(post);
  if (!success) throw new Error('Invalid post data');

  const { title, slug, excerpt, content, publishDate, category, tags, imageUrl } = post;
  
  await client.execute({
    sql: `INSERT INTO posts (id, title, slug, excerpt, content, publishDate, category, tags, imageUrl)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      crypto.randomUUID(),
      title,
      slug,
      excerpt,
      content,
      publishDate.toISOString(),
      category,
      JSON.stringify(tags),
      imageUrl
    ]
  });
}

export async function getPostBySlug(slug: string): Promise<DBBlogPost | null> {
  const result = await client.execute({
    sql: 'SELECT * FROM posts WHERE slug = ?',
    args: [slug]
  });

  if (!result.rows[0]) return null;

  const post = result.rows[0];
  return {
    ...post,
    publishDate: new Date(post.publishDate as string),
    tags: JSON.parse(post.tags as string)
  } as DBBlogPost;
}

export async function getAllPosts(limit?: number): Promise<DBBlogPost[]> {
  const sql = limit
    ? 'SELECT * FROM posts ORDER BY publishDate DESC LIMIT ?'
    : 'SELECT * FROM posts ORDER BY publishDate DESC';

  const result = await client.execute({
    sql,
    args: limit ? [limit] : []
  });

  return result.rows.map(post => ({
    ...post,
    publishDate: new Date(post.publishDate as string),
    tags: JSON.parse(post.tags as string)
  })) as DBBlogPost[];
}

export async function getPostsByCategory(category: string): Promise<DBBlogPost[]> {
  const result = await client.execute({
    sql: 'SELECT * FROM posts WHERE category = ? ORDER BY publishDate DESC',
    args: [category]
  });

  return result.rows.map(post => ({
    ...post,
    publishDate: new Date(post.publishDate as string),
    tags: JSON.parse(post.tags as string)
  })) as DBBlogPost[];
}

export async function getPostsByTag(tag: string): Promise<DBBlogPost[]> {
  const result = await client.execute({
    sql: "SELECT * FROM posts WHERE json_array_contains(tags, ?) ORDER BY publishDate DESC",
    args: [tag]
  });

  return result.rows.map(post => ({
    ...post,
    publishDate: new Date(post.publishDate as string),
    tags: JSON.parse(post.tags as string)
  })) as DBBlogPost[];
}