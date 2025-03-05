
const ProcessSection = () => {
  return (
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
  );
};

export default ProcessSection;
