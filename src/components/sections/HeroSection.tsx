
import { Globe, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import EarthGlobe from "@/components/EarthGlobe";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background to-background z-10"></div>
        <div className="h-full w-full">
          <EarthGlobe />
        </div>
      </div>
      
      <div className="container relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <Globe className="w-12 h-12 text-primary mr-2" />
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Illuminous💡WORLD DATA PREDICTION GPT💡
            </h1>
            <p className="text-sm text-muted-foreground">Free AI Tools by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AiWebTools.AI</a></p>
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl mb-4 text-gray-300">
          Advanced World Data Explorer with comprehensive analysis and predictions
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl">
          Access cutting-edge AI tools for free. Explore world data, generate predictions, and gain insights with our advanced artificial intelligence technology. Join thousands using AiWebTools.AI for professional data analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            asChild
          >
            <a href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" target="_blank" rel="noopener noreferrer">
              ACCESS FREE AI TOOL <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-950/30"
            asChild
          >
            <a href="#how-it-works">
              Learn More <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        {/* SEO Keywords Section */}
        <div className="mt-8 text-xs text-gray-500 max-w-4xl">
          <p>
            AI Tools | Free AI Tools | AI Web Tools | Data Analysis AI | Predictive Analytics | Machine Learning Tools | AiWebTools.AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
