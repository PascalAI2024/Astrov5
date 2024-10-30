export interface Rank {
  name: string;
  minScore: number;
  icon: string;
}

export interface Powerup {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Difficulty {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  rewards: string;
}

export interface GameConfig {
  ranks: Rank[];
  powerups: Powerup[];
  achievements: Achievement[];
  difficulties: Difficulty[];
}