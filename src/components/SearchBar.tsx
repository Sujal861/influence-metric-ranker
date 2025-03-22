
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  initialQuery?: string;
  fullWidth?: boolean;
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  initialQuery = '',
  fullWidth = false,
  onSearch,
  placeholder = 'Search for influencers, categories...',
  className
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={cn(
        'relative flex items-center transition-all duration-300',
        isFocused ? 'ring-2 ring-influence-accent ring-offset-2' : '',
        fullWidth ? 'w-full' : 'max-w-md w-full',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center w-full rounded-full bg-white dark:bg-gray-800 border border-border',
          'px-4 py-2 shadow-subtle transition-shadow duration-200',
          isFocused ? 'shadow-none' : ''
        )}
      >
        <Search
          size={18}
          className="text-muted-foreground flex-shrink-0 mr-2"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
