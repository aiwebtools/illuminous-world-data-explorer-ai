import { useState, useEffect } from "react";
import { Globe, Mail, Phone, ExternalLink, ChevronDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EarthGlobe from "@/components/EarthGlobe";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      title: "Data Analysis & Visualization",
      description: "Meticulously analyze real-world data from diverse sources, compile detailed Python diagrams, explanations, and research analyses on any topic.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Live Data & Predictions",
      description: "Search the web for current world statistics, analyze historical trends, and provide correct accurate predictions based on data-driven insights.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Clear Communication",
      description: "Clearly articulate & explain all information, findings, and diagrams, asking for specifics to resolve any ambiguities.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Data Authenticity",
      description: "Never simulate or fabricate data. Strictly adhere to data-driven insights & verify calculation accuracy.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Live World Data Expertise",
      description: "Deep web search for all data needed to uncover key patterns, trends, and relationships through multi-source web search.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Comprehensive Resource Analysis",
      description: "Provide in-depth analysis of global resources, including but not limited to water, oil, minerals, or whatever you need.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Scientist, Global Institute",
      content: "Illuminous has revolutionized our resource depletion research. The level of detail in its predictions and calculations saved us months of work.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Torres",
      role: "Environmental Policy Advisor",
      content: "I've never seen such comprehensive analysis of climate data. Illuminous doesn't just provide numbers - it offers context and actionable insights.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Lawson",
      role: "Investment Strategist",
      content: "The resource trend predictions have been invaluable for our long-term investment planning. Illuminous offers unparalleled depth in data analysis.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const faqs = [
    {
      question: "How does Illuminous gather its data?",
      answer: "Illuminous conducts deep web searches across multiple reputable sources to gather the most current and accurate data available. It scans academic journals, government databases, research publications, and other verified information repositories to ensure comprehensive data collection."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Illuminous provides predictions based on rigorous data analysis and Python calculations, accounting for multiple variables including technological advancements, geopolitical factors, and environmental changes. Each analysis includes worst-case, best-case, and most likely scenarios to provide a comprehensive view of possible outcomes."
    },
    {
      question: "Can Illuminous analyze specific resources or regions?",
      answer: "Yes, Illuminous can perform detailed analysis of specific resources (like water, oil, minerals) or focus on particular geographic regions. Its comprehensive approach takes into account regional differences, resource availability, consumption patterns, and other relevant factors."
    },
    {
      question: "What makes Illuminous different from other data analysis tools?",
      answer: "Illuminous combines deep web research capabilities with sophisticated Python-based calculations and data visualization. It considers often-overlooked variables, provides clear explanations of methodologies, and offers actionable next steps based on the analysis."
    },
    {
      question: "How can I access Illuminous?",
      answer: "You can access Illuminous directly through OpenAI's ChatGPT by clicking the 'ACCESS ILLUMINOUS' button at the top of this page, which will take you to the GPT."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      {/* Hero Section */}
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
              <p className="text-sm text-muted-foreground">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AiWebTools.Ai</a></p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Advanced World Data Explorer with comprehensive analysis and predictions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <a href="https://chatgpt.com/g/g-2e0vIHXls-illuminousworld-data-prediction-gpt" target="_blank" rel="noopener noreferrer">
                ACCESS ILLUMINOUS <ExternalLink className="ml-2 h-4 w-4" />
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
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-24 px-6 bg-black/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            See Illuminous in Action
          </h2>
          
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-900/50">
            <iframe 
              src={`https://www.youtube.com/embed/Nd1Ui2-VLMU?autoplay=1&mute=0&controls=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&vq=hd1080`}
              title="Illuminous World Data Prediction GPT"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-12 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              How Illuminous Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A sophisticated AI assistant specializing in comprehensive analysis of real-world data
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 px-6 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Operational Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From data collection to comprehensive analysis and recommendations
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 text-2xl font-bold mb-4">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Identify Required Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Determine the data needed for the analysis</li>
                  <li>List all factors for accurate calculations, including technological advancements, geopolitical factors, and climate change impacts</li>
                  <li>Present the list clearly to the user</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 text-2xl font-bold mb-4">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Web Search and Data Compilation</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Conduct deep web searches across multiple reputable sources</li>
                  <li>Present findings with all data needed and sources cited</li>
                  <li>Consolidate data to draw accurate conclusions</li>
                  <li>Include technological advancements, policy changes, and environmental factors</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 text-2xl font-bold mb-4">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Data Analysis and Calculations</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Use collected data to calculate the requested information with Python</li>
                  <li>Account for all known variables affecting resource dynamics</li>
                  <li>Provide worst-case, best-case, and most likely scenarios</li>
                  <li>Use sophisticated models for resource analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 text-2xl font-bold mb-4">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Visualization and Reporting</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Present data through detailed graphs and charts</li>
                  <li>Write comprehensive reports with methodologies, interconnections, and timelines</li>
                  <li>Present final answers clearly and highlight limitations</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 text-2xl font-bold mb-4">5</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">User Interaction and Next Steps</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Offer precise Python calculations and additional graphs</li>
                  <li>List 5 potential next actionable steps to assist the user</li>
                  <li>Highlight the best recommended next step based on analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Illuminous is transforming data analysis across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about Illuminous
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-900/30">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/30 border border-blue-900/30 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Legal Disclaimer</h3>
            <div className="text-sm text-gray-400 space-y-4">
              <p>
                Illuminous provides data analysis and predictions based on available information. While we strive for accuracy, all predictions and analyses are presented for informational purposes only and should not be construed as professional advice.
              </p>
              <p>
                The creators and distributors of Illuminous make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics provided.
              </p>
              <p>
                Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of Illuminous.
              </p>
              <p>
                By using Illuminous, you acknowledge that the information provided may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
