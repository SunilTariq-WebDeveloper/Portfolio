// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }

//       // Calculate scroll progress
//       const winScroll = document.documentElement.scrollTop;
//       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setScrollProgress(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLinkClick = (href) => {
//     setMobileMenuOpen(false);
//     document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const navLinks = [
//     { name: 'Home', href: 'home' },
//     { name: 'About', href: 'about' },
//     { name: 'Skills', href: 'skills' },
//     { name: 'Projects', href: 'projects' },
//     { name: 'Contact', href: 'contact' },
//   ];

//   const socialLinks = [
//     { icon: FiGithub, url: "https://github.com/SunilTariq-WebDeveloper", label: "GitHub" },
//     {
//       icon: FiLinkedin,
//       url: "https://www.linkedin.com/in/sunil-tariq-7298523a0/",
//       label: "LinkedIn",
//     }
//   ];

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           scrolled
//             ? darkMode
//               ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
//               : "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
//             : darkMode
//               ? "bg-black/50 backdrop-blur-md border-b border-white/5"
//               : "bg-white/50 backdrop-blur-md border-b border-gray-200/50"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 lg:h-20">
//             {/* Logo */}
//             <motion.a
//               href="#home"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative group cursor-pointer"
//               onClick={() => handleLinkClick("home")}
//             >
//               <div className="flex items-center gap-2">
//                 <motion.div
//                   animate={{
//                     rotate: [0, 360],
//                   }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
//                 >
//                   <span className="text-white font-bold text-sm lg:text-base">
//                     ST
//                   </span>
//                 </motion.div>
//                 <div>
//                   <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     Sunil Tariq
//                   </span>
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
//                   />
//                 </div>
//               </div>
//             </motion.a>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-1 lg:gap-2">
//               {navLinks.map((link) => (
//                 <motion.a
//                   key={link.name}
//                   href={`#${link.href}`}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 ${
//                     activeSection === link.href
//                       ? darkMode
//                         ? "text-white bg-white/10 backdrop-blur-sm"
//                         : "text-blue-600 bg-blue-50"
//                       : darkMode
//                         ? "text-gray-400 hover:text-white hover:bg-white/5"
//                         : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <span className="flex items-center gap-2">
//                     <span className="text-lg">{link.icon}</span>
//                     {link.name}
//                   </span>
//                   {activeSection === link.href && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
//                         darkMode
//                           ? "bg-white"
//                           : "bg-gradient-to-r from-blue-600 to-purple-600"
//                       }`}
//                       transition={{
//                         type: "spring",
//                         stiffness: 380,
//                         damping: 30,
//                       }}
//                     />
//                   )}
//                 </motion.a>
//               ))}
//             </div>

//             {/* Right side buttons */}
//             <div className="flex items-center gap-2 sm:gap-3">
//               {/* Social Links - Desktop */}
//               <div className="hidden lg:flex items-center gap-1 mr-2">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-2 rounded-lg transition-all duration-300 ${
//                       darkMode
//                         ? "text-gray-400 hover:text-white hover:bg-white/10"
//                         : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
//                     }`}
//                     aria-label={social.label}
//                   >
//                     <social.icon className="w-4 h-4" />
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Resume Button */}
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="Sunil_Tariq_Web_Developer_CV.pdf"
//                 download
//                 className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
//                   darkMode
//                     ? "bg-white text-black hover:bg-gray-200"
//                     : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
//                 }`}
//               >
//                 <FiDownload className="w-4 h-4" />
//                 Resume
//               </motion.a>

//               {/* Dark Mode Toggle */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`relative p-2 rounded-xl transition-all duration-300 ${
//                   darkMode
//                     ? "bg-white/10 text-yellow-400 hover:bg-white/20"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 <AnimatePresence mode="wait">
//                   {darkMode ? (
//                     <motion.div
//                       key="sun"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiSun className="w-5 h-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="moon"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiMoon className="w-5 h-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
//                   darkMode
//                     ? "bg-white/10 text-white hover:bg-white/20"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {mobileMenuOpen ? (
//                   <FiX className="w-5 h-5" />
//                 ) : (
//                   <FiMenu className="w-5 h-5" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Progress Bar */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
//           style={{ width: `${scrollProgress}%` }}
//           transition={{ duration: 0.1 }}
//         />
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-16 lg:top-20 left-0 right-0 z-40 md:hidden"
//           >
//             <div
//               className={`mx-4 rounded-2xl overflow-hidden shadow-2xl ${
//                 darkMode
//                   ? "bg-black/95 backdrop-blur-xl border border-white/10"
//                   : "bg-white/95 backdrop-blur-xl border border-gray-200"
//               }`}
//             >
//               <div className="py-2">
//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={link.name}
//                     href={`#${link.href}`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     onClick={() => handleLinkClick(link.href)}
//                     className={`flex items-center gap-3 px-6 py-4 text-base font-medium transition-all duration-300 ${
//                       activeSection === link.href
//                         ? darkMode
//                           ? "text-white bg-white/10"
//                           : "text-blue-600 bg-blue-50"
//                         : darkMode
//                           ? "text-gray-400 hover:text-white hover:bg-white/5"
//                           : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <span className="text-xl">{link.icon}</span>
//                     {link.name}
//                     {activeSection === link.href && (
//                       <motion.div
//                         layoutId="mobileActiveSection"
//                         className={`ml-auto w-1 h-6 rounded-full ${
//                           darkMode
//                             ? "bg-white"
//                             : "bg-gradient-to-r from-blue-600 to-purple-600"
//                         }`}
//                       />
//                     )}
//                   </motion.a>
//                 ))}

//                 <div className="border-t my-2" />

//                 {/* Mobile Social Links */}
//                 <div className="px-6 py-3">
//                   <p
//                     className={`text-xs font-medium mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
//                   >
//                     CONNECT WITH ME
//                   </p>
//                   <div className="flex gap-3">
//                     {socialLinks.map((social, index) => (
//                       <motion.a
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`p-2 rounded-lg transition-all duration-300 ${
//                           darkMode
//                             ? "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"
//                             : "bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200"
//                         }`}
//                         aria-label={social.label}
//                       >
//                         <social.icon className="w-5 h-5" />
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Mobile Resume Button */}
//                 <div className="px-6 pb-4">
//                   <motion.a
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.25 }}
//                     href="/resume.pdf"
//                     download
//                     className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
//                       darkMode
//                         ? "bg-white text-black hover:bg-gray-200"
//                         : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
//                     }`}
//                   >
//                     <FiDownload className="w-4 h-4" />
//                     Download Resume
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Particle Effect for Dark Mode */}
//       {darkMode && (
//         <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//               }}
//               animate={{
//                 y: [null, -100],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 5 + 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      url: "https://github.com/SunilTariq-WebDeveloper",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/sunil-tariq-7298523a0/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              : "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
            : darkMode
              ? "bg-black/50 backdrop-blur-md border-b border-white/5"
              : "bg-white/50 backdrop-blur-md border-b border-gray-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer flex-shrink-0"
              onClick={() => handleLinkClick("home")}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm lg:text-base">
                    ST
                  </span>
                </motion.div>
                <div className="hidden sm:block">
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Sunil Tariq
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={`#${link.href}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? darkMode
                        ? "text-white bg-white/10 backdrop-blur-sm"
                        : "text-blue-600 bg-blue-50"
                      : darkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">{link.name}</span>
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        darkMode
                          ? "bg-white"
                          : "bg-gradient-to-r from-blue-600 to-purple-600"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center gap-1 mr-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Resume Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="Sunil_Tariq_Web_Developer_CV.pdf"
                download
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                }`}
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </motion.a>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`relative p-2 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiSun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMoon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button - Fixed positioning */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.nav>

      {/* Mobile Menu - Fixed positioning */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 right-0 bottom-0 z-40 md:hidden overflow-y-auto"
            >
              <div
                className={`min-h-full mx-4 my-2 rounded-2xl overflow-hidden shadow-2xl ${
                  darkMode
                    ? "bg-black/95 backdrop-blur-xl border border-white/10"
                    : "bg-white/95 backdrop-blur-xl border border-gray-200"
                }`}
              >
                <div className="py-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={`#${link.href}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleLinkClick(link.href)}
                      className={`flex items-center gap-3 px-6 py-4 text-base font-medium transition-all duration-300 ${
                        activeSection === link.href
                          ? darkMode
                            ? "text-white bg-white/10"
                            : "text-blue-600 bg-blue-50"
                          : darkMode
                            ? "text-gray-400 hover:text-white hover:bg-white/5"
                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      {activeSection === link.href && (
                        <motion.div
                          layoutId="mobileActiveSection"
                          className={`ml-auto w-1 h-6 rounded-full ${
                            darkMode
                              ? "bg-white"
                              : "bg-gradient-to-r from-blue-600 to-purple-600"
                          }`}
                        />
                      )}
                    </motion.a>
                  ))}

                  <div className="border-t my-2" />

                  {/* Mobile Social Links */}
                  <div className="px-6 py-3">
                    <p
                      className={`text-xs font-medium mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                    >
                      CONNECT WITH ME
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            darkMode
                              ? "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"
                              : "bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200"
                          }`}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Resume Button */}
                  <div className="px-6 pb-4">
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      href="Sunil_Tariq_Web_Developer_CV.pdf"
                      download
                      className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        darkMode
                          ? "bg-white text-black hover:bg-gray-200"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      }`}
                    >
                      <FiDownload className="w-4 h-4" />
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Particle Effect for Dark Mode */}
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;