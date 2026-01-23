import metaLogo from '@/assets/meta-logo.png';
import deepseekLogo from '@/assets/deepseek-logo.avif';
import pitinfLogo from '@/assets/pitinf-logo.ico';
import { TrendingUp } from 'lucide-react';

interface ModelLogoProps {
  provider: string;
  className?: string;
}

export const ModelLogo = ({ provider, className = '' }: ModelLogoProps) => {
  const baseClass = `w-5 h-5 object-contain ${className}`;
  
  switch (provider) {
    case 'Meta':
      return <img src={metaLogo} alt="Meta" className={baseClass} />;
    case 'DeepSeek':
      return <img src={deepseekLogo} alt="DeepSeek" className={baseClass} />;
    case 'PiT-Inference':
      return <img src={pitinfLogo} alt="PiT-Inference" className={baseClass} />;
    case 'Baseline':
      return <TrendingUp className={`${baseClass} text-muted-foreground`} />;
    default:
      return <div className={`${baseClass} bg-muted rounded`} />;
  }
};
