import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { Menu, Sparkles } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/20 to-fuchsia-900/10 backdrop-blur-xl border-b border-violet-400/20" />
      
      <div className="relative flex h-20 w-full items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              className="lg:hidden bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-violet-300 hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400/50 hover:text-white transition-all duration-300" 
              size="icon" 
              variant="outline"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-xl border-violet-400/20">
            <Link className="flex items-center gap-2 mb-6" href="/">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-0.5 shadow-lg shadow-violet-500/30">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-lg" /> 
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>
            
            <div className="grid gap-3 py-6">
              <Link className="group flex w-full items-center py-3 px-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white transition-all duration-300" href="/">
                <Sparkles className="w-4 h-4 mr-3 text-violet-400 group-hover:animate-pulse" />
                Home
              </Link>
              <Link className="group flex w-full items-center py-3 px-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white transition-all duration-300" href="/about">
                <div className="w-4 h-4 mr-3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400" />
                About
              </Link>
              <Link className="group flex w-full items-center py-3 px-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white transition-all duration-300" href="/service">
                <div className="w-4 h-4 mr-3 rounded bg-gradient-to-r from-purple-400 to-fuchsia-400" />
                Skills
              </Link>
              <Link className="group flex w-full items-center py-3 px-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white transition-all duration-300" href="/contact">
                <div className="w-4 h-4 mr-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
                Contact
              </Link>
              
              <div className="mt-4 pt-4 border-t border-violet-400/20">
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Logo */}
        <Link className="mr-6 hidden lg:flex items-center gap-3 group" href="/">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-0.5 shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300">
            <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
              <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-lg group-hover:scale-110 transition-transform duration-300" /> 
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Prabhat Kumar
            </span>
            <span className="text-xs text-violet-300/80 font-medium">Full Stack Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:flex gap-2 items-center">
          <Link
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
            href="/"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
            href="/about"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
            href="/service"
          >
            <span className="relative z-10">Skills</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/20 text-slate-200 hover:from-violet-500/20 hover:to-purple-500/20 hover:border-violet-400/40 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
            href="/contact"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <div className="ml-4 pl-4 border-l border-violet-400/20">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}