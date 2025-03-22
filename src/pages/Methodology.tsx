import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export default function Methodology() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-28 pb-16">
        <div className="content-container">
          <h1 className="text-3xl font-bold mb-6 animate-fade-in">Methodology</h1>

          <div className="space-y-6 animate-fade-in animation-delay-100">
            {/* Overview */}
            <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground">
                Our methodology for ranking influencers is designed to provide a comprehensive and objective assessment of their impact and relevance. We combine quantitative data with qualitative analysis to ensure a balanced and reliable ranking system.
              </p>
            </div>

            {/* Data Sources */}
            <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
              <h2 className="text-xl font-semibold mb-4">Data Sources</h2>
              <p className="text-muted-foreground mb-2">
                We gather data from a variety of sources to ensure a holistic view of each influencer:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Social Media Platforms: Metrics such as follower counts, engagement rates, and post frequency.</li>
                <li>Public Records: Information on awards, recognitions, and significant achievements.</li>
                <li>Industry Reports: Data from reputable sources on market trends and influencer impact.</li>
                <li>Surveys and Feedback: Direct input from audiences and industry peers.</li>
              </ul>
            </div>

            {/* Ranking Factors */}
            <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
              <h2 className="text-xl font-semibold mb-4">Ranking Factors</h2>
              <p className="text-muted-foreground mb-2">
                Our ranking algorithm considers the following key factors:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Influence (30%): Reach and ability to drive trends and conversations.</li>
                <li>Credibility (25%): Trustworthiness and reputation based on verified accomplishments.</li>
                <li>Relevance (20%): How impactful and timely their contributions are in their field.</li>
                <li>Consistency (15%): Stability and reliability in maintaining quality and output.</li>
                <li>Engagement (10%): Meaningful interactions and community response to their work.</li>
              </ul>
            </div>

            {/* Methodology Updates */}
            <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
              <h2 className="text-xl font-semibold mb-4">Methodology Updates</h2>
              <p className="text-muted-foreground mb-2">
                We regularly review and update our methodology to adapt to changes in the digital landscape and ensure our rankings remain accurate and relevant.
              </p>
              <div className="border rounded-md p-4 mt-4">
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>See Revision History</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen ? "-rotate-180" : ""
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p><strong>November 2023:</strong> Updated weighting of engagement to better reflect community interaction.</p>
                    <p><strong>August 2023:</strong> Added new data sources for more comprehensive analysis.</p>
                    <p><strong>May 2023:</strong> Initial methodology established.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-6 border border-border rounded-xl bg-white dark:bg-gray-900 shadow-subtle">
              <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground">
                Our rankings are intended for informational purposes only and should not be considered definitive endorsements. We strive for accuracy but cannot guarantee complete objectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
