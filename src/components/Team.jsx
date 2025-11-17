import React from 'react';
import manjunathPhoto from '../assets/Team members photos /Manjunath Subhedar.png';
import saanjaliPhoto from '../assets/Team members photos /Saanjali belgavi.png';
import rohitPhoto from '../assets/Team members photos /Rohit .png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Manjunath Subhedar',
      role: 'Founder',
      description: 'Mathematics lecturer with 15+ years of experience in teaching pre-graduate students. Visionary leader driving educational excellence and innovation.',
      photo: manjunathPhoto,
      expertise: ['Mathematics', 'Education', 'Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'saanjalibelgavi@gmail.com'
      }
    },
    {
      name: 'Saanjali Belgavi',
      role: 'Lead Full Stack Developer',
      description: 'Experienced and certified full stack developer specializing in building scalable web applications and modern digital solutions.',
      photo: saanjaliPhoto,
      expertise: ['Full-Stack', 'React', 'Node.js', 'Cloud'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'saanjalibelgavi@gmail.com'
      },
      portfolio: 'https://saanjalibelgavi.web.app/'
    },
    {
      name: 'Rohit Shivsharan Subhedar',
      role: 'AI/ML Developer',
      description: 'AI and Machine Learning specialist developing intelligent solutions using cutting-edge technologies and modern ML frameworks.',
      photo: rohitPhoto,
      expertise: ['AI/ML', 'Python', 'Deep Learning', 'Data Science'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'saanjalibelgavi@gmail.com'
      }
    }
  ];

  return (
    <section id="team" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #EAF2FF 0%, #F5FAFF 50%, #F7F9FF 100%)' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#6A5DFF] to-[#00D4FF] rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#00D4FF] to-[#6A5DFF] rounded-full opacity-15 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#6A5DFF] rounded-full opacity-60 animate-float shadow-lg shadow-[#6A5DFF]/50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#00D4FF] rounded-full opacity-70 animate-float shadow-lg shadow-[#00D4FF]/50" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-5 h-5 bg-[#6A5DFF] rounded-full opacity-50 animate-float shadow-lg shadow-[#6A5DFF]/50" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B0F19] mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#00D4FF] to-[#6A5DFF] bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-bounce-in border-2 border-transparent hover:border-[#00D4FF] hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6A5DFF] p-1 group-hover:scale-110 transition-all duration-500 shadow-lg animate-glow">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-heading font-bold text-[#0B0F19] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00D4FF] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-[#00D4FF]/10 to-[#6A5DFF]/10 text-[#00D4FF] text-xs font-semibold rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-[#EAF2FF]">
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#F5FAFF] rounded-lg flex items-center justify-center text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#6A5DFF] hover:text-white transition-all duration-300"
                    aria-label="Portfolio"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                )}
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-[#F5FAFF] rounded-lg flex items-center justify-center text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#6A5DFF] hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-[#F5FAFF] rounded-lg flex items-center justify-center text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#6A5DFF] hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-[#F5FAFF] rounded-lg flex items-center justify-center text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#6A5DFF] hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
