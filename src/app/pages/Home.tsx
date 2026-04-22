import { Link } from 'react-router';
import { Sparkles, ArrowRight, ChevronDown, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const skills = [
    'React.js', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'Express.js', 'REST APIs', 'GraphQL',
    'Git', 'Docker', 'AWS', 'Figma', 'Responsive Design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Home Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Available for freelance work
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Rakibul Hasan
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Full Stack Web Developer
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                I craft beautiful, functional web experiences with modern technologies.
                Passionate about clean code, exceptional user experience, and continuous learning.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)', fontFamily: 'Inter, sans-serif' }}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl font-medium transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Skills Grid */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-default"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>
    </div>
  );
}
