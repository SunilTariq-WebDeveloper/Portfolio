import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiJavascript, SiHtml5
} from 'react-icons/si';
import { 
  HiMail, HiLocationMarker, HiPhone, HiCalendar 
} from 'react-icons/hi';
import { 
  FaGithub, FaLinkedin, FaTwitter 
} from 'react-icons/fa';
import { 
  MdWork, MdPeople, MdCode, MdVerified 
} from 'react-icons/md';
import { DiCss3 } from 'react-icons/di';
import me from '../images/me.jpeg';

const About = () => {
  const personalInfo = [
    { icon: HiMail, label: "Email", value: "suniltariq08@gmail.com", color: "text-blue-600" },
    { icon: HiPhone, label: "Phone", value: "+92 325 1987313", color: "text-green-600" },
    { icon: HiLocationMarker, label: "Location", value: "Lahore, Pakistan", color: "text-purple-600" },
    { icon: HiCalendar, label: "Experience", value: "1+ Years", color: "text-orange-600" },
  ];

  const skillsList = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, 
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: DiCss3, color: "#1572B6" },
  ];



  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Profile Image for Mobile */}
            <div className="flex justify-center mb-8 lg:hidden">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden">
                    <img
                      src={me}
                      alt="Sunil Tariq"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Sunil Tariq</span>, 
              a passionate <span className="font-semibold">MERN Stack Developer</span> with 1+ year of experience building 
              full-stack web applications. I specialize in creating responsive, 
              scalable, and user-friendly solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              My journey in web development started with a curiosity for how websites 
              work, and it quickly turned into a passion. I love solving complex problems 
              and continuously learning new technologies to stay at the forefront of 
              web development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical blogs, or exploring new technologies in the JavaScript ecosystem.
            </p>
            
            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Icon className={`${info.color} text-xl`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-sm font-medium dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">Connect with me</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/suniltariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group"
                >
                  <FaGithub className="text-gray-700 dark:text-gray-400 group-hover:text-white text-lg" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://linkedin.com/in/suniltariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group"
                >
                  <FaLinkedin className="text-gray-700 dark:text-gray-400 group-hover:text-white text-lg" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://twitter.com/suniltariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group"
                >
                  <FaTwitter className="text-gray-700 dark:text-gray-400 group-hover:text-white text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Skills without percentages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image for Desktop */}
            <div className="hidden lg:flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden">
                    <img
                      src={me}
                      alt="Sunil Tariq"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillsList.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white dark:bg-white/5 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10 group cursor-pointer"
                  >
                    <Icon 
                      className="w-10 h-10 mx-auto mb-2 transition-transform group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <p className="text-sm font-medium dark:text-white">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;