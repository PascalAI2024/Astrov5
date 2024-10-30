import type { GameConfig } from './types';

export class CosmicQuizGame {
  private config: GameConfig;
  private state: {
    currentQuestion: number;
    score: number;
    streak: number;
    bestStreak: number;
    powerups: { [key: string]: number };
    achievements: string[];
    gameMode: string | null;
    timer: number | null;
  };

  constructor(config: GameConfig) {
    this.config = config;
    this.state = {
      currentQuestion: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      powerups: {},
      achievements: [],
      gameMode: null,
      timer: null
    };

    this.loadPlayerData();
    this.setupEventListeners();
  }

  private loadPlayerData() {
    try {
      const savedData = localStorage.getItem('cosmicQuizData');
      if (savedData) {
        const data = JSON.parse(savedData);
        this.state = { ...this.state, ...data };
      }
    } catch (error) {
      console.error('Error loading player data:', error);
    }
  }

  private savePlayerData() {
    try {
      localStorage.setItem('cosmicQuizData', JSON.stringify(this.state));
    } catch (error) {
      console.error('Error saving player data:', error);
    }
  }

  private setupEventListeners() {
    // Welcome Screen
    document.getElementById('start-quiz')?.addEventListener('click', () => this.startGame());
    
    // Difficulty Selection
    document.querySelectorAll('.difficulty-select').forEach(button => {
      button.addEventListener('click', (e) => {
        const difficulty = (e.currentTarget as HTMLElement).dataset.difficulty;
        if (difficulty) {
          this.selectDifficulty(difficulty);
        }
      });
    });

    // Game Controls
    document.getElementById('play-again')?.addEventListener('click', () => this.resetGame());
    document.getElementById('share-score')?.addEventListener('click', () => this.shareScore());

    // Powerup Events
    document.addEventListener('powerup-used', (e: CustomEvent) => {
      this.usePowerup(e.detail.powerupId);
    });

    // Timer Events
    document.addEventListener('quiz-timeout', () => this.handleTimeout());
  }

  private startGame() {
    document.getElementById('welcome-screen')?.classList.add('hidden');
    document.getElementById('game-area')?.classList.remove('hidden');
    this.loadQuestion();
  }

  private selectDifficulty(difficulty: string) {
    this.state.gameMode = difficulty;
    const difficultyDisplay = document.getElementById('difficulty-display');
    if (difficultyDisplay) {
      const selectedMode = this.config.difficulties.find(d => d.id === difficulty);
      difficultyDisplay.textContent = selectedMode?.name || '';
    }
    this.startGame();
  }

  private loadQuestion() {
    // Update progress
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = `${(this.state.currentQuestion / 10) * 100}%`;
    }

    // Update question number
    const questionNumber = document.getElementById('question-number');
    if (questionNumber) {
      questionNumber.textContent = (this.state.currentQuestion + 1).toString();
    }

    // Load and display question content
    // This would typically fetch from a question bank based on difficulty
    this.displayQuestion({
      question: "Sample question text",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correct: 0
    });
  }

  private displayQuestion(questionData: { question: string; answers: string[]; correct: number }) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    if (questionElement && answersElement) {
      questionElement.textContent = questionData.question;
      answersElement.innerHTML = questionData.answers
        .map((answer, index) => `
          <button 
            class="answer-button p-4 bg-gray-800/50 hover:bg-cosmic-600/50 text-white rounded-lg transition-colors backdrop-blur-sm"
            data-index="${index}"
          >
            ${answer}
          </button>
        `)
        .join('');

      // Add click handlers
      answersElement.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', () => {
          this.handleAnswer(parseInt((button as HTMLElement).dataset.index || '0'));
        });
      });
    }
  }

  private handleAnswer(answerIndex: number) {
    // Check if answer is correct and update score/streak
    this.updateScore(100); // Example score update
    this.loadNextQuestion();
  }

  private updateScore(points: number) {
    this.state.score += points;
    this.state.streak++;
    this.state.bestStreak = Math.max(this.state.streak, this.state.bestStreak);

    const scoreElement = document.getElementById('current-score');
    const streakElement = document.getElementById('current-streak');

    if (scoreElement) scoreElement.textContent = this.state.score.toString();
    if (streakElement) streakElement.textContent = this.state.streak.toString();

    this.savePlayerData();
  }

  private loadNextQuestion() {
    this.state.currentQuestion++;
    if (this.state.currentQuestion >= 10) {
      this.endGame();
    } else {
      this.loadQuestion();
    }
  }

  private endGame() {
    document.getElementById('game-area')?.classList.add('hidden');
    document.getElementById('results-screen')?.classList.remove('hidden');
    this.displayResults();
  }

  private displayResults() {
    const finalScore = document.getElementById('final-score');
    const finalStreak = document.getElementById('final-streak');
    const rankBadge = document.getElementById('rank-badge');

    if (finalScore) finalScore.textContent = this.state.score.toString();
    if (finalStreak) finalStreak.textContent = this.state.bestStreak.toString();
    if (rankBadge) {
      const rank = this.calculateRank();
      rankBadge.innerHTML = `
        <div class="flex items-center gap-2 px-4 py-2 bg-cosmic-900/50 rounded-full">
          <span class="text-2xl">${rank.icon}</span>
          <span class="text-white font-medium">${rank.name}</span>
        </div>
      `;
    }
  }

  private calculateRank() {
    return this.config.ranks.reduce((prev, curr) => {
      return this.state.score >= curr.minScore ? curr : prev;
    });
  }

  private resetGame() {
    this.state = {
      currentQuestion: 0,
      score: 0,
      streak: 0,
      bestStreak: this.state.bestStreak,
      powerups: {},
      achievements: this.state.achievements,
      gameMode: null,
      timer: null
    };
    
    document.getElementById('results-screen')?.classList.add('hidden');
    document.getElementById('welcome-screen')?.classList.remove('hidden');
    this.savePlayerData();
  }

  private shareScore() {
    const rank = this.calculateRank();
    const text = `I achieved ${rank.name} rank with ${this.state.score} points in Cosmic Quiz! Can you beat my score?`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Cosmic Quiz Score',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(text);
      alert('Score copied to clipboard!');
    }
  }

  private usePowerup(powerupId: string) {
    switch (powerupId) {
      case 'time-dilation':
        this.addTime(15);
        break;
      case 'quantum-hint':
        this.eliminateOptions();
        break;
      case 'cosmic-shield':
        this.activateShield();
        break;
    }
  }

  private addTime(seconds: number) {
    // Implemented in QuizTimer component
    document.dispatchEvent(new CustomEvent('add-time', { detail: { seconds } }));
  }

  private eliminateOptions() {
    const answers = document.querySelectorAll('.answer-button');
    let eliminated = 0;
    
    answers.forEach(answer => {
      if (eliminated < 2 && !answer.classList.contains('correct')) {
        answer.classList.add('eliminated');
        answer.setAttribute('disabled', 'true');
        eliminated++;
      }
    });
  }

  private activateShield() {
    this.state.powerups['shield'] = 1;
    // Visual feedback
    document.getElementById('game-area')?.classList.add('shield-active');
  }

  private handleTimeout() {
    if (this.state.powerups['shield']) {
      this.state.powerups['shield'] = 0;
      document.getElementById('game-area')?.classList.remove('shield-active');
      this.addTime(5); // Grace period
    } else {
      this.endGame();
    }
  }
}