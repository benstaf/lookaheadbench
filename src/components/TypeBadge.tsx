import type { ModelType } from '@/data/leaderboardData';

interface TypeBadgeProps {
  type: ModelType;
}

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const labels: Record<ModelType, string> = {
    standard: 'Standard',
    pit: 'PiT',
  };

  const badgeClasses: Record<ModelType, string> = {
    standard: 'badge-standard',
    pit: 'badge-pit',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badgeClasses[type]}`}>
      {labels[type]}
    </span>
  );
};
