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
import { leaderboardData } from '@/data/leaderboardData';
import { ModelLogo } from './ModelLogo';
import { AlphaDecayCell } from './AlphaDecayCell';

type SortField = 'name' | 'provider' | 'alphaDecay' | 'license';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

export const LeaderboardTable = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'alphaDecay',
    direction: 'desc',
  });

  const handleSort = (field: SortField) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  };

  const sortedData = useMemo(() => {
    return [...leaderboardData].sort((a, b) => {
      const multiplier = sortConfig.direction === 'desc' ? -1 : 1;
      
      if (sortConfig.field === 'name') {
        return multiplier * a.name.localeCompare(b.name);
      }
      if (sortConfig.field === 'provider') {
        return multiplier * a.provider.localeCompare(b.provider);
      }
      if (sortConfig.field === 'license') {
        return multiplier * a.license.localeCompare(b.license);
      }
      return multiplier * (a.alphaDecay - b.alphaDecay);
    });
  }, [sortConfig]);

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
      <div className="rounded-lg border border-border overflow-hidden glow-ring">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border">
              <TableHead className="w-16 table-header">Rank</TableHead>
              <SortableHeader field="name">Model</SortableHeader>
              <SortableHeader field="provider">Organization</SortableHeader>
              <SortableHeader field="alphaDecay" info="P2 Alpha − P1 Alpha. Negative values indicate lookahead bias.">
                Alpha Decay ↓
              </SortableHeader>
              <SortableHeader field="license">License</SortableHeader>
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
                  <a 
                    href={entry.providerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {entry.provider}
                  </a>
                </TableCell>
                <TableCell>
                  <AlphaDecayCell value={entry.alphaDecay} />
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {entry.license}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
