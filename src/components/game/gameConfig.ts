export const gameConfig = {
  ranks: [
    { name: 'Cosmic Novice', minScore: 0, icon: '🌱' },
    { name: 'Star Seeker', minScore: 1000, icon: '⭐' },
    { name: 'Nebula Navigator', minScore: 2500, icon: '🌌' },
    { name: 'Quantum Pioneer', minScore: 5000, icon: '⚛️' },
    { name: 'Galaxy Guardian', minScore: 10000, icon: '🌠' },
    { name: 'Cosmic Oracle', minScore: 20000, icon: '🔮' },
    { name: 'Universal Sage', minScore: 50000, icon: '🌟' }
  ],

  powerups: [
    {
      id: 'time-dilation',
      name: 'Time Dilation',
      description: 'Adds 15 seconds to the timer',
      icon: '⌛',
      cost: 100
    },
    {
      id: 'quantum-hint',
      name: 'Quantum Hint',
      description: 'Eliminates two wrong answers',
      icon: '💫',
      cost: 200
    },
    {
      id: 'cosmic-shield',
      name: 'Cosmic Shield',
      description: 'Protects against one wrong answer',
      icon: '🛡️',
      cost: 300
    }
  ],

  achievements: [
    {
      id: 'speed-demon',
      name: 'Speed Demon',
      description: 'Answer 5 questions in under 30 seconds',
      icon: '⚡'
    },
    {
      id: 'perfect-score',
      name: 'Perfect Oracle',
      description: 'Get a perfect score in expert mode',
      icon: '🎯'
    },
    {
      id: 'streak-master',
      name: 'Streak Master',
      description: 'Maintain a 10-question streak',
      icon: '🔥'
    }
  ],

  difficulties: [
    {
      id: 'kids',
      name: 'Young Explorer',
      icon: '🚀',
      description: 'Perfect for curious minds just starting their cosmic journey',
      color: 'from-blue-500 to-green-500',
      rewards: '100-200 points per question'
    },
    {
      id: 'beginner',
      name: 'Space Cadet',
      icon: '🌎',
      description: 'For those with basic astronomy knowledge',
      color: 'from-green-500 to-teal-500',
      rewards: '200-400 points per question'
    },
    {
      id: 'advanced',
      name: 'Cosmic Scholar',
      icon: '🔭',
      description: 'For serious astronomy enthusiasts',
      color: 'from-purple-500 to-cosmic-500',
      rewards: '400-800 points per question'
    },
    {
      id: 'expert',
      name: 'PhD Astronomer',
      icon: '🌌',
      description: 'Expert-level questions for the true masters',
      color: 'from-cosmic-600 to-purple-800',
      rewards: '800-1600 points per question'
    }
  ]
} as const;