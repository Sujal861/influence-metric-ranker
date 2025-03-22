
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rankings', path: '/search' },
    { name: 'Methodology', path: '/methodology' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full', 
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="content-container flex items-center justify-between py-4">
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <span className="text-influence-accent">Influence</span>
          <span className="font-bold">IQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-all duration-200 hover:text-influence-accent',
                  location.pathname === item.path 
                    ? 'text-influence-accent' 
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            to="/search"
            className="flex items-center text-sm text-foreground/80 hover:text-influence-accent transition-colors duration-200"
          >
            <Search size={18} className="mr-1" />
            <span>Search</span>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center p-2 text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-background animate-fade-in">
          <div className="flex flex-col h-full">
            <div className="py-6 px-4 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block text-lg font-medium py-3 px-4 rounded-md transition-all duration-200',
                    `animate-slide-up animation-delay-${index * 100}`,
                    location.pathname === item.path 
                      ? 'text-influence-accent bg-influence-accent/5' 
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/search"
                className={cn(
                  'flex items-center text-lg font-medium py-3 px-4 rounded-md animate-slide-up animation-delay-300',
                  location.pathname === '/search' 
                    ? 'text-influence-accent bg-influence-accent/5' 
                    : 'text-foreground hover:bg-muted'
                )}
              >
                <Search size={20} className="mr-2" />
                <span>Search</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
