
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchInfluencers, getCategories, getTopInfluencers, Influencer } from '@/lib/mockData';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import InfluencerCard from '@/components/InfluencerCard';
import { cn } from '@/lib/utils';
import { SlidersHorizontal, Check, ChevronDown } from 'lucide-react';

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialSort = queryParams.get('sort') || 'score';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Influencer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState(initialSort);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get all categories for filtering
  useEffect(() => {
    setCategories(getCategories());
  }, []);
  
  // Handle search based on query params
  useEffect(() => {
    setIsLoading(true);
    
    const searchQuery = queryParams.get('q') || '';
    const sortParam = queryParams.get('sort') || 'score';
    
    setQuery(searchQuery);
    setSortBy(sortParam);
    
    // Simulate API request delay
    const timer = setTimeout(() => {
      let results = searchQuery
        ? searchInfluencers(searchQuery)
        : getTopInfluencers(50);
      
      // Apply sorting
      results = sortResults(results, sortParam);
      
      setResults(results);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.search]);
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    
    const params = new URLSearchParams();
    if (newQuery) params.set('q', newQuery);
    if (sortBy !== 'score') params.set('sort', sortBy);
    
    navigate({
      pathname: '/search',
      search: params.toString()
    });
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    
    const params = new URLSearchParams(location.search);
    if (value !== 'score') {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }
    
    navigate({
      pathname: '/search',
      search: params.toString()
    });
  };
  
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const filteredResults = results.filter(influencer => {
    if (selectedCategories.length === 0) return true;
    return influencer.categories.some(category => selectedCategories.includes(category));
  });
  
  const sortResults = (results: Influencer[], sortType: string) => {
    const sorted = [...results];
    
    switch (sortType) {
      case 'trending':
        return sorted.sort((a, b) => b.metrics.influence.change - a.metrics.influence.change);
      case 'credibility':
        return sorted.sort((a, b) => b.metrics.credibility.value - a.metrics.credibility.value);
      case 'relevance':
        return sorted.sort((a, b) => b.metrics.relevance.value - a.metrics.relevance.value);
      case 'engagement':
        return sorted.sort((a, b) => b.metrics.engagement.value - a.metrics.engagement.value);
      case 'score':
      default:
        return sorted.sort((a, b) => b.metrics.influence.value - a.metrics.influence.value);
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="w-full md:max-w-xl">
              <h1 className="text-3xl font-bold mb-2 animate-fade-in">Influence Rankings</h1>
              <p className="text-muted-foreground mb-4 animate-fade-in animation-delay-100">
                {query 
                  ? `Results for "${query}"`
                  : 'Explore our comprehensive rankings of influential individuals'
                }
              </p>
              <SearchBar 
                initialQuery={query} 
                onSearch={handleSearch} 
                fullWidth
                className="animate-fade-in animation-delay-200"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto animate-fade-in animation-delay-300">
              <div className="relative">
                <button
                  className="md:hidden flex items-center justify-center h-10 px-4 border border-border rounded-lg focus:outline-none"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <SlidersHorizontal size={18} className="mr-2" />
                  Filters
                  <ChevronDown size={16} className={cn(
                    "ml-2 transition-transform",
                    isFilterOpen ? "rotate-180" : ""
                  )} />
                </button>
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="h-10 px-4 pr-10 border border-border rounded-lg bg-background appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-influence-accent focus:ring-offset-2 w-full"
                >
                  <option value="score">Highest Score</option>
                  <option value="trending">Trending</option>
                  <option value="credibility">Credibility</option>
                  <option value="relevance">Relevance</option>
                  <option value="engagement">Engagement</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className={cn(
              "space-y-6 lg:block animate-fade-in animation-delay-400",
              isFilterOpen ? "block" : "hidden"
            )}>
              <div className="p-5 border border-border bg-white dark:bg-gray-900 rounded-xl shadow-subtle">
                <h2 className="font-semibold mb-4">Categories</h2>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center cursor-pointer group"
                    >
                      <div className={cn(
                        "w-5 h-5 rounded flex items-center justify-center mr-3 border",
                        selectedCategories.includes(category)
                          ? "bg-influence-accent border-influence-accent text-white"
                          : "border-muted-foreground/30 group-hover:border-influence-accent/50"
                      )}>
                        {selectedCategories.includes(category) && (
                          <Check size={12} />
                        )}
                      </div>
                      <span className="text-sm select-none">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="animate-pulse rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <div className="aspect-[3/2] bg-gray-200 dark:bg-gray-700"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                        <div className="space-y-2 pt-2">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.map((influencer, index) => (
                    <InfluencerCard 
                      key={influencer.id}
                      influencer={influencer}
                      animationDelay={(index % 9) * 100}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-border rounded-xl bg-white dark:bg-gray-900">
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    {query
                      ? `We couldn't find any influencers matching "${query}"`
                      : 'No influencers match the selected filters'
                    }
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      if (query) handleSearch('');
                    }}
                    className="px-4 py-2 border border-influence-accent text-influence-accent rounded-lg hover:bg-influence-accent hover:text-white transition-colors"
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
