import React, { useEffect, useRef } from 'react';

const Services = () => {
  const serviceRefs = useRef([]);

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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web & Mobile App Development',
      description: 'Build responsive, high-performance web and mobile applications tailored to your business needs.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI & ML Solutions',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain insights.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Deploy scalable cloud infrastructure with automated CI/CD pipelines for rapid deployment.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user interfaces that enhance user experience and engagement.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom Software',
      description: 'Develop tailored software solutions that perfectly align with your unique business requirements.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Automation Tools',
      description: 'Streamline workflows and increase efficiency with intelligent automation and integration tools.'
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5FAFF 0%, #EAF2FF 50%, #F7F9FF 100%)' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#00D4FF] to-[#6A5DFF] rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#6A5DFF] to-[#00D4FF] rounded-full opacity-15 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#00D4FF] rounded-full opacity-60 animate-float shadow-lg shadow-[#00D4FF]/50"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-[#6A5DFF] rounded-full opacity-50 animate-float shadow-lg shadow-[#6A5DFF]/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#00D4FF] rounded-full opacity-70 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B0F19] mb-4">
            Our <span className="bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className={`group bg-[#F5F5F5] rounded-xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift border-2 border-transparent hover:border-[#00D4FF] ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #00D4FF, #6A5DFF)';
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F5F5F5';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="text-[#00D4FF] group-hover:text-white transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-white transition-colors duration-300 mb-3">
                {service.title}
              </h3>
              <p className="text-[#4A4A4A] group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
