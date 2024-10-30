import type { BlogPost } from '../types/blog';
import { generateAstronomyPost, generateAstronomyImage } from '../utils/openai';
import { insertPost, getAllPosts, getPostBySlug, getPostsByCategory, getPostsByTag } from '../lib/db';

export async function createBlogPost(topic: string): Promise<BlogPost> {
  try {
    // Generate text content
    const aiResponse = await generateAstronomyPost(topic);
    
    // Generate AI image
    const imagePrompt = `astronomical visualization of ${topic}, scientific and realistic`;
    const imageUrl = await generateAstronomyImage(imagePrompt);
    
    // Create URL-friendly slug from title
    const slug = aiResponse.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Create blog post
    const post: BlogPost = {
      title: aiResponse.title,
      slug,
      excerpt: aiResponse.excerpt,
      content: aiResponse.content,
      publishDate: new Date(),
      category: 'Astronomy',
      tags: aiResponse.tags,
      imageUrl
    };

    // Save to database
    await insertPost(post);

    return post;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw new Error('Failed to create blog post. Please try again later.');
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getAllPosts();
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return getPostBySlug(slug);
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  return getAllPosts(limit);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return getPostsByCategory(category);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  return getPostsByTag(tag);
}