import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute right-0 top-0 -mr-96 -mt-96 h-[50rem] w-[50rem] rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 -ml-96 -mb-96 h-[50rem] w-[50rem] rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-500">
              Transforming Ideas into Digital Reality
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are a team of passionate developers crafting innovative
              solutions for your business needs. From web applications to
              enterprise solutions, we deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* <button className="group relative px-6 py-3 rounded-lg overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500"></div>
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_80%)]"></div>
                <span className="relative text-white font-medium">
                  Get Started
                </span>
              </button>

              <button className="group relative px-6 py-3 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors">
                <span className="relative text-gray-300 group-hover:text-blue-400 transition-colors font-medium">
                  Learn More
                </span>
              </button> */}
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative h-full w-full rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-4 transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/hero-image.jpg"
                alt="Hero Image"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-sm mb-2">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
