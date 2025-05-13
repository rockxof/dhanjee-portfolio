import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontend = ["React", "TailWind", "BootStrap", "Shadcn", "JavaScript", "Git", "Netlify", "Vercel",  "HTML", "CSS"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="border rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-1">
          <p className="text-gray-300 mb-4">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center ">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, key)=>(
                    <span key={key} 
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >{tech}</span>
                ))}
              </div>
            </div>
          </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor`s in Computer Applications</strong> - Veer Kunwar Singh University
                            </li>

                            <li>
                                Relevant Coursework: Web Development, Data Structures, Database Mangement, Computer Networks...
                            </li>
                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

                        <div className="space-y-4 text-gray-300">
                            <div className="font-semibold">
                                <h4 className="font-semibold">
                                    Software Engineer at ABC Corp. (2023 - Present)
                                </h4>
                                <p>Developed and maintained microservices for cloud-based applicatons.</p>
                            </div>

                            <div className="font-semibold">
                                <h4 className="font-semibold">
                                    Intern at Lakshya Startups (2022)
                                </h4>
                                <p>Assisted in building front-end structured components, design and integration REST APIs</p>
                            </div>
                        </div>

                    </div>

                </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
