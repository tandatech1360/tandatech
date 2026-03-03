"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">TandaTech</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#services" className="hover:text-green-400 transition">Services</a>
          <a href="#work" className="hover:text-green-400 transition">Work</a>
          <a href="#pricing" className="hover:text-green-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          
        </div>

        <Menu className="md:hidden" />
      </div>
    </nav>
  )
}