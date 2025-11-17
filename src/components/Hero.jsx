import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/Subhedar_Global_Tech_logo-removebg-preview.png';

const Hero = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    support: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate Projects counter (0 to 100)
            let projectCount = 0;
            const projectInterval = setInterval(() => {
              projectCount += 2;
              if (projectCount >= 100) {
                projectCount = 100;
                clearInterval(projectInterval);
              }
              setCounts(prev => ({ ...prev, projects: projectCount }));
            }, 20);

            // Animate Clients counter (0 to 50)
            let clientCount = 0;
            const clientInterval = setInterval(() => {
              clientCount += 1;
              if (clientCount >= 50) {
                clientCount = 50;
                clearInterval(clientInterval);
              }
              setCounts(prev => ({ ...prev, clients: clientCount }));
            }, 30);

            // Support counter (just set to 24)
            setTimeout(() => {
              setCounts(prev => ({ ...prev, support: 24 }));
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #F5FAFF 0%, #EAF2FF 50%, #F7F9FF 100%)' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#00D4FF] to-[#6A5DFF] rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#6A5DFF] to-[#00D4FF] rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00D4FF] rounded-full opacity-60 animate-float shadow-lg shadow-[#00D4FF]/50"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#6A5DFF] rounded-full opacity-60 animate-float shadow-lg shadow-[#6A5DFF]/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-[#00D4FF] rounded-full opacity-50 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#6A5DFF] rounded-full opacity-70 animate-float shadow-lg shadow-[#6A5DFF]/50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00D4FF] rounded-full opacity-80 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Subhedar Global Tech" className="h-40 w-auto md:h-56 md:w-auto lg:h-64 lg:w-auto animate-bounce-in hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Main Heading with Enhanced Styling */}
          <div className="mb-8 animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
              <span className="inline-block text-[#0B0F19] animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                Vision Led.
              </span>
              {' '}
              <span className="inline-block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#6A5DFF]/20 blur-2xl animate-pulse-slow"></span>
                <span className="relative bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent font-extrabold animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  Tech Driven.
                </span>
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#4A4A4A] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            We build <span className="font-semibold text-[#00D4FF]">scalable</span>, <span className="font-semibold text-[#00D4FF]">secure</span>, and <span className="font-semibold text-[#6A5DFF]">modern</span> software solutions for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-shimmer overflow-hidden relative"
              style={{ background: 'linear-gradient(90deg, #00D4FF, #6A5DFF)' }}
            >
              Get a Free Consultation
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-white text-[#0B0F19] border-2 border-[#00D4FF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00D4FF] hover:text-white hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              Our Services
            </button>
          </div>

          {/* Stats or Trust Indicators */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in-left hover-lift cursor-pointer" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">
                {counts.projects}+
              </div>
              <div className="text-[#4A4A4A] mt-2 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center animate-slide-in-right hover-lift cursor-pointer" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">
                {counts.clients}+
              </div>
              <div className="text-[#4A4A4A] mt-2 font-medium">Happy Clients</div>
            </div>
            <div className="text-center animate-slide-in-left hover-lift cursor-pointer" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">
                {counts.support > 0 ? `${counts.support}/7` : '24/7'}
              </div>
              <div className="text-[#4A4A4A] mt-2 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#00D4FF]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
