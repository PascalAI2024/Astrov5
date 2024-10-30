// Astronomy Facts Database
export interface CosmicFact {
  id: string;
  fact: string;
  category: 'planet' | 'star' | 'galaxy' | 'space' | 'quantum' | 'history';
  icon: string;
  source?: string;
  year?: number;
}

export const facts: CosmicFact[] = [
  // Solar System Facts
  {
    id: 'fact-001',
    fact: "Light from the Sun takes about 8 minutes to reach Earth",
    category: 'space',
    icon: '☀️',
    source: 'NASA'
  },
  {
    id: 'fact-002',
    fact: "Venus rotates backwards compared to most other planets",
    category: 'planet',
    icon: '🌟',
    source: 'ESA'
  },
  {
    id: 'fact-003',
    fact: "One day on Venus is longer than its year",
    category: 'planet',
    icon: '🌍',
    source: 'NASA'
  },
  {
    id: 'fact-004',
    fact: "Jupiter's Great Red Spot is shrinking",
    category: 'planet',
    icon: '🌌',
    source: 'NASA JPL'
  },
  {
    id: 'fact-005',
    fact: "Saturn's rings are mostly made of ice and rock",
    category: 'planet',
    icon: '🪐',
    source: 'Cassini Mission'
  },
  // Stars and Galaxies
  {
    id: 'fact-006',
    fact: "The Milky Way is on a collision course with Andromeda",
    category: 'galaxy',
    icon: '🌠',
    source: 'Hubble Space Telescope'
  },
  {
    id: 'fact-007',
    fact: "There are more stars in the universe than grains of sand on Earth",
    category: 'star',
    icon: '✨',
    source: 'Carl Sagan'
  },
  {
    id: 'fact-008',
    fact: "Neutron stars can spin up to 600 times per second",
    category: 'star',
    icon: '💫',
    source: 'ESO'
  },
  // Quantum Physics
  {
    id: 'fact-009',
    fact: "Quantum entanglement allows particles to influence each other instantly across any distance",
    category: 'quantum',
    icon: '🔮',
    source: 'Einstein-Podolsky-Rosen'
  },
  {
    id: 'fact-010',
    fact: "According to quantum mechanics, particles can exist in multiple states simultaneously",
    category: 'quantum',
    icon: '🌌',
    source: 'Schrödinger'
  },
  // Space Exploration
  {
    id: 'fact-011',
    fact: "The first human footprints on the Moon will last for millions of years",
    category: 'history',
    icon: '👨‍🚀',
    source: 'NASA Apollo Program',
    year: 1969
  },
  {
    id: 'fact-012',
    fact: "The International Space Station travels at about 17,500 mph",
    category: 'space',
    icon: '🛸',
    source: 'ISS'
  }
  // ... Continue with more facts
];

// Function to get random facts
export function getRandomFacts(count: number = 1): CosmicFact[] {
  const shuffled = [...facts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Function to get facts by category
export function getFactsByCategory(category: CosmicFact['category'], count: number = 1): CosmicFact[] {
  const categoryFacts = facts.filter(fact => fact.category === category);
  const shuffled = [...categoryFacts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Function to get a rotating set of facts
export function getRotatingFacts(count: number = 3): CosmicFact[] {
  const now = new Date();
  const seed = now.getDate() + now.getMonth() * 31; // Changes daily
  const shuffled = [...facts].sort((a, b) => {
    const hashA = hashCode(a.id + seed);
    const hashB = hashCode(b.id + seed);
    return hashA - hashB;
  });
  return shuffled.slice(0, count);
}

// Helper function to generate consistent hash
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
}