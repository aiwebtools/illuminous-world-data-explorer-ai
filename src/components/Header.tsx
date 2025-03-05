
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-black/50 border-b border-blue-900/30">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-blue-400 mr-2" />
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold text-white">Illuminous</h1>
            <p className="text-xs text-muted-foreground">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AiWebTools.Ai</a></p>
          </div>
        </div>
        
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400" asChild>
                <a href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" target="_blank" rel="noopener noreferrer">
                  ACCESS ILLUMINOUS <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </li>
            <li className="hidden md:block">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400" asChild>
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                  MORE AI TOOLS <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
