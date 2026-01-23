interface AlphaDecayCellProps {
  value: number;
  showBar?: boolean;
}

export const AlphaDecayCell = ({ value, showBar = true }: AlphaDecayCellProps) => {
  const isPositive = value > 0;
  const isNeutral = value === 0;
  
  const colorClass = isNeutral 
    ? 'text-neutral' 
    : isPositive 
      ? 'text-positive' 
      : 'text-negative';

  const bgClass = isNeutral
    ? ''
    : isPositive
      ? 'bg-positive'
      : 'bg-negative';

  const sign = isPositive ? '+' : '';
  const maxWidth = Math.min(Math.abs(value) * 3, 100);

  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono font-semibold ${colorClass}`}>
        {sign}{value.toFixed(2)}pp
      </span>
      {showBar && !isNeutral && (
        <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all ${isPositive ? 'bg-[hsl(var(--positive))]' : 'bg-[hsl(var(--negative))]'}`}
            style={{ width: `${maxWidth}%` }}
          />
        </div>
      )}
    </div>
  );
};
