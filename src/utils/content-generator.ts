import { generateAstronomyPost, generateAstronomyImage } from './openai';
import { createBlogPost } from '../services/blog';
import { getRandomAuthor } from '../data/authors';

// Topics for AI to write about, focusing on current events and timeless topics
const topics = [
  "Latest discoveries from the James Webb Space Telescope",
  "Recent developments in dark matter research",
  "Updates on SpaceX Starship program",
  "New exoplanet discoveries",
  "Black hole research breakthroughs",
  "Advances in quantum astronomy",
  "Solar system exploration updates",
  "Astronomical events happening this month",
  "Latest theories about dark energy",
  "Updates from NASA's current missions"
];

// Function to get astronomy news from various APIs
async function getAstronomyNews() {
  try {
    // NASA APOD API (you'll need to add API key to .env)
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.NASA_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching astronomy news:', error);
    return null;
  }
}

// Function to generate daily content
export async function generateDailyContent() {
  try {
    // Get current astronomy news
    const news = await getAstronomyNews();
    
    // Select a random topic, prioritizing current events if available
    const topic = news 
      ? `Recent astronomical discovery: ${news.title}`
      : topics[Math.floor(Math.random() * topics.length)];

    // Generate the blog post
    const author = getRandomAuthor();
    const post = await generateAstronomyPost(topic);
    const imageUrl = await generateAstronomyImage(topic);

    // Create the blog post with current date
    await createBlogPost({
      ...post,
      author,
      imageUrl,
      publishDate: new Date(),
      category: 'Latest Discoveries'
    });

    return true;
  } catch (error) {
    console.error('Error generating daily content:', error);
    return false;
  }
}

// Function to check if we need to generate new content
export async function checkAndGenerateContent() {
  const today = new Date().toISOString().split('T')[0];
  const lastGenerated = localStorage.getItem('lastContentGeneration');

  if (lastGenerated !== today) {
    const success = await generateDailyContent();
    if (success) {
      localStorage.setItem('lastContentGeneration', today);
    }
  }
}