
import { cn } from '@/lib/utils';

interface RatingVisualProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showBackground?: boolean;
  className?: string;
}

export default function RatingVisual({
  value,
  max = 100,
  size = 'md',
  showText = false,
  showBackground = true,
  className,
}: RatingVisualProps) {
  const percentage = (value / max) * 100;
  
  // Color based on value - updated to yellow scheme
  const getColorClass = () => {
    if (percentage >= 90) return 'bg-[#FFD700]'; // Gold
    if (percentage >= 70) return 'bg-[#FFC107]'; // Amber
    if (percentage >= 50) return 'bg-[#FFEB3B]'; // Yellow
    return 'bg-[#FFF59D]'; // Light yellow
  };
  
  // Size based on the prop
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'h-1 w-16';
      case 'lg': return 'h-3 w-full max-w-md';
      default: return 'h-2 w-24';
    }
  };
  
  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        'relative rounded-full overflow-hidden',
        getSizeClasses(),
        showBackground ? 'bg-gray-800' : '' // Darker background for contrast
      )}>
        <div
          className={cn(
            'absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out',
            getColorClass()
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      
      {showText && (
        <span className="ml-2 text-sm font-medium tabular-nums text-[#FFD700]">
          {value}
        </span>
      )}
    </div>
  );
}
