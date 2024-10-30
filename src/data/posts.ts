import { authors } from './authors';

interface Post {
  title: string;
  slug: string;
  author: typeof authors[keyof typeof authors];
  excerpt: string;
  content: string;
  publishDate: Date;
  category: string;
  tags: string[];
  imageUrl: string;
}

// Helper function to get random author
function getRandomAuthor() {
  const authorKeys = Object.keys(authors);
  return authors[authorKeys[Math.floor(Math.random() * authorKeys.length)]];
}

export const posts: Post[] = [
  // ... existing posts ...

  {
    title: "The Great Space Bake-Off: How Stars Cook Elements",
    slug: "stellar-nucleosynthesis-explained",
    author: authors['neil-degrassi-tyson'],
    excerpt: "Ever wondered how the universe cooks up every element in existence? Let's explore stellar nucleosynthesis through the lens of a cosmic cooking show!",
    content: `# The Great Space Bake-Off: How Stars Cook Elements

Stars are the ultimate cosmic chefs, cooking up every element in the universe through a process called stellar nucleosynthesis. Today, we're going to break down this complex process into something more digestible - pun intended!

## The Cosmic Kitchen

At the heart of every star is a fusion reactor that would make Gordon Ramsay jealous. The main ingredient? Hydrogen - the simplest element in existence. But through the power of extreme heat and pressure, stars transform this basic ingredient into something spectacular.

## The Recipe for Elements

1. Start with hydrogen atoms
2. Add intense pressure (about 250 billion atmospheres)
3. Heat to 15 million degrees Celsius
4. Wait a few million years
5. Voilà! You've got helium!

But that's just the appetizer. As stars age, they begin cooking up heavier elements:
- Carbon (the base of all life)
- Nitrogen (essential for DNA)
- Oxygen (kind of important for breathing)
- And even iron (for those cosmic weightlifters)

## The Supernova Dessert Course

*The most spectacular part comes at the end of a massive star's life. In a supernova explosion, the star creates a cosmic buffet of heavy elements, including:*

- Gold
- Silver
- Uranium
- And many more!

This explosive finale seeds the universe with ingredients for future planets, life, and maybe even your favorite jewelry!

## The Cosmic Menu Today

Thanks to generations of stellar cooking, our planet Earth contains a rich mixture of elements. Every atom in your body was once cooked inside a star - making you, quite literally, a child of the cosmos.

Remember: When you're enjoying a nice meal, you're actually sampling the results of billions of years of stellar cuisine!`,
    publishDate: new Date('2024-03-16'),
    category: "Stellar Physics",
    tags: ["stars", "nucleosynthesis", "elements", "supernovae", "physics", "education"],
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    title: "Quantum Entanglement: The Universe's Social Network",
    slug: "quantum-entanglement-explained",
    author: authors['stephen-hawkmeme'],
    excerpt: "Discover how particles 'friend request' each other across space and time in the quantum realm's own social network.",
    content: `# Quantum Entanglement: The Universe's Social Network

Ever wondered how particles stay in touch across the vastness of space? Welcome to the quantum realm's version of social media - entanglement!

## The Ultimate Long-Distance Relationship

Quantum entanglement is like the universe's version of Instagram - but instead of sharing photos, particles share quantum states. When particles become entangled, they form an unbreakable connection that Einstein called "spooky action at a distance."

## How Does It Work?

Imagine two particles sending friend requests to each other:

1. They meet and interact
2. They become "entangled" (aka BFFs)
3. They separate
4. Whatever happens to one instantly affects the other

*No matter how far apart they are, these particle pals stay connected in ways that defy our classical understanding of physics.*

## The Speed of Quantum Gossip

The most mind-bending part? This quantum communication happens instantly - faster than the speed of light! It's like having zero latency in your cosmic social network.

## Real-World Applications

This isn't just theoretical physics - we're already using quantum entanglement for:

- Quantum computers
- Unbreakable encryption
- Teleportation (of information, not people... yet!)
- Quantum internet

## The Future of Quantum Social Media

As we develop quantum technologies, we're essentially building the universe's first quantum internet. Imagine a future where:

- Information teleports instantly across space
- Encryption is truly unbreakable
- Computing power exceeds our wildest dreams

Remember: The next time you send a text message, somewhere in the quantum realm, particles are maintaining their own social networks in ways we're only beginning to understand!`,
    publishDate: new Date('2024-03-15'),
    category: "Quantum Physics",
    tags: ["quantum physics", "entanglement", "technology", "physics", "future"],
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
  },
  {
    title: "Time Dilation: The Universe's Ultimate TikTok Challenge",
    slug: "time-dilation-explained",
    author: authors['albert-memenstein'],
    excerpt: "Why time isn't a constant beat but more like a remix that changes depending on your cosmic dance moves.",
    content: `# Time Dilation: The Universe's Ultimate TikTok Challenge

Think time is just ticking away at the same rate for everyone? Think again! Einstein's relativity shows us that time is more like a cosmic dance party where everyone moves to their own beat.

## The Speed Dating Scene

The faster you move through space, the slower time moves for you. It's like the universe's version of slow-motion video:

- At 10% the speed of light: Time slows by 0.5%
- At 50% the speed of light: Time slows by 15%
- At 99% the speed of light: Time practically crawls!

## Gravity's Remix

*But speed isn't the only thing that affects time. Gravity also plays DJ with our temporal experience:*

- The stronger the gravity
- The slower time moves
- This is why GPS satellites need to account for time dilation!

## Real-Life Time Travel

We're actually experiencing time dilation right now:

1. Astronauts on the ISS age slightly slower
2. The center of Earth experiences time differently than the surface
3. Your head is actually aging faster than your feet (by a tiny amount)!

## The Twin Paradox

Imagine sending one twin on a space journey at near light speed while the other stays on Earth. When they reunite:

- The space-traveling twin would be younger
- The Earth-bound twin would be older
- No time machine required!

## Practical Applications

Time dilation isn't just a cool physics concept - it has real-world implications:

- GPS accuracy
- Space travel planning
- Future interstellar missions

Remember: The next time you're running late, you can technically blame it on relativistic time dilation... though your boss might not accept that excuse!`,
    publishDate: new Date('2024-03-14'),
    category: "Relativity",
    tags: ["time dilation", "relativity", "physics", "space travel", "Einstein"],
    imageUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413"
  },
  {
    title: "Dark Matter: The Universe's Invisible Instagram Influencer",
    slug: "dark-matter-explained",
    author: authors['carl-spacegan'],
    excerpt: "Meet the mysterious force that's influencing everything in the cosmos but refuses to show its face.",
    content: `# Dark Matter: The Universe's Invisible Instagram Influencer

Just like those mysterious social media accounts with huge influence but no profile picture, dark matter shapes our universe while remaining completely invisible. Let's unmask this cosmic influencer!

## The Ultimate Ghost Story

Dark matter is everywhere, yet we can't see it. It's like having:
- 85% of the universe's mass
- 0% of its visibility
- 100% of astronomers scratching their heads

## How Do We Know It's There?

We see dark matter's influence through:

1. Galaxy rotation curves
2. Gravitational lensing
3. Cosmic microwave background
4. Galaxy cluster dynamics

*It's like seeing footprints in the sand but never catching sight of who made them.*

## The Dark Matter Diet

What makes up dark matter? We have some candidates:

- WIMPs (Weakly Interacting Massive Particles)
- Axions
- Sterile neutrinos
- Other exotic particles

## The Cosmic Web

Dark matter forms a vast cosmic web that:

- Connects galaxies
- Shapes large-scale structure
- Guides cosmic evolution

## Current Investigations

Scientists are hunting for dark matter using:

- Underground detectors
- Space telescopes
- Particle accelerators
- Advanced computer simulations

Remember: The next time you feel invisible, take comfort in knowing that you're in good company - dark matter runs the universe while keeping a low profile!`,
    publishDate: new Date('2024-03-13'),
    category: "Cosmology",
    tags: ["dark matter", "cosmology", "physics", "galaxies", "universe"],
    imageUrl: "https://images.unsplash.com/photo-1462331941994-46f9d9d14822"
  },
  {
    title: "Exoplanets: The Universe's Ultimate House Hunters",
    slug: "exoplanet-house-hunting",
    author: authors['katie-memeck'],
    excerpt: "Join us on an intergalactic house hunting adventure as we explore the most bizarre and beautiful real estate the cosmos has to offer.",
    content: `# Exoplanets: The Universe's Ultimate House Hunters

Looking for your next home? Why limit yourself to Earth when the universe offers such diverse real estate options? Let's explore some of the most interesting properties in our cosmic neighborhood!

## The Hot Properties

HD 189733 b:
- Glass rain showers
- Winds at 5,400 mph
- Perfect for extreme weather enthusiasts!

WASP-12 b:
- Egg-shaped due to tidal forces
- Temperature: 4,000°F
- Ideal for those who love a warm climate

## The Fixer-Uppers

Kepler-16b:
- Orbits two suns
- Amazing sunset views
- Minor gravitational complications

*TOI-1452 b:
- Potential water world
- Ocean views guaranteed
- Bring your own submarine*

## The Luxury Listings

K2-18b:
- Super-Earth with potential habitability
- Possible water clouds
- High-pressure environment (literally!)

## The Up-and-Coming Neighborhoods

TRAPPIST-1 System:
- 7 Earth-sized planets
- Close-knit community
- Great potential for development

## Property Viewing Methods

How we spot these cosmic properties:

1. Transit Method
2. Radial Velocity
3. Direct Imaging
4. Gravitational Microlensing

Remember: Location, location, location! When house hunting in the cosmos, always check the local star's stability and the neighborhood's radiation levels!`,
    publishDate: new Date('2024-03-12'),
    category: "Exoplanets",
    tags: ["exoplanets", "astronomy", "space", "planets", "habitability"],
    imageUrl: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700"
  },
  {
    title: "Black Holes: The Universe's Recycling Program",
    slug: "black-holes-cosmic-recycling",
    author: authors['michio-jokeaku'],
    excerpt: "Discover how black holes serve as the universe's most efficient recycling centers, processing matter and energy in ways that would make environmentalists proud.",
    content: `# Black Holes: The Universe's Recycling Program

Think your local recycling center is efficient? Wait until you learn about nature's ultimate recycling system - black holes! These cosmic compactors process everything from light to entire stars.

## The Ultimate Garbage Disposal

Black holes accept all materials:
- Stars ✓
- Planets ✓
- Light ✓
- Your homework excuses ✓

## How The Process Works

1. Collection (Event Horizon)
2. Compression (Singularity)
3. Storage (Information Preservation)
4. Recycling (Hawking Radiation)

*Nothing goes to waste in a black hole - it just gets extremely well organized!*

## Types of Recycling Centers

- Stellar Mass Black Holes
  - Your neighborhood facility
  - Processes one star at a time

- Supermassive Black Holes
  - Industrial-scale operations
  - Located in galaxy centers
  - Processes millions of stars

## The Recycling Benefits

Black holes contribute to:
- Galaxy formation
- Energy distribution
- Matter transformation
- Cosmic cleanup

## Future Applications

Theoretical uses include:
- Energy generation
- Space travel
- Time manipulation
- Data storage

Remember: Even in the cosmos, nothing truly goes to waste - it just gets transformed into something new!`,
    publishDate: new Date('2024-03-11'),
    category: "Black Holes",
    tags: ["black holes", "physics", "space", "gravity", "astronomy"],
    imageUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413"
  },
  {
    title: "Cosmic Microwave Background: The Universe's Baby Photos",
    slug: "cosmic-microwave-background",
    author: authors['vera-memein'],
    excerpt: "Take a peek at the universe's earliest selfie, captured just 380,000 years after the Big Bang!",
    content: `# Cosmic Microwave Background: The Universe's Baby Photos

Ever wished you could see what the universe looked like as a baby? Well, you can! The Cosmic Microwave Background (CMB) is literally the first light ever released in our universe.

## The Ultimate Throwback Thursday

The CMB shows us:
- The universe at 380,000 years old
- Temperature variations of space
- Seeds of galaxy formation

## How We Got The Picture

*It's like developing a 13.8-billion-year-old photograph:*

1. Space telescopes capture the radiation
2. Computers process the data
3. Scientists analyze the patterns
4. We see the infant universe!

## What The Photos Tell Us

The CMB reveals:
- Universe's age
- Composition
- Early structure
- Future development

## Reading The Baby Pictures

Temperature variations show:
- Hot spots (future galaxies)
- Cold spots (future voids)
- Overall uniformity

## Modern Implications

This ancient light helps us understand:
- Dark matter distribution
- Universe's geometry
- Inflation theory
- Future evolution

Remember: Every time you see CMB data, you're looking at the universe's first Instagram post!`,
    publishDate: new Date('2024-03-10'),
    category: "Cosmology",
    tags: ["CMB", "cosmology", "early universe", "radiation", "space"],
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    title: "Gravitational Waves: The Universe's ASMR",
    slug: "gravitational-waves-explained",
    author: authors['brian-greenfunny'],
    excerpt: "Listen to the soothing ripples in spacetime as cosmic giants dance through the universe.",
    content: `# Gravitational Waves: The Universe's ASMR

If the universe had a podcast, gravitational waves would be its most popular episode. These ripples in spacetime let us hear the cosmos in a whole new way!

## The Cosmic Sound Studio

Gravitational waves are produced by:
- Merging black holes
- Neutron star collisions
- Supernova explosions
- Cosmic string vibrations

## How We Listen In

LIGO and Virgo detectors work like:
1. Giant cosmic earbuds
2. Extremely sensitive microphones
3. Space-time distortion meters

*It's like having a front-row seat at the universe's greatest concert!*

## The Greatest Hits

Famous detections include:
- GW150914 (First detection)
- GW170817 (Neutron star merger)
- GW190521 (Heavyweight champion)

## What We're Learning

These cosmic sounds tell us about:
- Black hole populations
- Neutron star physics
- Universe expansion
- Gravity itself

## Future Playlists

Upcoming projects will detect:
- Smaller events
- More distant sources
- Different frequencies
- New phenomena

Remember: The universe has been dropping beats for billions of years - we're just now learning to listen!`,
    publishDate: new Date('2024-03-09'),
    category: "Gravitational Waves",
    tags: ["gravitational waves", "LIGO", "physics", "space", "black holes"],
    imageUrl: "https://images.unsplash.com/photo-1462331941994-46f9d9d14822"
  },
  {
    title: "Solar Storms: The Sun's Social Media Meltdowns",
    slug: "solar-storms-explained",
    author: authors['phil-memeder'],
    excerpt: "When our local star decides to go viral, Earth better be ready for the notifications!",
    content: `# Solar Storms: The Sun's Social Media Meltdowns

Just like social media influencers, sometimes our Sun has dramatic outbursts that affect everyone in its sphere of influence. Let's explore these cosmic tantrums!

## Types of Solar Drama

1. Solar Flares
   - The Sun's equivalent of a viral tweet
   - Sudden, intense brightness
   - X-ray and UV radiation

2. Coronal Mass Ejections (CMEs)
   - The ultimate online rant
   - Billions of tons of solar material
   - Magnetic field disruptions

## Impact on Earth

Solar storms can affect:
- Power grids
- Satellite communications
- GPS accuracy
- Radio transmissions
- Aurora displays

*Think of it as the Sun's way of sliding into Earth's DMs!*

## Prediction and Protection

How we prepare:
1. Solar monitoring
2. Space weather forecasts
3. Power grid protection
4. Satellite safeguards

## The Good News

Solar storms create:
- Beautiful auroras
- Scientific opportunities
- Space weather awareness
- Technological advances

Remember: Even stars have their moments - we just need to be prepared when our Sun decides to trend!`,
    publishDate: new Date('2024-03-08'),
    category: "Solar Physics",
    tags: ["solar storms", "sun", "space weather", "CME", "aurora"],
    imageUrl: "https://images.unsplash.com/photo-1614642365882-cd39e7f13525"
  },
  {
    title: "Cosmic Inflation: The Universe's Growth Spurt",
    slug: "cosmic-inflation-explained",
    author: authors['alex-memelippenko'],
    excerpt: "How the universe went from quantum sized to cosmic proportions faster than you can say 'Big Bang'!",
    content: `# Cosmic Inflation: The Universe's Growth Spurt

Imagine going through puberty in less than a second - that's basically what the universe did during cosmic inflation! Let's explore this mind-bending growth spurt.

## The Rapid Expansion

During inflation:
- Universe expanded faster than light
- Size increased by factor of 10⁷⁸
- Time frame: 10⁻³⁶ to 10⁻³² seconds
- Temperature dropped dramatically

## Why It Happened

Inflation solved several cosmic mysteries:
1. Horizon problem
2. Flatness problem
3. Magnetic monopole problem

*It's like the universe took some serious cosmic steroids!*

## The Evidence

We see inflation's fingerprints in:
- CMB uniformity
- Galaxy distribution
- Universe's geometry
- Matter distribution

## Ongoing Questions

Scientists still wonder:
- What caused inflation?
- Did it happen everywhere?
- Is it still happening somewhere?
- Are there other universes?

Remember: Sometimes the biggest changes happen in the smallest moments - just ask the universe about its teenage years!`,
    publishDate: new Date('2024-03-07'),
    category: "Cosmology",
    tags: ["inflation", "cosmology", "early universe", "big bang", "physics"],
    imageUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413"
  }
];

// Helper functions
export function getRecentPosts(limit: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    .slice(0, limit);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  return posts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      relevance: [
        ...post.tags.filter(tag => currentPost.tags.includes(tag)),
        post.category === currentPost.category ? post.category : null
      ].filter(Boolean).length
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map(({ post }) => post);
}