"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled past top
      if (currentScrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-[#003BE2] shadow-lg" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-10 py-6 max-w-[1440px] mx-auto w-full text-white h-[88px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/Header_Logo.png" alt="ByteSpace Logo" className="h-[28px] w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[40px] text-[16px]">
          <a href="#" className="font-semibold text-white">Home</a>
          <a href="#" className="font-medium text-white/90 hover:text-white transition-colors">Courses</a>
          <a href="#" className="font-medium text-white/90 hover:text-white transition-colors">Creators</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          <a href="#" className="text-white/90 hover:text-white transition-colors">Sign In</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">Join Us</a>
          <button aria-label="Cart">
            <ShoppingBag className="w-[20px] h-[20px] text-white/90 hover:text-white transition-colors" />
          </button>
        </div>
      </nav>
    </div>
  );
}
