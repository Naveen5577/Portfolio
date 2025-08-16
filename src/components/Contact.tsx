import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pnaveenraja1@gmail.com',
      link: 'mailto:pnaveenraja1@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9392006506',
      link: '#'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#'
    },
    {
      icon: Globe,
      title: 'Portfolio',
      value: 'naveenraja.dev',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Naveen5577', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pogula-naveen-raja-7427a8300', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:pnaveenraja1@gmail.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 ${social.color} hover:shadow-lg hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
                <p className="mb-4 opacity-90">
                  Let's discuss your project and explore how we can work together.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Quick Response</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Professional</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;