import { TrendingDown, TrendingUp, Zap, Scale } from 'lucide-react';
import { Header } from '@/components/Header';
import { LeaderboardTable } from '@/components/LeaderboardTable';
import { StatsCard } from '@/components/StatsCard';
import { MethodologySection } from '@/components/MethodologySection';
import { getSortedByAlphaDecay } from '@/data/leaderboardData';

const Index = () => {
  const sortedData = getSortedByAlphaDecay();
  const best = sortedData[0];
  const worst = sortedData[sortedData.length - 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Look-Ahead-Bench</span> Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A standardized benchmark measuring <strong className="text-foreground">lookahead bias</strong> in 
            Point-in-Time (PiT) LLMs for finance. Unlike Q&A-based tests, this benchmark evaluates 
            real trading performance using the{' '}
            <a href="https://github.com/virattt/ai-hedge-fund" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              AI Hedge Fund framework
            </a>.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatsCard 
            title="Best Alpha Decay"
            value={`+${best.alphaDecay.toFixed(2)}pp`}
            subtitle={best.name}
            icon={<TrendingUp className="w-5 h-5 text-positive" />}
            variant="positive"
          />
          <StatsCard 
            title="Worst Alpha Decay"
            value={`${worst.alphaDecay.toFixed(2)}pp`}
            subtitle={worst.name}
            icon={<TrendingDown className="w-5 h-5 text-negative" />}
            variant="negative"
          />
          <StatsCard 
            title="LLMs Tested"
            value={sortedData.length.toString()}
            subtitle="Standard + PiT"
            icon={<Zap className="w-5 h-5 text-primary" />}
          />
          <StatsCard 
            title="Trading Universe"
            value="5 Stocks"
            subtitle="AAPL, MSFT, GOOGL, NVDA, TSLA"
            icon={<Scale className="w-5 h-5 text-primary" />}
          />
        </div>

        {/* Leaderboard Table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Rankings</h2>
            <p className="text-sm text-muted-foreground">
              Sorted by Alpha Decay (higher is better)
            </p>
          </div>
          <LeaderboardTable />
        </section>

        {/* Methodology */}
        <MethodologySection />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © 2026 Look-Ahead-Bench • Based on research by Mostapha Benhenda
            </p>
            <p>
              Data from ICML 2026 submission • Trading universe: Large-cap tech stocks
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
