import React, { useEffect, useRef } from 'react';
import demoImage from '../assets/DEMO IMAGE.png';

const About = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    [leftColumnRef, rightColumnRef, missionRef, visionRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [leftColumnRef, rightColumnRef, missionRef, visionRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section id="about" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5FAFF 50%, #EAF2FF 100%)' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#6A5DFF] to-[#00D4FF] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-[#00D4FF] to-[#6A5DFF] rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#6A5DFF] rounded-full opacity-60 animate-float shadow-lg shadow-[#6A5DFF]/50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#00D4FF] rounded-full opacity-50 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B0F19] mb-4">
            About <span className="bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transforming ideas into powerful digital solutions
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div ref={leftColumnRef} className="space-y-8 scroll-slide-left">
            {/* Company Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B0F19] mb-4">Who We Are</h3>
              <p className="text-[#4A4A4A] leading-relaxed">
                Subhedar Global Tech is a leading software development company specializing in creating 
                innovative digital solutions for businesses of all sizes. With a team of passionate developers, 
                designers, and strategists, we transform complex challenges into elegant, user-friendly solutions.
              </p>
            </div>

            {/* Mission */}
            <div ref={missionRef} className="bg-gradient-to-br from-[#00D4FF]/10 to-[#6A5DFF]/10 rounded-xl p-6 scroll-fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D4FF] to-[#6A5DFF] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B0F19] mb-2">Our Mission</h4>
                  <p className="text-[#4A4A4A]">
                    To empower businesses with cutting-edge technology solutions that drive growth, 
                    efficiency, and innovation. We strive to be the trusted partner in your digital transformation journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div ref={visionRef} className="bg-gradient-to-br from-[#6A5DFF]/10 to-[#00D4FF]/10 rounded-xl p-6 scroll-fade-up" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6A5DFF] to-[#00D4FF] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B0F19] mb-2">Our Vision</h4>
                  <p className="text-[#4A4A4A]">
                    To be recognized globally as a premier software development company that sets industry 
                    standards for quality, innovation, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-xl font-bold text-[#0B0F19] mb-4">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Integrity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Reliability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] rounded-full"></div>
                  <span className="text-[#4A4A4A] font-medium">Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Image */}
          <div ref={rightColumnRef} className="scroll-slide-right" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={demoImage} 
                  alt="Subhedar Global Tech Demo"
                  className="w-full h-auto object-cover animate-scale-in"
                />
                {/* Floating Glow Effect */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6A5DFF] rounded-full opacity-50 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00D4FF] rounded-full opacity-50 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
