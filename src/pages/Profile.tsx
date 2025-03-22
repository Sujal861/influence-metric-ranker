
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getInfluencerById } from '@/lib/mockData';
import { ArrowLeft, ExternalLink, Star, Award, TrendingUp, BadgeCheck, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProfileMetrics from '@/components/ProfileMetrics';
import { cn } from '@/lib/utils';

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const [influencer, setInfluencer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Simulate API fetch
    setIsLoading(true);
    setTimeout(() => {
      const data = getInfluencerById(id);
      if (data) {
        setInfluencer(data);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleBack = () => {
    navigate(-1);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-28 flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse space-y-6 w-full max-w-6xl px-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-md w-1/3 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-1/2 mx-auto"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!influencer) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-28 px-4 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-2xl font-bold mb-4">Influencer Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            We couldn't find the influencer you're looking for.
          </p>
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Floating back button and score */}
      <div
        className={cn(
          "fixed top-[73px] left-0 right-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-2",
          "transform transition-all duration-300",
          scrolled ? "opacity-100 translate-y-0 border-b border-border" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="content-container flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center text-sm font-medium hover:text-influence-accent transition-colors"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back
          </button>
          
          <div className="flex items-center">
            <span className="font-semibold">{influencer.name}</span>
            <div className="ml-4 flex items-center bg-influence-accent/10 text-influence-accent rounded-full px-3 py-1">
              <Star size={16} className="mr-1 fill-current" />
              <span className="font-bold">{influencer.metrics.influence.value}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="pt-28 pb-16">
        <div className="content-container">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
          >
            <ArrowLeft size={18} className="mr-1" />
            <span>Back to results</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile header */}
              <div className="relative">
                <div className="absolute right-4 top-4 z-10">
                  <div className="flex items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-border shadow-sm rounded-full px-3 py-1.5">
                    <Star size={18} className="mr-1 text-influence-accent fill-current" />
                    <span className="font-bold text-lg">{influencer.metrics.influence.value}</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 border border-border rounded-xl overflow-hidden shadow-subtle animate-scale-in">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md flex-shrink-0">
                        <img 
                          src={influencer.imageUrl} 
                          alt={influencer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h1 className="text-3xl font-bold mb-1">{influencer.name}</h1>
                        <p className="text-muted-foreground mb-3">{influencer.title}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {influencer.categories.map((category, i) => (
                            <span 
                              key={i}
                              className="py-1 px-3 bg-secondary text-secondary-foreground text-sm rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h2 className="text-xl font-semibold mb-3">Biography</h2>
                      <p className="text-muted-foreground">
                        {influencer.biography}
                      </p>
                    </div>
                    
                    <div className="mt-8">
                      <h2 className="text-xl font-semibold mb-4">Social Presence</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {influencer.socialProfiles.map((profile, i) => (
                          <a 
                            key={i}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-influence-accent transition-colors"
                          >
                            <div className="flex items-center">
                              <span className="font-medium">{profile.platform}</span>
                              <span className="text-muted-foreground ml-2 text-sm">
                                {profile.handle}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-muted-foreground mr-2">
                                {profile.followers.toLocaleString()} followers
                              </span>
                              <ExternalLink size={14} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className="bg-white dark:bg-gray-900 border border-border rounded-xl overflow-hidden shadow-subtle p-6 sm:p-8 animate-fade-in animation-delay-200">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-influence-accent/10 p-2 mr-3">
                    <Award className="h-5 w-5 text-influence-accent" />
                  </div>
                  <h2 className="text-xl font-semibold">Key Achievements</h2>
                </div>
                
                <div className="space-y-6">
                  {influencer.achievements.map((achievement, i) => (
                    <div 
                      key={i}
                      className="relative pl-6 border-l-2 border-influence-accent/30"
                    >
                      <div className="absolute left-[-5px] top-0">
                        <div className="w-2 h-2 rounded-full bg-influence-accent" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-8">
              <ProfileMetrics influencer={influencer} />
              
              <div className="bg-white dark:bg-gray-900 border border-border rounded-xl overflow-hidden shadow-subtle p-6 animate-fade-in animation-delay-300">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-influence-accent/10 p-2 mr-3">
                    <TrendingUp className="h-5 w-5 text-influence-accent" />
                  </div>
                  <h2 className="text-xl font-semibold">Similar Influencers</h2>
                </div>
                
                <div className="space-y-4">
                  {influencer.categories.slice(0, 2).map((category, i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="text-sm font-medium">Top in {category}</h3>
                      <Link
                        to={`/search?q=${category}`}
                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-influence-accent hover:bg-secondary/50 transition-all group"
                      >
                        <span>See all in {category}</span>
                        <ArrowRight size={16} className="text-influence-accent transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <Link
                      to="/search"
                      className="flex items-center justify-center w-full py-2.5 px-4 border border-influence-accent text-influence-accent rounded-lg hover:bg-influence-accent hover:text-white transition-colors"
                    >
                      <BadgeCheck size={16} className="mr-2" />
                      Explore All Rankings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
