const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Sansnom Tech Solutions</h2>
            <p className="text-gray-400 mb-6">
              Founded with a vision to transform digital landscapes, Sansnom Tech Solutions is a cutting-edge software development company
              that brings innovative solutions to businesses worldwide.
            </p>
            <p className="text-gray-400 mb-6">
              Our team of expert developers and engineers combines years of industry experience with the latest technologies
              to deliver exceptional results that drive business growth and success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Our Mission</h4>
                <p className="text-gray-400">To empower businesses through innovative technology solutions</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Our Vision</h4>
                <p className="text-gray-400">To be the leading force in digital transformation</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            {/* Add company image or illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
