"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Sparkles, Code, Briefcase, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';

const experiences = [
  {
    title: 'Software Engineer (Programmer Analyst)',
    company: 'Cognizant',
    duration: 'June 2025 - Present',
    location: 'India',
    description: 'Currently undergoing intensive full stack training focused on Java,Spring Boot,Microservices and DevOps.Hands-on labs building RESTful APIs with spring boot.Exposure to docker, kubernates, AWS and CI/CD pipelines.Practicing Agile workflows and real world enterprise development simulation.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'AWS', 'DevOps']
  },
  {
    title: 'SDE Intern',
    company: 'MCT India Infotech pvt ltd',
    duration: 'March 2025 - June 2025',
    location: 'India',
    description: 'Engineered auto-logout feature in React Native, enhancing session security by 25%.Engineered a Kotlin-based QR code scanner to automate asset data capture, reducing manual entry errors by approximately 40%.    Deployed 5+ apps on RedHat OpenShift, improving CI/CD pipeline efficiency.',
    technologies: ['React Native', 'Kotlin', 'QR Scanner', 'RedHat OpenShift', 'CI/CD', 'Mobile Development']
  },
];

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState<'typing' | 'erasing'>('typing');
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingDirection === 'typing') {
        if (displayText.length < texts[index].length) {
          setDisplayText(texts[index].substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setTypingDirection('erasing'), 2000); 
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(texts[index].substring(0, displayText.length - 1));
        } else {
          setTypingDirection('typing');
          setIndex((index + 1) % texts.length);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [displayText, index, texts, typingDirection]);

  return (
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home: React.FC = () => {
  const router = useRouter(); 

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1t4KLuusdrpZe3lgaL669fnFd262HD5W_/view?usp=sharing', '_blank');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-fuchsia-900/20 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-fuchsia-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-fuchsia-500/10 to-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                    <p className="text-violet-300 text-lg font-medium">Hello, I&apos;m</p>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-tight">
                    Prabhat 
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent block">
                      Kumar
                    </span>
                  </h1>
                  
                  <div className="text-2xl md:text-4xl font-bold text-slate-200 min-h-[3rem]">
                    <span>a </span>
                    <Typewriter texts={['Full Stack Developer.', 'Web Developer.', 'Software Engineer.', 'UI/UX Enthusiast.']} />
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Passionate Web Developer skilled in <span className="text-violet-400 font-semibold">MERN Stack</span>. 
                  Committed to innovation, collaboration, and creating meaningful digital experiences. 
                  Ready to tackle new challenges and build the future of web development.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => router.push('/contact')} className="group bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-violet-400/30 transition-all duration-300 hover:scale-105">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  
                  <Button onClick={handleDownloadResume} variant="outline" className="group border-violet-400/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/kumar11jr " className="group w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full flex items-center justify-center hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400/50 transition-all duration-300 hover:scale-110">
                    <Github className="w-5 h-5 text-violet-300 group-hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/prabhat-kumar-157435244" className="group w-12 h-12 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 rounded-full flex items-center justify-center hover:from-purple-500/30 hover:to-fuchsia-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-5 h-5 text-purple-300 group-hover:text-white" />
                  </a>
                  <a href="https://x.com/kumar11jr" className="group w-12 h-12 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-400/30 rounded-full flex items-center justify-center hover:from-fuchsia-500/30 hover:to-violet-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-110">
                    <Twitter className="w-5 h-5 text-fuchsia-300 group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Image glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Image container */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-2 shadow-2xl shadow-purple-500/30">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                      <Image 
                        width={400} 
                        height={400} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src="/profile.jpeg" 
                        alt="Prabhat Kumar - Full Stack Developer" 
                      />
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    <Code className="w-4 h-4 inline mr-1" />
                    Developer
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Creative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-violet-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Experience
                </h2>
              </div>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                My professional journey in web development and software engineering
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-px h-24 bg-gradient-to-b from-violet-400/50 to-purple-400/50" />
                  )}
                  
                  {/* Experience Card */}
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                      {/* Pulsing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-ping opacity-20" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-violet-900/10 backdrop-blur-xl border border-violet-400/20 rounded-2xl p-6 shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 hover:scale-[1.02] group-hover:-translate-y-1">
                        
                        {/* Card glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <p className="text-violet-400 font-semibold">{exp.company}</p>
                            </div>
                            
                            <div className="text-right text-sm text-slate-400">
                              <div className="flex items-center gap-1 mb-1">
                                <Calendar className="w-4 h-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-slate-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full text-xs font-medium text-violet-200 hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400/50 transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

