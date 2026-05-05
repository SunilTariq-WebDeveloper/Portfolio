import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaClock, FaRocket, FaSmile, FaLaptopCode } from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,  
  SiJavascript,
  SiHtml5,
  SiGit
} from 'react-icons/si';
import me from '../images/me.jpeg';
import { DiCss3 } from 'react-icons/di';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = useMemo(
    () => [
      "MERN Stack Developer",
      "Full Stack Web Developer",
      "React Specialist",
      "Node.js Expert",
    ],
    [],
  );
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        const timer = setTimeout(() => setCharIndex(charIndex - 1), 50);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        const timer = setTimeout(() => setCharIndex(charIndex + 1), 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [charIndex, isDeleting, roleIndex, roles]);

  useEffect(() => {
    setTypedText(roles[roleIndex].substring(0, charIndex));
  }, [charIndex, roleIndex, roles]);
const stats = [
  { value: "1+", label: "Years Experience", icon: FaClock },
  { value: "4+", label: "Projects Completed", icon: FaRocket },
  { value: "4+", label: "Happy Clients", icon: FaSmile },
  { value: "10+", label: "Technologies", icon: FaLaptopCode },
];
  // Rotating content items - all valid icons
  const rotatingItems = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiExpress, name: "Express", color: "#FFFFFF" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    // { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    // { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: DiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    // { icon: SiDocker, name: "Docker", color: "#2496ED" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Pure Black Dark Mode Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-black dark:from-black dark:via-black dark:to-black -z-10" />

      {/* Premium Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, -100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-orange-600/20 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-full mb-6 border border-green-500/20">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available for work
                </span>
              </div>

              {/* Name with Glow Effect */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  Sunil Tariq
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="h-16 mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400">
                  I'm a{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold relative">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute -right-2 top-0 inline-block w-0.5 h-6 sm:h-8 bg-blue-600 dark:bg-blue-400"
                    />
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-base sm:text-lg">
                Building scalable web applications with modern MERN stack
                technologies. Passionate about creating elegant solutions that
                solve real-world problems.
              </p>
            </motion.div>

            {/* Stats Section - Premium Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-200 dark:border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                      {/* ICON FIX */}
                      <Icon
                        size={26}
                        className="mb-2 mx-auto text-blue-500 group-hover:scale-110 transition"
                      />

                      <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      >
                        {stat.value}
                      </motion.p>

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all text-sm sm:text-base"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sunil_Tariq_Web_Developer_CV.pdf"
                download
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <FiDownload /> Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-8"
            >
              {[
                {
                  icon: FiGithub,
                  url: "https://github.com/SunilTariq-WebDeveloper",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  url: "https://www.linkedin.com/in/sunil-tariq-7298523a0/?isSelfProfile=true",
                  label: "LinkedIn",
                },

                {
                  icon: FiMail,
                  url: "mailto:suniltariq08@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      <Icon className="text-gray-700 dark:text-gray-300 text-base sm:text-lg group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image - Fixed Alignment with Rotating Ring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Rotating Ring with Icons */}
              <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  {rotatingItems.map((item, index) => {
                    const angle = (index / rotatingItems.length) * 360;
                    const radius = 160;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 group"
                        style={{
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border border-gray-200 dark:border-white/20 hover:shadow-xl transition-all">
                          <Icon
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            style={{ color: item.color }}
                          />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded">
                            {item.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Middle Rotating Ring - Opposite Direction */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-dashed border-blue-400/30 dark:border-blue-400/20"
              />

              {/* Inner Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full border border-purple-400/20 dark:border-purple-400/10"
              />

              {/* Glow Effect */}
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />

              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl shadow-blue-500/25">
                  <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden relative">
                    <img
                      src={me}
                      alt="Sunil Tariq - MERN Stack Developer"
                      className="w-full  h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                >
                  <div className="flex items-center gap-2">
                    <SiReact className="text-blue-500 text-lg sm:text-xl animate-spin-slow" />
                    <span className="text-xs sm:text-sm font-semibold dark:text-white">
                      React
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                >
                  <div className="flex items-center gap-2">
                    <SiNodedotjs className="text-green-600 text-lg sm:text-xl" />
                    <span className="text-xs sm:text-sm font-semibold dark:text-white">
                      Node.js
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 -right-6 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                >
                  <div className="flex items-center gap-2">
                    <SiMongodb className="text-green-500 text-lg sm:text-xl" />
                    <span className="text-xs sm:text-sm font-semibold dark:text-white">
                      MongoDB
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;