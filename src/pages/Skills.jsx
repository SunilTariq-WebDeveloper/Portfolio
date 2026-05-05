import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5, 
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      gradient: "from-[#6366f1] to-[#8b5cf6]",
      glow: "shadow-indigo-500/20",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      gradient: "from-[#10b981] to-[#14b8a6]",
      glow: "shadow-emerald-500/20",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Auth"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      gradient: "from-[#f43f5e] to-[#fb923c]",
      glow: "shadow-rose-500/20",
      skills: [
        "Git & GitHub",
        "AWS",
        "Vercel",
        "Netlify",
        "Postman",
        "VS Code",
        "GoDaddy",
        "NameCheap",
        "Render"

      ]
    }
  ];
const techStack = [
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "HTML", icon: SiHtml5, color: "#e34c26" },
  { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { name: "Javascript", icon: SiJavascript, color: "#f0db4f" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
];
  const softSkills = [
    "💡 Problem Solving",
    "🤝 Team Collaboration",
    "🚀 Fast Learner",
    "💬 Communication",
    "🎯 Detail Oriented",
    "⏰ Time Management",
    "🔍 Analytical Thinking",
    "📢 Leadership"
  ];

  return (
    <section
      id="skills"
      className="relative py-16 overflow-hidden bg-white dark:bg-black"
    >
      {/* Animated Background - Dark Mode Only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50">
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                My Expertise
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Technical Skills
            </span>
          </h2>

          <div className="flex justify-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Crafting digital experiences with modern technologies and creative
            solutions
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className={`relative h-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 ${category.glow}`}
              >
                {/* Card Content */}
                <div className="relative p-6">
                  {/* Card Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      <div
                        className={`text-5xl mb-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-10 dark:bg-opacity-5`}
                      >
                        {category.icon}
                      </div>
                    </motion.div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                    <div
                      className={`w-12 h-0.5 bg-gradient-to-r ${category.gradient} mx-auto mt-3 rounded-full`}
                    />
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: catIndex * 0.1 + skillIndex * 0.02,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group/skill px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer relative overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                      >
                        <span className="relative text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Tech Stack Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Core technologies I specialize in
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4 mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon; // ✅ IMPORTANT

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group"
                >
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {/* ✅ ICON FIX */}
                    <div
                      className="mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ textShadow: `0 0 20px ${tech.color}40` }}
                    >
                      <Icon size={30} color={tech.color} />
                    </div>

                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>

                    <div className="w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-full transition-all duration-300 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl bg-gray-50 dark:bg-black p-8 border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Decorative Elements - Dark Mode */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-full blur-2xl" />

            <div className="relative text-center mb-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Soft Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Qualities that define my work ethic
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.03, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <span className="relative text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;