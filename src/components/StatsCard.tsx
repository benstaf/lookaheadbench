import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  variant?: 'default' | 'positive' | 'negative';
}

export const StatsCard = ({ title, value, subtitle, icon, variant = 'default' }: StatsCardProps) => {
  const variantClasses = {
    default: '',
    positive: 'border-[hsl(var(--positive)/0.3)]',
    negative: 'border-[hsl(var(--negative)/0.3)]',
  };

  const valueClasses = {
    default: 'text-foreground',
    positive: 'text-positive',
    negative: 'text-negative',
  };

  return (
    <div className={`bg-card rounded-xl p-5 border ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold font-mono mt-1 ${valueClasses[variant]}`}>{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="p-2 bg-muted rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
