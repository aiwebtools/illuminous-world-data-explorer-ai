
const VideoSection = () => {
  return (
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
  );
};

export default VideoSection;
