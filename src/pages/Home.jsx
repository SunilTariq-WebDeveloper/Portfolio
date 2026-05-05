import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download, MapPin, Briefcase, Calendar } from 'react-icons/all';
import personalImage from '../assets/personal-image.jpg'; // Add your image to assets folder

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-indigo-600 font-semibold tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Sunil Tariq
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                MERN Stack Developer
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              I craft beautiful, scalable, and high-performance web applications 
              using the MERN stack. With 4+ years of experience, I turn ideas into 
              digital reality with clean code and elegant design.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">Available for Freelance</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">4+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold transition-all"
              >
                View Work
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Personal Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-50 blur-2xl animate-pulse" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-60" />
              
              {/* Image Container */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-indigo-100">
                <img 
                  src={personalImage}
                  alt="Sunil Tariq"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">Open for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-200">
          {[
            { number: '40+', label: 'Projects Completed' },
            { number: '25+', label: 'Happy Clients' },
            { number: '4+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;