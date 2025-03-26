import Link from "next/link";

const teamMembers = [
  {
    name: "MD Ansar Ali",
    role: "Full Stack Developer",
    skills: [
      "Javascript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Nest.js",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    name: "Md. Samim Hossain",
    role: "Full Stack Developer",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Java",
      "Spring Boot",
      "C#",
      ".NET MVC",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    name: "Ashik Mahmud",
    role: "Full Stack Developer",
    skills: ["PHP", "Laravel", "Angular"],
  },
  {
    name: "Masudur Rahman Sourav",
    role: "Full Stack Developer",
    route: "/masudurSourav",
    skills: [
      "React.js",
      "Next.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    name: "Mir Rakibul Islam",
    role: "Full Stack Developer",
    skills: ["Java", "Spring Boot", "React", "React Native", "Node.js"],
  },
  {
    name: "Muhammad Babu",
    role: "Backend Developer",
    skills: ["Java", "Spring Boot"],
  },
  {
    name: "MD Shabik Yeamin",
    role: "Frontend Developer",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our talented team of developers and engineers who make the
            magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Link href={member.route ?? "/"} key={index}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4">
                    {/* Add member photo here */}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 5).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 5 && (
                    <span className="text-gray-400 text-sm">
                      +{member.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
