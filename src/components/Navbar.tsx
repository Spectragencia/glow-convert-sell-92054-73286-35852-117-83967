import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import spectraLogo from '@/assets/spectra-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "h-16 md:h-20",
        "bg-convrt-dark/80 backdrop-blur-lg border-b border-convrt-accent/10",
        "transition-[background-color,backdrop-filter] duration-300",
        "supports-[backdrop-filter]:bg-convrt-dark/60"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-full">
        <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={spectraLogo} alt="Spectra OS" className="h-10 md:h-12 w-auto" />
          </a>
        </div>
        
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-convrt-light/80 hover:text-convrt-accent font-medium transition-colors">
              Como funciona
            </a>
            <a href="#testimonials" className="text-convrt-light/80 hover:text-convrt-accent font-medium transition-colors">
              Depoimentos
            </a>
            <a href="#cta" className="button-primary">
              Começar agora
            </a>
          </div>
        
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-convrt-light" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-convrt-dark/95 backdrop-blur-lg border-b border-convrt-accent/10 py-4 px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-convrt-light/80 hover:text-convrt-accent font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como funciona
            </a>
            <a 
              href="#testimonials" 
              className="text-convrt-light/80 hover:text-convrt-accent font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#cta" 
              className="button-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Começar agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
