
import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, BadgeCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTopInfluencers, getTrendingInfluencers } from '@/lib/mockData';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import InfluencerCard from '@/components/InfluencerCard';
import ThreeDSphere from '@/components/ThreeDSphere';
import { cn } from '@/lib/utils';

export default function Index() {
  const [topInfluencers, setTopInfluencers] = useState([]);
  const [trendingInfluencers, setTrendingInfluencers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTopInfluencers(getTopInfluencers(9));
    setTrendingInfluencers(getTrendingInfluencers(9));
    
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Credibility Score",
      description: "Beyond popularity, we measure verified achievements and peer recognition.",
      icon: BadgeCheck,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Dynamic Ranking",
      description: "Our algorithm continuously evaluates influence, ensuring the rankings stay current.",
      icon: BarChart3,
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Sustained Impact",
      description: "We track long-term relevance over momentary viral success.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-6 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-[-1]" aria-hidden="true">
          <ThreeDSphere />
        </div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className={cn(
            "space-y-6 transition-all duration-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="text-influence-accent text-sm font-medium">
                A New Standard of Influence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gradient">
              Discover Who <span className="text-influence-accent glow">Really</span> Makes an Impact
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              InfluenceIQ goes beyond follower counts and viral moments to measure true lasting impact, 
              credibility, and relevance across industries.
            </p>
            
            <div className="pt-6 max-w-xl mx-auto">
              <SearchBar 
                placeholder="Search influencers, creators, entrepreneurs..."
                fullWidth
              />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 pt-2 text-sm text-white/60">
              <span>Try searching:</span>
              {["Technology", "Music", "Sports", "Film", "Business", "Activism"].map((term) => (
                <Link 
                  key={term}
                  to={`/search?q=${term}`}
                  className="px-3 py-1 rounded-full border border-white/10 hover:border-influence-accent hover:text-influence-accent transition-colors duration-200"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Beyond Likes and Views
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              Our methodology prioritizes what truly matters: sustained relevance, credibility, and genuine impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 animate-fade-in opacity-0 card-3d"
                style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className={cn(
                  "absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-gradient-to-br", feature.color
                )}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Influencers Section */}
      <section className="py-16 bg-gray-950">
        <div className="content-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                Highest-Rated Influencers
              </h2>
              <p className="text-white/70 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                See who ranks at the top based on our comprehensive scoring system
              </p>
            </div>
            <Link 
              to="/search" 
              className="inline-flex items-center text-influence-accent font-medium group mt-4 md:mt-0 animate-fade-in opacity-0" 
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              View all rankings
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {topInfluencers.map((influencer, index) => (
              <InfluencerCard 
                key={influencer.id}
                influencer={influencer}
                animationDelay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Influencers Section */}
      <section className="py-16 bg-black">
        <div className="content-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                Trending This Month
              </h2>
              <p className="text-white/70 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                Influencers showing significant growth in impact and relevance
              </p>
            </div>
            <Link 
              to="/search?sort=trending" 
              className="inline-flex items-center text-influence-accent font-medium group mt-4 md:mt-0 animate-fade-in opacity-0" 
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              See more trending
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trendingInfluencers.map((influencer, index) => (
              <InfluencerCard 
                key={influencer.id}
                influencer={influencer}
                animationDelay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-blue-900/10" aria-hidden="true">
          <ThreeDSphere className="opacity-50" />
        </div>
        
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Discover the New Standard of Influence Measurement
          </h2>
          <p className="text-lg text-white/70 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Explore our methodology and learn how we're redefining what it means to be truly influential in today's world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <Link 
              to="/search" 
              className="px-6 py-3 bg-influence-accent text-white rounded-lg font-medium hover:bg-influence-accent/90 transition-colors shadow-sm hover:shadow-md"
            >
              Explore Rankings
            </Link>
            <Link 
              to="/methodology" 
              className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-lg font-medium border border-white/10 hover:border-white/20 transition-colors"
            >
              Learn Our Methodology
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-semibold flex items-center">
                <span className="text-influence-accent">Influence</span>
                <span className="font-bold">IQ</span>
              </div>
              <p className="text-white/50 text-sm mt-1">
                © {new Date().getFullYear()} • The new standard for measuring influence
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/methodology" className="text-white/50 hover:text-white transition-colors">
                Methodology
              </Link>
              <Link to="/search" className="text-white/50 hover:text-white transition-colors">
                Explore
              </Link>
              <Link to="#" className="text-white/50 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
