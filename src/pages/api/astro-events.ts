import type { APIRoute } from 'astro';
import { getAstroEvents } from '../../utils/astro-events';

export const post: APIRoute = async ({ request }) => {
  try {
    const { lat, lng, month, year } = await request.json();
    const events = await getAstroEvents(lat, lng, month, year);
    
    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch astronomical events' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};