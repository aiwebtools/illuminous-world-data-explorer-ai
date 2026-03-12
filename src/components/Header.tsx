
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-blue-900/30">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <div className="flex items-center gap-2 min-w-0">
          <Globe className="h-7 w-7 md:h-8 md:w-8 text-blue-400 flex-shrink-0" />
          <div className="hidden md:block">
            <h1 className="text-lg lg:text-xl font-semibold text-white leading-tight truncate">Illuminous World Data Exploration AI</h1>
            <p className="text-xs text-blue-300/90">Presented by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AiWebTools.Ai</a></p>
          </div>
        </div>
        
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-2 lg:space-x-4">
            <li>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400 text-xs lg:text-sm" asChild>
                <a href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" target="_blank" rel="noopener noreferrer">
                  ACCESS ILLUMINOUS <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400 text-xs lg:text-sm" asChild>
                <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer">
                  MORE AI TOOLS <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-blue-900/30 bg-black/90 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <p className="text-xs text-blue-300/90 mb-1">Presented by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AiWebTools.Ai</a></p>
            <a
              href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <ExternalLink className="h-4 w-4" /> ACCESS ILLUMINOUS
            </a>
            <a
              href={AIWEBTOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <ExternalLink className="h-4 w-4" /> MORE AI TOOLS
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
