import { ArrowRight, Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
              <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Have a project in mind? Let's create something amazing together
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-900 font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-900 font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-900 font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)', fontFamily: 'Inter, sans-serif' }}
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Or reach me directly at:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a
                    href="mailto:rakibul@example.com"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Mail className="w-5 h-5" />
                    rakibul@example.com
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://github.com/mdrakibul01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Github className="w-5 h-5" />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
