"use client";

import { Github, Linkedin, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-32 h-32 rounded-full bg-zinc-800 flex items-center justify-center">
            <User className="w-16 h-16 text-zinc-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Masudur Rahman Sourav
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Full Stack Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/masudursourav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/masudursourav/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hey@masudur.me"
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Projects Section */}
        {/* <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors"
              >
                <div className="aspect-video bg-zinc-700 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Project {project}
                </h3>
                <p className="text-zinc-400 mb-4">
                  A brief description of the project and the technologies used
                  in its development.
                </p>
                <button className="w-full py-2 px-4 border border-zinc-600 rounded-lg hover:bg-zinc-700 transition-colors">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Skills Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "Express.js",
              "Electron.js",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-800 rounded-lg p-4 text-center font-medium hover:bg-zinc-700 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
