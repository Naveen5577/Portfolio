import React from 'react';
import { ExternalLink, Github, Star, Users, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      stats: { stars: 245, users: '1.2k', timeline: '3 months' },
      links: { github: '#', demo: '#' }
    },
    {
      title: 'AI Task Management',
      description: 'Intelligent task management application with AI-powered prioritization, natural language processing, and smart scheduling capabilities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Framer Motion'],
      stats: { stars: 189, users: '850', timeline: '2 months' },
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reports for business intelligence.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'WebSocket'],
      stats: { stars: 156, users: '650', timeline: '4 months' },
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application for social networking with real-time messaging, media sharing, and user engagement features.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io', 'Node.js'],
      stats: { stars: 203, users: '2.1k', timeline: '5 months' },
      links: { github: '#', demo: '#' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of innovative applications and solutions built with modern technologies 
              and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star size={16} className="mr-1" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {project.stats.users}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {project.stats.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              <span>View All Projects</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;