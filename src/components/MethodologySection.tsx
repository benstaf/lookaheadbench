import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

export const MethodologySection = () => {
  return (
    <section className="mt-12 grid md:grid-cols-3 gap-6">
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold">Dual-Period Design</h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div>
            <span className="text-foreground font-medium">P1 (In-Sample):</span> Apr–Sep 2021
            <br />
            <span className="text-xs">Buy & Hold: +25.32%</span>
          </div>
          <div>
            <span className="text-foreground font-medium">P2 (Out-of-Sample):</span> Jul–Dec 2024
            <br />
            <span className="text-xs">Buy & Hold: +24.75%</span>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold">Alpha Decay Metric</h3>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-mono text-foreground">α = R<sub>LLM</sub> − R<sub>B&H</sub></span>
          </p>
          <p>
            <span className="font-mono text-foreground">Decay = α<sub>P2</sub> − α<sub>P1</sub></span>
          </p>
          <p className="text-xs">
            Negative decay indicates lookahead bias in training data.
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold">The Scaling Paradox</h3>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="text-negative font-medium">Standard models:</span> Larger = worse decay (stronger false priors)
          </p>
          <p>
            <span className="text-positive font-medium">PiT models:</span> Larger = better performance (cleaner reasoning)
          </p>
        </div>
      </div>
    </section>
  );
};
