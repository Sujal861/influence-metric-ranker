
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Star } from 'lucide-react';
import { Influencer } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import RatingVisual from './RatingVisual';

interface InfluencerCardProps {
  influencer: Influencer;
  animationDelay?: number;
  isFeatured?: boolean;
}

export default function InfluencerCard({ 
  influencer, 
  animationDelay = 0,
  isFeatured = false
}: InfluencerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const hasPositiveChange = influencer.metrics.influence.change > 0;
  
  const animationDelayClass = animationDelay === 0 
    ? '' 
    : `animation-delay-${animationDelay}`;
  
  return (
    <div className="perspective">
      <Link 
        to={`/profile/${influencer.id}`}
        className={cn(
          "block relative rounded-xl overflow-hidden transition-all duration-500",
          "card-3d preserve-3d",
          "focus:outline-none focus:ring-2 focus:ring-influence-accent focus:ring-offset-2",
          "bg-card border border-white/10 hover:border-white/20",
          isFeatured ? "animate-scale-in" : "animate-fade-in",
          animationDelayClass
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        onBlur={() => setIsClicked(false)}
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"
            aria-hidden="true"
          />
          
          <img
            src={influencer.imageUrl}
            alt={influencer.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            loading="lazy"
          />
          
          <div className="absolute top-3 right-3 z-20">
            <div className={cn(
              "flex items-center gap-1 py-1 px-2 rounded-full text-xs font-medium backdrop-blur-md",
              hasPositiveChange 
                ? "bg-influence-success/70 text-white" 
                : "bg-influence-error/70 text-white"
            )}>
              <TrendingUp size={12} className={hasPositiveChange ? "" : "rotate-180"} />
              <span>{Math.abs(influencer.metrics.influence.change)}%</span>
            </div>
          </div>
          
          <div className="absolute bottom-3 left-3 z-20">
            {influencer.categories.slice(0, 2).map((category, i) => (
              <span 
                key={i}
                className="inline-block mr-1.5 mb-1.5 py-0.5 px-2 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full border border-white/10"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        
        <div className={cn(
          "p-4 relative",
          isClicked ? "bg-gray-900" : ""
        )}>
          <div className="absolute right-4 top-4">
            <div className="flex items-center gap-1 text-influence-accent glow">
              <Star size={16} className="fill-current" />
              <span className="font-semibold">{influencer.metrics.influence.value}</span>
            </div>
          </div>
          
          <h3 className={cn(
            "font-semibold text-lg mb-1 pr-16",
            isClicked ? "text-influence-secondaryAccent" : ""
          )}>{influencer.name}</h3>
          <p className={cn(
            "text-sm mb-4 line-clamp-1",
            isClicked ? "text-blue-300" : "text-muted-foreground"
          )}>{influencer.title}</p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className={cn(
                isClicked ? "text-blue-300" : "text-muted-foreground"
              )}>Credibility</span>
              <RatingVisual value={influencer.metrics.credibility.value} max={100} size="sm" />
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className={cn(
                isClicked ? "text-blue-300" : "text-muted-foreground"
              )}>Relevance</span>
              <RatingVisual value={influencer.metrics.relevance.value} max={100} size="sm" />
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className={cn(
                isClicked ? "text-blue-300" : "text-muted-foreground"
              )}>Consistency</span>
              <RatingVisual value={influencer.metrics.consistency.value} max={100} size="sm" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
