
import { BadgeCheck, TrendingUp, Activity, BarChart3, Clock, Users } from 'lucide-react';
import { Influencer } from '@/lib/mockData';
import RatingVisual from './RatingVisual';
import { cn } from '@/lib/utils';

interface ProfileMetricsProps {
  influencer: Influencer;
}

export default function ProfileMetrics({ influencer }: ProfileMetricsProps) {
  const metrics = [
    {
      name: 'Credibility',
      value: influencer.metrics.credibility.value,
      change: influencer.metrics.credibility.change,
      icon: BadgeCheck,
      description: 'Trustworthiness and reputation based on verified accomplishments',
    },
    {
      name: 'Relevance',
      value: influencer.metrics.relevance.value,
      change: influencer.metrics.relevance.change,
      icon: TrendingUp,
      description: 'How impactful and timely their contributions are in their field',
    },
    {
      name: 'Consistency',
      value: influencer.metrics.consistency.value,
      change: influencer.metrics.consistency.change,
      icon: Clock,
      description: 'Stability and reliability in maintaining quality and output',
    },
    {
      name: 'Engagement',
      value: influencer.metrics.engagement.value,
      change: influencer.metrics.engagement.change,
      icon: Users,
      description: 'Meaningful interactions and community response to their work',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in animation-delay-100">
      <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-influence-accent/10 p-2 mr-3">
            <BarChart3 className="h-5 w-5 text-influence-accent" />
          </div>
          <h3 className="text-xl font-semibold">Influence Score</h3>
        </div>
        
        <div className="flex items-baseline mb-6">
          <div className="flex items-center">
            <span className="text-4xl font-bold tabular-nums">{influencer.metrics.influence.value}</span>
            <span className="text-lg ml-1">/100</span>
          </div>
          
          <div className={cn(
            "ml-4 flex items-center text-sm py-0.5 px-2 rounded-full",
            influencer.metrics.influence.change > 0 
              ? "text-influence-success bg-influence-success/10" 
              : "text-influence-error bg-influence-error/10"
          )}>
            <TrendingUp 
              size={14} 
              className={influencer.metrics.influence.change > 0 ? "" : "rotate-180"} 
            />
            <span className="ml-1 font-medium">
              {Math.abs(influencer.metrics.influence.change)}% 
              <span className="hidden sm:inline ml-1">
                this {influencer.metrics.influence.timeFrame}
              </span>
            </span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-8">
          InfluenceIQ's proprietary algorithm combines multiple factors to calculate an overall score
          that represents this person's impact, credibility, and sustained relevance in their field.
        </p>
        
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <metric.icon className="h-4 w-4 mr-2 text-influence-accent" aria-hidden="true" />
                  <span className="font-medium">{metric.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium tabular-nums">{metric.value}</span>
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded",
                    metric.change > 0 
                      ? "text-influence-success bg-influence-success/10" 
                      : "text-influence-error bg-influence-error/10"
                  )}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
              </div>
              <RatingVisual 
                value={metric.value} 
                max={100} 
                size="lg" 
                className="w-full" 
              />
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
