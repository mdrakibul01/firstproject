import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, real-time inventory management, and comprehensive admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      status: 'Live'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced analytics',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      link: '#',
      status: 'In Progress'
    },
    {
      title: 'Portfolio CMS',
      description: 'Custom content management system for portfolios with intuitive drag-and-drop interface and dynamic theming',
      tech: ['React', 'Express', 'PostgreSQL'],
      link: '#',
      status: 'Live'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring application with beautiful data visualizations and location-based forecasts',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      link: '#',
      status: 'Live'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for tracking social media performance across multiple channels',
      tech: ['Next.js', 'TypeScript', 'GraphQL', 'Redis'],
      link: '#',
      status: 'Live'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by AI with natural language processing and contextual understanding',
      tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
      link: '#',
      status: 'Beta'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
              <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              A collection of my work showcasing web development, design, and problem-solving skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: project.status === 'Live' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' :
                                  project.status === 'Beta' ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' :
                                  'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                      color: 'white'
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
