import fetch from 'node-fetch';

export const handler = async () => {
  try {
    // Call our API endpoint to generate new content
    const response = await fetch('/.netlify/functions/generate-daily', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CRON_SECRET}`
      }
    });

    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate daily content' })
    };
  }
}