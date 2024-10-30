import { getLocation } from './geo';

interface AstroEvent {
  title: string;
  date: Date;
  type: 'meteor' | 'planet' | 'moon' | 'eclipse' | 'conjunction';
  description: string;
  visibility: {
    time: string;
    direction: string;
    altitude: string;
  };
  intensity?: string;
  peak?: string;
  duration?: string;
}

export async function getAstroEvents(
  lat?: number,
  lng?: number,
  month?: number,
  year?: number
): Promise<AstroEvent[]> {
  // If no coordinates provided, try to get from IP
  if (!lat || !lng) {
    const location = await getLocation();
    lat = location.latitude;
    lng = location.longitude;
  }

  // Use current month/year if not provided
  const date = new Date();
  month = month ?? date.getMonth();
  year = year ?? date.getFullYear();

  // Call astronomy APIs to get events
  // For demo, returning mock data
  return [
    {
      title: "Perseid Meteor Shower Peak",
      date: new Date(2024, 7, 12, 22, 0),
      type: "meteor",
      description: "One of the best meteor showers of the year, producing up to 60 meteors per hour at its peak.",
      visibility: {
        time: "22:00 - 04:00",
        direction: "Northeast",
        altitude: "45°"
      },
      intensity: "60 meteors/hour",
      peak: "August 12-13",
      duration: "6 hours"
    },
    {
      title: "Mars Opposition",
      date: new Date(2024, 7, 15, 21, 0),
      type: "planet",
      description: "Mars will be at its closest approach to Earth, appearing larger and brighter than usual.",
      visibility: {
        time: "21:00 - 05:00",
        direction: "South",
        altitude: "60°"
      }
    },
    {
      title: "Total Lunar Eclipse",
      date: new Date(2024, 9, 28, 19, 30),
      type: "eclipse",
      description: "A total lunar eclipse where the Moon turns a deep red color as it passes through Earth's shadow.",
      visibility: {
        time: "19:30 - 22:45",
        direction: "East",
        altitude: "30°"
      },
      duration: "3 hours 15 minutes"
    }
  ];
}