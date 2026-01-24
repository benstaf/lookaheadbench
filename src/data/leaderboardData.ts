export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  variant?: string;
  provider: string;
  providerUrl: string;
  alphaDecay: number;
  license: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  {
    id: 'llama-8b',
    rank: 1,
    name: 'Llama 3.1 8B',
    provider: 'Meta',
    providerUrl: 'https://www.llama.com',
    alphaDecay: -17.23,
    license: 'Llama 3.1 Community License',
  },
  {
    id: 'llama-70b',
    rank: 2,
    name: 'Llama 3.1 70B',
    provider: 'Meta',
    providerUrl: 'https://www.llama.com',
    alphaDecay: -15.25,
    license: 'Llama 3.1 Community License',
  },
  {
    id: 'deepseek',
    rank: 3,
    name: 'DeepSeek 3.2',
    provider: 'DeepSeek',
    providerUrl: 'https://www.deepseek.com/en/',
    alphaDecay: -21.77,
    license: 'MIT',
  },
  {
    id: 'pitinf-small',
    rank: 4,
    name: 'Pitinf-Small',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
    alphaDecay: 0.31,
    license: 'Proprietary',
  },
  {
    id: 'pitinf-medium',
    rank: 5,
    name: 'Pitinf-Medium',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
    alphaDecay: 0.85,
    license: 'Proprietary',
  },
  {
    id: 'pitinf-large',
    rank: 6,
    name: 'Pitinf-Large',
    provider: 'PiT-Inference',
    providerUrl: 'https://www.pitinference.com',
    alphaDecay: 1.30,
    license: 'Proprietary',
  },
];

// Sort by Alpha Decay (best to worst, higher is better)
export const getSortedByAlphaDecay = () => {
  return [...leaderboardData].sort((a, b) => b.alphaDecay - a.alphaDecay);
};
