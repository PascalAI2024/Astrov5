interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

export async function getLocation(): Promise<Location> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      latitude: data.latitude,
      longitude: data.longitude,
      city: data.city,
      country: data.country_name
    };
  } catch (error) {
    console.error('Error getting location from IP:', error);
    // Default to Greenwich Observatory coordinates
    return {
      latitude: 51.4769,
      longitude: -0.0005
    };
  }
}