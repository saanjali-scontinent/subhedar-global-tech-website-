import React, { useState } from 'react';
import logo from '../assets/Subhedar_Global_Tech_logo-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Subhedar Global Tech" className="h-16 w-auto md:h-20 md:w-auto" />
            <span className="text-lg md:text-xl font-heading font-bold text-[#0B0F19]">
              Subhedar Global Tech
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #00D4FF, #6A5DFF)' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0B0F19] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#4A4A4A] hover:text-[#00D4FF] font-medium py-2 text-left transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #00D4FF, #6A5DFF)' }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
