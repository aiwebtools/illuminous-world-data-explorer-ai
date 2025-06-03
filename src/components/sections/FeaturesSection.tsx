
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Free AI Data Analysis & Visualization",
    description: "Meticulously analyze real-world data from diverse sources, compile detailed Python diagrams, explanations, and research analyses on any topic using our free AI tools.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Live Data & AI Predictions",
    description: "Search the web for current world statistics, analyze historical trends, and provide correct accurate predictions based on data-driven AI insights.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Clear AI Communication",
    description: "Our AI tools clearly articulate & explain all information, findings, and diagrams, asking for specifics to resolve any ambiguities.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Authentic Data Processing",
    description: "Never simulate or fabricate data. Our free AI web tools strictly adhere to data-driven insights & verify calculation accuracy.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Live World Data AI Expertise",
    description: "Deep web search capabilities for all data needed to uncover key patterns, trends, and relationships through advanced AI analysis.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Comprehensive AI Resource Analysis",
    description: "Provide in-depth AI-powered analysis of global resources, including water, oil, minerals, and any data you need to explore.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  }
];

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            How Our Free AI Tools Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A sophisticated AI assistant specializing in comprehensive analysis of real-world data - completely free from AiWebTools.AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/20 border-blue-900/30 hover:border-blue-700/50 transition-colors overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional SEO Content */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose AiWebTools.AI for Free AI Tools?</h3>
          <p className="text-gray-400 max-w-4xl mx-auto">
            AiWebTools.AI provides the most advanced free AI tools available online. Our AI web tools are designed for professionals, researchers, and anyone needing reliable data analysis. Access cutting-edge artificial intelligence technology without any cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
