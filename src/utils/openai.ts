import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

export async function generateAstronomyPost(topic: string): Promise<AIResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert astronomy writer creating engaging blog content. 
          Format your response in the following structure:
          TITLE: [The title]
          EXCERPT: [A compelling 2-3 sentence summary]
          CONTENT: [The full blog post content in markdown format]
          TAGS: [5-7 relevant tags separated by commas]`
        },
        {
          role: "user",
          content: `Write a detailed, engaging blog post about ${topic}. Include scientific facts, recent discoveries, and make it accessible to a general audience while maintaining accuracy.`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const response = completion.choices[0].message.content || '';
    
    // Parse the response
    const title = response.match(/TITLE: (.*)/)?.[1] || 'Untitled Post';
    const excerpt = response.match(/EXCERPT: (.*)/)?.[1] || 'No excerpt available';
    const content = response.match(/CONTENT: ([\s\S]*?)(?=TAGS:)/)?.[1]?.trim() || 'No content available';
    const tags = response.match(/TAGS: (.*)/)?.[1]?.split(',').map(tag => tag.trim()) || ['astronomy'];

    return {
      title,
      excerpt,
      content,
      tags
    };
  } catch (error) {
    console.error('Error generating post:', error);
    throw new Error('Failed to generate blog post content');
  }
}

export async function generateAstronomyImage(prompt: string): Promise<string> {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Create a stunning, photorealistic 3D render of ${prompt}. The style should be scientific and astronomically accurate, with high detail and dramatic lighting. Make it suitable for an astronomy blog.`,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "vivid"
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate blog post image');
  }
}