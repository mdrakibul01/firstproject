import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { Code2, Linkedin, Twitter, Github } from 'lucide-react';

export default function Root() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Outlet />

      {/* Footer */}
      <footer className="py-10 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Rakibul Hasan
              </span>
            </div>

            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 Rakibul Hasan. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/mdrakibul01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
