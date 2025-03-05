
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const FaqSection = () => {
  return (
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
  );
};

export default FaqSection;
