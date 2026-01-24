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
             LLMs for finance, based on trading performance.
          </p>
        </div>


        {/* Leaderboard Table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Rankings</h2>
            <p className="text-sm text-muted-foreground">
              Sorted by Alpha Decay
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
              © 2026 Look-Ahead-Bench 
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
