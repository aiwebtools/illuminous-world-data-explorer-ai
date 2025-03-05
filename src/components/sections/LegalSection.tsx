
const LegalSection = () => {
  return (
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
  );
};

export default LegalSection;
