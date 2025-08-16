import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-12 w-80 h-80 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-4xl font-bold text-white">NR</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
            P. Naveen Raja
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Developer passionate about building efficient solutions 
            and creating impactful digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">Developer</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">Problem Solver</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">Tech Enthusiast</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">Innovator</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { Icon: Github, href: 'https://github.com/Naveen5577', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/pogula-naveen-raja-7427a8300', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:pnaveenraja1@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            <span>Explore My Work</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;