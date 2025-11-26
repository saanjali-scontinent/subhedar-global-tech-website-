import React, { useEffect, useRef, useState } from 'react';

// Import all project images
import contentMod1 from '../assets/Project screenshots/AI powered content moderation/AI powered content moderation 1.png';
import contentMod2 from '../assets/Project screenshots/AI powered content moderation/AI powered content moderation 2.png';
import contentMod3 from '../assets/Project screenshots/AI powered content moderation/AI powered content moderation 3.jpeg';
import voiceCompanion from '../assets/Project screenshots/AI powered Voice companion/AI powered voice companion 1.png';
import textToImage from '../assets/Project screenshots/AI powered text to image/visinory Forge AI.png';
import ecommerce1 from '../assets/Project screenshots/Ecommerce/Loom&key screenshot 1.png';
import ecommerce2 from '../assets/Project screenshots/Ecommerce/Loom&key screenshot 2.png';
import ecommerce3 from '../assets/Project screenshots/Ecommerce/Loom&key screenshot 3.png';
import hospital1 from '../assets/Project screenshots/Hospital portal/doctor_patient portal screenshot 1.png';
import hospital3 from '../assets/Project screenshots/Hospital portal/doctor patient portal scrrenshot 3.png';
import hospital4 from '../assets/Project screenshots/Hospital portal/doctor patient portal scrrenshot  4.png';
import landing1 from '../assets/Project screenshots/Landing page/calloc screentshot 1 .png';
import landing2 from '../assets/Project screenshots/Landing page/calloc screentshot 2.png';
import pulse1 from '../assets/Project screenshots/Pulse CMR/pulse CMR  screenshot 1.png';
import pulse2 from '../assets/Project screenshots/Pulse CMR/pulse CMR  screenshot 2.png';

const Projects = () => {
  const projectRefs = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

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

  const nextImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const projects = [
    {
      title: 'AI-Powered Content Moderation',
      description: 'A smart content moderation system that analyzes uploaded images and user-provided text using AI. It generates optimized social-media-ready captions and can rephrase content for different platforms. Built with React, Python, and custom AI APIs.',
      technologies: ['React', 'Python', 'AI APIs', 'NLP'],
      images: [contentMod1, contentMod2, contentMod3],
      category: 'AI & ML'
    },
    {
      title: 'AI-Powered Voice Companion',
      description: 'A voice-driven AI assistant that listens, understands, and responds in real time. Powered by Google Speech API, Python backend, and a React frontend, it enables natural, hands-free conversational interactions for users.',
      technologies: ['React', 'Python', 'Google Speech API', 'NLP'],
      images: [voiceCompanion],
      category: 'AI & ML'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform built with React and PHP. It provides product browsing, cart management, secure checkout, and a smooth user experience for both customers and sellers.',
      technologies: ['React', 'PHP', 'MySQL', 'Stripe'],
      images: [ecommerce1, ecommerce2, ecommerce3],
      category: 'Web Development'
    },
    {
      title: 'Hospital Portal',
      description: 'A comprehensive hospital management portal developed using React and PHP. It enables patient registration, doctor scheduling, record management, and staff coordination on a single centralized platform.',
      technologies: ['React', 'PHP', 'MySQL', 'REST API'],
      images: [hospital1, hospital3, hospital4],
      category: 'Healthcare Tech'
    },
    {
      title: 'Landing Page Builder',
      description: 'A modern, responsive landing page built with React, JavaScript, and Firebase Storage. Designed for fast performance, dynamic content handling, and simple data management.',
      technologies: ['React', 'JavaScript', 'Firebase', 'CSS3'],
      images: [landing1, landing2],
      category: 'Web Development'
    },
    {
      title: 'Medical Diagnosis Assist',
      description: 'An AI-driven medical support tool that helps analyze symptoms and provides predictive insights using ML models. Built with a React frontend and Python AI API, it offers quick and accurate diagnosis assistance.',
      technologies: ['React', 'Python', 'TensorFlow', 'ML'],
      images: [],
      category: 'Healthcare Tech'
    },
    {
      title: 'Pulse CMR',
      description: 'A complete business management platform designed for small businesses. Built with React and PHP, it helps manage employees, tasks, attendance, and daily operations in one powerful dashboard.',
      technologies: ['React', 'PHP', 'MySQL', 'Dashboard'],
      images: [pulse1, pulse2],
      category: 'Business Solutions'
    },
    {
      title: 'AI-Powered Text-to-Image Generator',
      description: 'An advanced generative AI system that converts any text prompt into high-quality images. Built with React, Python, and FastAPI, it supports creative ideation, design assistance, and visual content generation.',
      technologies: ['React', 'Python', 'FastAPI', 'Stable Diffusion'],
      images: [textToImage],
      category: 'AI & ML'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group bg-white border-2 border-[#EAF2FF] rounded-xl overflow-hidden hover:border-[#00D4FF] hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Carousel */}
              {project.images.length > 0 ? (
                <div className="relative h-64 bg-gradient-to-br from-[#F5FAFF] to-[#EAF2FF] overflow-hidden">
                  <img 
                    src={project.images[currentImageIndex[index] || 0]} 
                    alt={`${project.title} screenshot ${(currentImageIndex[index] || 0) + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  
                  {/* Navigation Arrows - Only show if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, project.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                      >
                        <svg className="w-5 h-5 text-[#0B0F19]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => nextImage(index, project.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                      >
                        <svg className="w-5 h-5 text-[#0B0F19]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                            className={`w-2 h-2 rounded-full transition-all ${
                              (currentImageIndex[index] || 0) === imgIndex 
                                ? 'bg-white w-6' 
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-[#00D4FF]/10 to-[#6A5DFF]/10 flex items-center justify-center">
                  <div className="text-6xl">🔬</div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
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
                <p className="text-[#4A4A4A] mb-4 leading-relaxed text-sm">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
