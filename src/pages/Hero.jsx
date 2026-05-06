import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import { FaClock, FaRocket, FaSmile, FaLaptopCode } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import me from "../images/me.jpeg";
import { DiCss3 } from "react-icons/di";

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
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        } else {
          if (charIndex < currentRole.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
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

  const rotatingItems = useMemo(
    () => [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiExpress, name: "Express", color: "#FFFFFF" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: DiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiGit, name: "Git", color: "#F05032" },
    ],
    [],
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center mt-[px] justify-center relative overflow-hidden"
      style={{ paddingTop: "14px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-black dark:from-black dark:via-black dark:to-black -z-10" />

      {/* Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
          style={{
            animation: "float1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-orange-600/20 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl"
          style={{
            animation: "float2 25s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10 w-full">
        {/* Mobile: Image First, Desktop: Image Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 flex justify-center items-center order-1 mt-12 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Outer Rotating Ring */}
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px]">
                <div
                  className="absolute inset-0"
                  style={{
                    animation: "spin-slow 20s linear infinite",
                  }}
                >
                  {rotatingItems.map((item, index) => {
                    const angle = (index / rotatingItems.length) * 360;
                    const radius = window.innerWidth >= 1024 ? 160 : 130;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 group"
                        style={{
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                        }}
                      >
                        <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border border-gray-200 dark:border-white/20 hover:shadow-xl transition-all hover:scale-110">
                          <Icon
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6"
                            style={{ color: item.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Middle Rotating Ring */}
              <div
                className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-dashed border-blue-400/30 dark:border-blue-400/20"
                style={{
                  animation: "spin-slow-reverse 15s linear infinite",
                }}
              />

              {/* Inner Rotating Ring */}
              <div
                className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[340px] lg:h-[340px] rounded-full border border-purple-400/20 dark:border-purple-400/10"
                style={{
                  animation: "spin-slow 10s linear infinite",
                }}
              />

              {/* Glow Effect */}
              <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />

              {/* Main Image Container */}
              <div className="relative  z-10">
                <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl shadow-blue-500/25">
                  <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden relative">
                    <img
                      src={me}
                      loading="lazy"
                      alt="Sunil Tariq"
                      className="w-full  h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t  from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Floating Badges */}
                <div
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-white dark:bg-gray-900 rounded-lg px-1.5 py-1 sm:px-2 sm:py-1.5 lg:px-3 lg:py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                  style={{
                    animation: "float1 3s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center gap-1">
                    <SiReact className="text-blue-500 text-xs sm:text-sm lg:text-lg" />
                    <span className="hidden sm:inline text-xs lg:text-sm font-semibold dark:text-white">
                      React
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 bg-white dark:bg-gray-900 rounded-lg px-1.5 py-1 sm:px-2 sm:py-1.5 lg:px-3 lg:py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                  style={{
                    animation: "float2 3.5s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center gap-1">
                    <SiNodedotjs className="text-green-600 text-xs sm:text-sm lg:text-lg" />
                    <span className="hidden sm:inline text-xs lg:text-sm font-semibold dark:text-white">
                      Node.js
                    </span>
                  </div>
                </div>

                <div
                  className="hidden lg:flex absolute top-1/2 -right-6 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm z-20"
                  style={{
                    animation: "pulse-slow 2s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <SiMongodb className="text-green-500 text-lg" />
                    <span className="text-sm font-semibold dark:text-white">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile pe baad mein (order-2), Desktop pe left (order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-full mb-2 border border-green-500/20">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium  text-green-600 dark:text-green-400">
                  Available for work
                </span>
              </div>

              {/* Name */}
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

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="relative group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-200 dark:border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                      <Icon
                        size={26}
                        className="mb-2 mx-auto text-blue-500 group-hover:scale-110 transition"
                      />
                      <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base"
              >
                Get In Touch <FiArrowRight className="inline ml-1" />
              </a>

              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold text-sm sm:text-base"
              >
                View Projects
              </a>

              <a
                href="/Sunil_Tariq_Web_Developer_CV.pdf"
                download
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-base inline-flex items-center gap-2"
              >
                <FiDownload /> Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-8"
            >
              {[
                { icon: FiGithub, url: "https://github.com/SunilTariq-WebDeveloper" },
                { icon: FiLinkedin, url: "https://www.linkedin.com/in/sunil-tariq-7298523a0/" },
                { icon: FiMail, url: "mailto:suniltariq08@gmail.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all">
                      <Icon className="text-gray-700 dark:text-gray-300 text-base sm:text-lg" />
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero;