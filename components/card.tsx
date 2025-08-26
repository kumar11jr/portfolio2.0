import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Globe, ExternalLink, Star, Sparkles, Zap } from 'lucide-react';

interface CardProps {
  title: string;
  duration: string;
  description: string;
  tags: string[];
  image: string;
  website?: string;
  source?: string;
}

const Card: React.FC<CardProps> = ({ title, duration, description, tags, image, website, source }) => {
  return (
    <div className="group relative w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 scale-110" />
      
      {/* Main card container */}
      <div className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-rose-900/40 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:scale-[1.02] hover:-rotate-1 transform-gpu overflow-hidden">
        
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
          <div 
            className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-purple-500/5"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              animation: 'pulse 4s ease-in-out infinite alternate'
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {/* Animated particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg`}
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${15 + (i * 8)}%`,
                animation: `bounce 3s ease-in-out infinite ${i * 0.5}s, pulse 2s ease-in-out infinite ${i * 0.3}s`,
                opacity: 0.6 + (i * 0.05)
              }}
            />
          ))}
        </div>

        {/* Orbital rings using CSS transforms */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          {/* Outer ring */}
          <div 
            className="absolute inset-6 border border-violet-400/15 rounded-full"
            style={{
              animation: 'spin 20s linear infinite'
            }}
          />
          {/* Middle ring */}
          <div 
            className="absolute inset-12 border border-fuchsia-400/20 rounded-full"
            style={{
              animation: 'spin 15s linear infinite reverse'
            }}
          />
          {/* Inner ring */}
          <div 
            className="absolute inset-16 border border-cyan-400/15 rounded-full"
            style={{
              animation: 'spin 25s linear infinite'
            }}
          />
        </div>

        {/* Content container with enhanced styling */}
        <div className="relative z-20">
          {/* Premium image presentation */}
          <div className="relative flex justify-center mb-8 group/image">
            <div className="relative">
              {/* Multi-layered glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-20 group-hover/image:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-30 group-hover/image:opacity-50 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-1 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                  <Image 
                    src={image} 
                    alt={title} 
                    width={112} 
                    height={112} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-12 group-hover/image:brightness-110" 
                  />
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced title section */}
          <div className="text-center mb-6">
            <div className="relative mb-3">
              <h3 className="text-3xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-fuchsia-300 transition-all duration-500 leading-tight">
                {title}
              </h3>
              {/* Sparkle effects */}
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <Zap className="absolute -top-1 -left-3 w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" />
            </div>
            
            {/* Premium duration badge */}
            <div className="flex justify-center">
              <div className="relative">
                <span className="text-xs font-bold text-violet-200 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-fuchsia-600/30 px-4 py-2 rounded-full border border-violet-400/40 backdrop-blur-sm shadow-lg hover:shadow-violet-400/25 transition-all duration-300 flex items-center gap-2">
                  <Star className="w-3 h-3 animate-pulse" />
                  {duration}
                  <Star className="w-3 h-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur opacity-50 -z-10" />
              </div>
            </div>
          </div>

          {/* Elegant description */}
          <div className="relative mb-8">
            <p className="text-slate-300 text-center text-sm leading-relaxed font-medium tracking-wide">
              {description}
            </p>
            {/* Subtle gradient line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-4" />
          </div>

          {/* Premium tags with advanced styling */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="group/tag relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Tag glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                
                <span className="relative block px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/25 hover:border-violet-400/50 cursor-default hover:-translate-y-1 transform-gpu">
                  {tag}
                  {/* Inner highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                </span>
              </div>
            ))}
          </div>

          {/* Ultra-premium action buttons */}
          <div className="flex gap-4 justify-center">
            {website && (
              <Button 
                variant="outline" 
                size="sm"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-violet-600/10 to-purple-600/10 border-violet-400/50 text-violet-200 hover:text-white hover:border-violet-400 transition-all duration-500 hover:shadow-lg hover:shadow-violet-400/30 backdrop-blur-sm rounded-full px-6 py-2 font-semibold hover:scale-105 transform-gpu"
                asChild
              >
                <Link href={website} target="_blank" rel="noopener noreferrer">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  
                  <Globe className="w-4 h-4 mr-2 relative z-10 group-hover/btn:text-cyan-300 transition-all duration-300" style={{
                    filter: 'drop-shadow(0 0 4px rgba(34,211,238,0.5))'
                  }} />
                  <span className="relative z-10 font-bold">Explore</span>
                  <ExternalLink className="w-3 h-3 ml-2 relative z-10 opacity-60 group-hover/btn:opacity-100 transition-all duration-300" />
                </Link>
              </Button>
            )}
            
            {source && (
              <Button 
                size="sm"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 text-white hover:from-fuchsia-500 hover:via-purple-500 hover:to-violet-500 transition-all duration-500 hover:shadow-xl hover:shadow-fuchsia-400/40 hover:scale-105 rounded-full px-6 py-2 font-semibold transform-gpu"
                asChild
              >
                <Link href={source} target="_blank" rel="noopener noreferrer">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  
                  <Github className="w-4 h-4 mr-2 relative z-10 transition-all duration-300 group-hover/btn:rotate-12" style={{
                    filter: 'drop-shadow(0 0 4px rgba(236,72,153,0.7))'
                  }} />
                  <span className="relative z-10 font-bold">Code</span>
                  <ExternalLink className="w-3 h-3 ml-2 relative z-10 opacity-60 group-hover/btn:opacity-100 transition-all duration-300" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Premium overlay effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default Card;


