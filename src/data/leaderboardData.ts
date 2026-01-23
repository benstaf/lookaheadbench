export type ModelType = 'standard' | 'pit';

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  variant?: string;
  type: ModelType;
  provider: string;
  providerUrl: string;
  p1Return: number;
  p1Alpha: number;
  p2Return: number;
  p2Alpha: number;
  alphaDecay: number;
}

export const leaderboardData: LeaderboardEntry[] = [
  // AI Models - Standard
  {
    id: 'llama-8b',
    rank: 1,
    name: 'Llama 3.1 8B',
    type: 'standard',
    provider: 'Meta',
    providerUrl: 'https://www.llama.com',
    p1Return: 39.13,
    p1Alpha: 13.81,
    p2Return: 21.33,
    p2Alpha: -3.42,
    alphaDecay: -17.23,
  },
  {
    id: 'llama-70b',
    rank: 2,
    name: 'Llama 3.1 70B',
    type: 'standard',
    provider: 'Meta',
    providerUrl: 'https://www.llama.com',
    p1Return: 44.59,
    p1Alpha: 19.27,
    p2Return: 28.77,
    p2Alpha: 4.02,
    alphaDecay: -15.25,
  },
  {
    id: 'deepseek',
    rank: 3,
    name: 'DeepSeek 3.2',
    type: 'standard',
    provider: 'DeepSeek',
    providerUrl: 'https://www.deepseek.com/en/',
    p1Return: 46.05,
    p1Alpha: 20.73,
    p2Return: 23.71,
    p2Alpha: -1.04,
    alphaDecay: -21.77,
  },
  // AI Models - PiT
  {
    id: 'pitinf-small',
    rank: 4,
    name: 'Pitinf-Small',
    variant: '<10B params',
    type: 'pit',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
    p1Return: 25.07,
    p1Alpha: -0.25,
    p2Return: 24.81,
    p2Alpha: 0.06,
    alphaDecay: 0.31,
  },
  {
    id: 'pitinf-medium',
    rank: 5,
    name: 'Pitinf-Medium',
    variant: '<100B params',
    type: 'pit',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
    p1Return: 27.76,
    p1Alpha: 2.44,
    p2Return: 28.04,
    p2Alpha: 3.29,
    alphaDecay: 0.85,
  },
  {
    id: 'pitinf-large',
    rank: 6,
    name: 'Pitinf-Large',
    variant: '>500B params',
    type: 'pit',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
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
