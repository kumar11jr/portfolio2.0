'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/30 to-fuchsia-900/20 border-t border-violet-400/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${20 + (i * 12)}%`,
              left: `${15 + (i * 15)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Image className="w-5 h-5 text-white" src="/logo.png" alt="logo" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Prabhat Kumar
                </h3>
                <p className="text-violet-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Passionate about creating innovative web solutions with modern technologies. 
              Let&apos;s build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Skills', href: '/service' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-violet-300 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kumar11jr@gmail.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-violet-300 transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
              
              {/* Social Media Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://github.com/kumar11jr" 
                  className="group w-10 h-10 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-xl flex items-center justify-center hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-4 h-4 text-violet-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/prabhat-kumar-157435244" 
                  className="group w-10 h-10 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 rounded-xl flex items-center justify-center hover:from-purple-500/30 hover:to-fuchsia-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 text-purple-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://x.com/kumar11jr" 
                  className="group w-10 h-10 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-400/30 rounded-xl flex items-center justify-center hover:from-fuchsia-500/30 hover:to-violet-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-4 h-4 text-fuchsia-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-violet-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>
                &copy; {new Date().getFullYear()} Prabhat Kumar. All rights reserved.
              </span>
              <Heart className="w-4 h-4 text-violet-400 animate-pulse" />
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full text-violet-300 hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}