import type { APIRoute } from 'astro';
import { generateDailyContent } from '../../utils/content-generator';

export const post: APIRoute = async ({ request }) => {
  // Verify secret key to prevent unauthorized access
  const authHeader = request.headers.get('Authorization');
  if (authHeader !== `Bearer ${import.meta.env.CRON_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const success = await generateDailyContent();
    return new Response(JSON.stringify({ success }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}