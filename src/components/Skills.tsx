import React from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu,
  Layers,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'PWA Development', level: 90 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      category: 'AI & Modern Tech',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AI Integration', level: 95 },
        { name: 'API Development', level: 90 },
        { name: 'Cloud Platforms', level: 85 },
        { name: 'DevOps', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Code2 },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Palette },
    { name: 'Docker', icon: Layers },
    { name: 'AWS', icon: Globe },
    { name: 'Vercel', icon: Globe }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building 
              exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <tool.icon size={32} className="text-gray-600 mb-3" />
                  <span className="font-medium text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;