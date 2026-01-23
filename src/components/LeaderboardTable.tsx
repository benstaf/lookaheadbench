import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown, Info } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { leaderboardData, type LeaderboardEntry } from '@/data/leaderboardData';
import { ModelLogo } from './ModelLogo';
import { TypeBadge } from './TypeBadge';
import { AlphaDecayCell } from './AlphaDecayCell';

type SortField = 'name' | 'type' | 'p1Alpha' | 'p2Alpha' | 'alphaDecay';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

const formatPercent = (value: number): string => {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

const formatAlpha = (value: number): string => {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}pp`;
};

export const LeaderboardTable = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'alphaDecay',
    direction: 'desc',
  });
  const [filter, setFilter] = useState<'all' | 'ai' | 'quant'>('all');

  const handleSort = (field: SortField) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  };

  const sortedData = useMemo(() => {
    let filtered = leaderboardData;
    
    if (filter === 'ai') {
      filtered = leaderboardData.filter(e => e.type !== 'quant');
    } else if (filter === 'quant') {
      filtered = leaderboardData.filter(e => e.type === 'quant');
    }

    return [...filtered].sort((a, b) => {
      const multiplier = sortConfig.direction === 'desc' ? -1 : 1;
      
      if (sortConfig.field === 'name') {
        return multiplier * a.name.localeCompare(b.name);
      }
      if (sortConfig.field === 'type') {
        return multiplier * a.type.localeCompare(b.type);
      }
      return multiplier * (a[sortConfig.field] - b[sortConfig.field]);
    });
  }, [sortConfig, filter]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortConfig.field !== field) {
      return <ChevronsUpDown className="w-4 h-4 opacity-40" />;
    }
    return sortConfig.direction === 'desc' 
      ? <ChevronDown className="w-4 h-4" /> 
      : <ChevronUp className="w-4 h-4" />;
  };

  const SortableHeader = ({ field, children, info }: { field: SortField; children: React.ReactNode; info?: string }) => (
    <TableHead 
      className="cursor-pointer select-none hover:bg-muted/50 transition-colors table-header"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {info && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">{info}</p>
            </TooltipContent>
          </Tooltip>
        )}
        <SortIcon field={field} />
      </div>
    </TableHead>
  );

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'ai', 'quant'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            {f === 'all' ? 'All' : f === 'ai' ? 'AI Models' : 'Quant Strategies'}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden glow-ring">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border">
              <TableHead className="w-16 table-header">Rank</TableHead>
              <SortableHeader field="name">Model / Strategy</SortableHeader>
              <SortableHeader field="type">Type</SortableHeader>
              <TableHead className="table-header">
                <div className="flex items-center gap-1">
                  P1 Return
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">Apr–Sep 2021 (In-Sample)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <SortableHeader field="p1Alpha" info="Alpha vs Buy & Hold in P1">P1 Alpha</SortableHeader>
              <TableHead className="table-header">
                <div className="flex items-center gap-1">
                  P2 Return
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">Jul–Dec 2024 (Out-of-Sample)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <SortableHeader field="p2Alpha" info="Alpha vs Buy & Hold in P2">P2 Alpha</SortableHeader>
              <SortableHeader field="alphaDecay" info="P2 Alpha − P1 Alpha. Negative values indicate lookahead bias.">
                Alpha Decay ↓
              </SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((entry, index) => (
              <TableRow 
                key={entry.id} 
                className="border-b border-border/50 table-row-hover transition-colors"
              >
                <TableCell className="font-mono text-muted-foreground">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ModelLogo provider={entry.provider} />
                    <div>
                      <div className="font-medium">{entry.name}</div>
                      {entry.variant && (
                        <div className="text-xs text-muted-foreground">{entry.variant}</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <TypeBadge type={entry.type} />
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {formatPercent(entry.p1Return)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  <span className={entry.p1Alpha >= 0 ? 'text-positive' : 'text-negative'}>
                    {formatAlpha(entry.p1Alpha)}
                  </span>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {formatPercent(entry.p2Return)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  <span className={entry.p2Alpha >= 0 ? 'text-positive' : 'text-negative'}>
                    {formatAlpha(entry.p2Alpha)}
                  </span>
                </TableCell>
                <TableCell>
                  <AlphaDecayCell value={entry.alphaDecay} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
