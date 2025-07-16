import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">P</span>
              </div>
              <span className="font-medium text-black dark:text-white">Portfolio</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building beautiful digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-black dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
                Blog
              </a>
              <a href="/about" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-black dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}