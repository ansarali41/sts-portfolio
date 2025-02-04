const openPositions = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    experience: "3+ years",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    experience: "4+ years",
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"]
  }
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {openPositions.map((position, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{position.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-400 text-sm px-3 py-1 rounded-full">
                  {position.type}
                </span>
                <span className="bg-green-500/10 text-green-400 text-sm px-3 py-1 rounded-full">
                  {position.location}
                </span>
              </div>
              <p className="text-gray-400 mb-4">Experience: {position.experience}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-white">Don't see a perfect match?</h3>
          <p className="text-gray-400 mb-6">
            We're always interested in meeting talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
