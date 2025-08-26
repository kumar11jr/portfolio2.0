import React from 'react';
import { CardContent, CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Image from 'next/image';

const skills = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'GraphQL',
    'Firebase',
  ],
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-fuchsia-900/20 py-20 px-4 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <p className="text-slate-300 text-lg">
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Frontend Card */}
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-violet-900/10 backdrop-blur-xl border border-violet-400/20 rounded-2xl p-8 shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 hover:scale-[1.02] transform-gpu">
              
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl">⚛️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">Frontend</h2>
                  <p className="text-slate-400 text-sm">User Interface & Experience</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={skill}
                    className="group/skill relative bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 rounded-lg px-4 py-3 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-slate-200 font-medium text-sm">{skill}</span>
                    {/* Skill glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-fuchsia-900/10 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] transform-gpu">
              
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl">🗄️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">Backend</h2>
                  <p className="text-slate-400 text-sm">Server & Database Logic</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {skills.backend.map((skill, index) => (
                  <div
                    key={skill}
                    className="group/skill relative bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/20 rounded-lg px-4 py-3 hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-slate-200 font-medium text-sm">{skill}</span>
                    {/* Skill glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4 text-slate-500">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

