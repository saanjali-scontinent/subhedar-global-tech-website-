import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectRefs = useRef([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      category: 'Web Development'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard providing predictive analytics and automated insights for business intelligence.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      image: '📊',
      category: 'AI & ML'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, instant transfers, and investment tracking.',
      technologies: ['React Native', 'AWS', 'Node.js', 'Redis'],
      image: '💳',
      category: 'Mobile Development'
    },
    {
      title: 'Cloud Infrastructure Migration',
      description: 'Enterprise-scale cloud migration with automated deployment pipelines and comprehensive monitoring systems.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '☁️',
      category: 'Cloud & DevOps'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and telemedicine features.',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'WebRTC'],
      image: '🏥',
      category: 'Healthcare Tech'
    },
    {
      title: 'IoT Smart Home Platform',
      description: 'Integrated smart home ecosystem with device automation, energy monitoring, and voice control capabilities.',
      technologies: ['IoT', 'Python', 'React', 'MQTT'],
      image: '🏠',
      category: 'IoT Solutions'
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F7F9FF 0%, #EAF2FF 50%, #F5FAFF 100%)' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#00D4FF] to-[#6A5DFF] rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-[#6A5DFF] to-[#00D4FF] rounded-full opacity-15 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00D4FF] rounded-full opacity-60 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#6A5DFF] rounded-full opacity-50 animate-float shadow-lg shadow-[#6A5DFF]/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#00D4FF] rounded-full opacity-70 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '1.8s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B0F19] mb-4">
            Our <span className="bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Showcasing our successful projects across diverse industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group bg-white border-2 border-[#EAF2FF] rounded-xl p-6 hover:border-[#00D4FF] hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#00D4FF]/10 to-[#6A5DFF]/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-[#00D4FF]">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-heading font-bold text-[#0B0F19] mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-[#4A4A4A] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#F5FAFF] text-[#00D4FF] text-xs font-semibold rounded-lg border border-[#00D4FF]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View More Link */}
              <div className="mt-6 pt-4 border-t border-[#EAF2FF]">
                <button className="text-[#00D4FF] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  View Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
