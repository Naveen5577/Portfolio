import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'India',
      period: '2023 - Present',
      description: 'Working on web development projects using modern technologies. Focused on creating efficient and user-friendly applications.',
      achievements: [
        'Developed responsive web applications',
        'Improved code quality and performance',
        'Collaborated with cross-functional teams',
        'Delivered projects on time'
      ],
      skills: ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Git']
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Solutions',
      location: 'India',
      period: '2022 - 2023',
      description: 'Started career in software development, learning modern web technologies and contributing to various projects.',
      achievements: [
        'Built first web application',
        'Learned multiple programming languages',
        'Contributed to team projects',
        'Gained experience in agile development'
      ],
      skills: ['Python', 'JavaScript', 'MySQL', 'REST APIs', 'Problem Solving']
    },
    {
      role: 'Computer Science Student',
      company: 'University',
      location: 'India',
      period: '2020 - 2022',
      description: 'Studied computer science fundamentals and gained hands-on experience through academic projects and internships.',
      achievements: [
        'Completed degree with good grades',
        'Built several academic projects',
        'Participated in coding competitions',
        'Developed strong programming foundation'
      ],
      skills: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Database Management']
    }
  ];

  const certifications = [
    { name: 'JavaScript Certification', issuer: 'FreeCodeCamp', year: '2023' },
    { name: 'React Development', issuer: 'Coursera', year: '2023' },
    { name: 'Python Programming', issuer: 'Udemy', year: '2022' },
    { name: 'Web Development', issuer: 'Online Academy', year: '2022' }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Experience & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in software development, from learning fundamentals 
              to building real-world applications.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Professional Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-800 mb-2 flex items-center">
                          <Award size={16} className="mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                              <TrendingUp size={14} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">Certifications & Awards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-blue-600 font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;