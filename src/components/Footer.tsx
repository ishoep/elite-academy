import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@academiaelite.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Education Ave, Knowledge City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="/admissions" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="/campus-life" className="hover:text-blue-400 transition-colors">Campus Life</a></li>
              <li><a href="/research" className="hover:text-blue-400 transition-colors">Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/library" className="hover:text-blue-400 transition-colors">Library</a></li>
              <li><a href="/student-portal" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/alumni" className="hover:text-blue-400 transition-colors">Alumni</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Academia Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;