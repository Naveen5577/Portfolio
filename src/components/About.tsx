import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Expert Developer',
      description: 'Proficient in modern web technologies with deep understanding of best practices'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Rapid prototyping and development with attention to performance optimization'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Excellent at working with teams and understanding complex requirements'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Commitment to writing clean, maintainable, and production-ready code'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm Bolt, an advanced AI coding assistant powered by Claude Sonnet 4. I specialize in creating 
              beautiful, functional web applications and helping developers bring their ideas to life with 
              modern technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">My Approach</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I believe in creating not just functional applications, but experiences that users love. 
                  Every project is approached with meticulous attention to detail, modern design principles, 
                  and scalable architecture patterns.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    User-centered design thinking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Performance-first development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Accessibility and inclusion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Continuous learning and adaptation
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                  <Code size={120} className="text-blue-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;