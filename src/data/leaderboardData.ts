export type ModelType = 'standard' | 'pit' | 'quant';

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  variant?: string;
  type: ModelType;
  provider: string;
  p1Return: number;
  p1Alpha: number;
  p2Return: number;
  p2Alpha: number;
  alphaDecay: number;
}

export const leaderboardData: LeaderboardEntry[] = [
  // Quant Strategies
  {
    id: 'buy-hold',
    rank: 1,
    name: 'Buy & Hold',
    variant: 'Passive',
    type: 'quant',
    provider: 'Baseline',
    p1Return: 25.32,
    p1Alpha: 0.00,
    p2Return: 24.75,
    p2Alpha: 0.00,
    alphaDecay: 0.00,
  },
  {
    id: 'equal-weight',
    rank: 2,
    name: 'Equal Weight',
    variant: 'Systematic',
    type: 'quant',
    provider: 'Baseline',
    p1Return: 25.68,
    p1Alpha: 0.36,
    p2Return: 22.33,
    p2Alpha: -2.42,
    alphaDecay: -2.78,
  },
  {
    id: 'momentum',
    rank: 3,
    name: 'Momentum (3M)',
    variant: 'Systematic',
    type: 'quant',
    provider: 'Baseline',
    p1Return: 33.28,
    p1Alpha: 7.96,
    p2Return: 30.50,
    p2Alpha: 5.75,
    alphaDecay: -2.21,
  },
  {
    id: 'mean-reversion',
    rank: 4,
    name: 'Mean Reversion',
    variant: 'Systematic',
    type: 'quant',
    provider: 'Baseline',
    p1Return: 20.70,
    p1Alpha: -4.62,
    p2Return: 9.35,
    p2Alpha: -15.40,
    alphaDecay: -10.78,
  },
  {
    id: 'ma-crossover',
    rank: 5,
    name: 'MA Crossover',
    variant: 'Trend',
    type: 'quant',
    provider: 'Baseline',
    p1Return: -2.46,
    p1Alpha: -27.78,
    p2Return: 6.91,
    p2Alpha: -17.84,
    alphaDecay: 9.94,
  },
  {
    id: 'random-noise',
    rank: 6,
    name: 'Random Noise',
    variant: 'Control',
    type: 'quant',
    provider: 'Baseline',
    p1Return: 11.43,
    p1Alpha: -13.89,
    p2Return: 0.56,
    p2Alpha: -24.19,
    alphaDecay: -10.30,
  },
  // AI Models - Standard
  {
    id: 'llama-8b',
    rank: 7,
    name: 'Llama 3.1 8B',
    type: 'standard',
    provider: 'Meta',
    p1Return: 39.13,
    p1Alpha: 13.81,
    p2Return: 21.33,
    p2Alpha: -3.42,
    alphaDecay: -17.23,
  },
  {
    id: 'llama-70b',
    rank: 8,
    name: 'Llama 3.1 70B',
    type: 'standard',
    provider: 'Meta',
    p1Return: 44.59,
    p1Alpha: 19.27,
    p2Return: 28.77,
    p2Alpha: 4.02,
    alphaDecay: -15.25,
  },
  {
    id: 'deepseek',
    rank: 9,
    name: 'DeepSeek 3.2',
    type: 'standard',
    provider: 'DeepSeek',
    p1Return: 46.05,
    p1Alpha: 20.73,
    p2Return: 23.71,
    p2Alpha: -1.04,
    alphaDecay: -21.77,
  },
  // AI Models - PiT
  {
    id: 'pitinf-small',
    rank: 10,
    name: 'Pitinf-Small',
    variant: '<10B params',
    type: 'pit',
    provider: 'PiT-Inference',
    p1Return: 25.07,
    p1Alpha: -0.25,
    p2Return: 24.81,
    p2Alpha: 0.06,
    alphaDecay: 0.31,
  },
  {
    id: 'pitinf-medium',
    rank: 11,
    name: 'Pitinf-Medium',
    variant: '<100B params',
    type: 'pit',
    provider: 'PiT-Inference',
    p1Return: 27.76,
    p1Alpha: 2.44,
    p2Return: 28.04,
    p2Alpha: 3.29,
    alphaDecay: 0.85,
  },
  {
    id: 'pitinf-large',
    rank: 12,
    name: 'Pitinf-Large',
    variant: '>500B params',
    type: 'pit',
    provider: 'PiT-Inference',
    p1Return: 31.34,
    p1Alpha: 6.02,
    p2Return: 32.07,
    p2Alpha: 7.32,
    alphaDecay: 1.30,
  },
];

// Sort by Alpha Decay (best to worst, higher is better)
export const getSortedByAlphaDecay = () => {
  return [...leaderboardData].sort((a, b) => b.alphaDecay - a.alphaDecay);
};

export const getAIModelsOnly = () => {
  return leaderboardData.filter(entry => entry.type !== 'quant');
};

export const getQuantStrategiesOnly = () => {
  return leaderboardData.filter(entry => entry.type === 'quant');
};
