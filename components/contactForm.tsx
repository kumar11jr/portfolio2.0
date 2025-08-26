"use client"

import React from 'react'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Mail, Send, User, MessageSquare, Sparkles, Heart } from 'lucide-react'

const ContactForm: React.FC<{}> = () => {
  const { toast } = useToast()

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_API_KEY,
        subject: e.target.subject.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast({
        description: "Your message has been sent successfully! ✨",
      })
      console.log(result);
      e.target.subject.value = "";
      e.target.email.value = "";
      e.target.message.value = "";
      return
    }
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request. Please try again.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-fuchsia-900/20 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-fuchsia-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-fuchsia-500/10 to-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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

      <div className="relative z-10 py-20 px-4">
        <div className="mx-auto max-w-4xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-10 h-10 text-violet-400 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get In Touch
              </h1>
            </div>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you! 
              Let&apos;s create something amazing together.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-violet-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-violet-400 animate-pulse" />
              <span>and passion</span>
            </div>
            
            {/* Animated divider */}
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full shadow-lg shadow-violet-400/50" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="group relative">
              {/* Form glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main form container */}
              <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-violet-900/10 backdrop-blur-xl border border-violet-400/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-violet-500/25 transition-all duration-500">
                
                {/* Form header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                    <h2 className="text-2xl font-bold text-slate-100">Send me a message</h2>
                    <Sparkles className="w-5 h-5 text-fuchsia-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <p className="text-slate-400">I&apos;ll get back to you as soon as possible</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <Mail className="w-4 h-4 text-violet-400" />
                      Your Email
                    </label>
                    <div className="relative group/input">
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-violet-400/30 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 hover:border-violet-400/50 backdrop-blur-sm"
                        placeholder="your.name@example.com" 
                        required
                      />
                      {/* Input glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <MessageSquare className="w-4 h-4 text-purple-400" />
                      Subject
                    </label>
                    <div className="relative group/input">
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-purple-400/30 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm"
                        placeholder="What&apos;s this about?" 
                        required
                      />
                      {/* Input glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-fuchsia-600/5 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <User className="w-4 h-4 text-fuchsia-400" />
                      Your Message
                    </label>
                    <div className="relative group/input">
                      <textarea 
                        id="message" 
                        rows={6}
                        className="w-full px-4 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-fuchsia-400/30 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/20 transition-all duration-300 hover:border-fuchsia-400/50 backdrop-blur-sm resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello! I&apos;m excited to hear from you..."
                        required
                      />
                      {/* Input glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/5 to-violet-600/5 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="group relative w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-500 hover:scale-[1.02] transform-gpu"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Send Message</span>
                        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                      </div>
                      
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />
                    </Button>
                  </div>
                </form>

                {/* Bottom decoration */}
                <div className="flex justify-center mt-8 pt-6 border-t border-violet-400/20">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span>Protected by reCAPTCHA</span>
                    <div className="w-1 h-1 bg-violet-400 rounded-full animate-pulse" />
                    <span>Privacy guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Usually respond within 24 hours • Available for freelance projects
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
