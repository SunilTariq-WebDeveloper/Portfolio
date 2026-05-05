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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "home", icon: "🏠" },
    { name: "About", href: "about", icon: "👤" },
    { name: "Skills", href: "skills", icon: "💪" },
    { name: "Projects", href: "projects", icon: "🚀" },
    { name: "Contact", href: "contact", icon: "📧" },
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
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              : "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
            : darkMode
              ? "bg-black/50 backdrop-blur-md border-b border-white/5"
              : "bg-white/50 backdrop-blur-md border-b border-gray-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo - Left Side */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-xs sm:text-sm lg:text-base">
                    ST
                  </span>
                </motion.div>
                <span className="hidden xs:inline-block text-sm sm:text-base lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
                  Sunil Tariq
                </span>
                <span className="xs:hidden text-xs font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sunil
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={`#${link.href}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-2 lg:px-4 py-1.5 lg:py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === link.href
                      ? darkMode
                        ? "text-white bg-white/10 backdrop-blur-sm"
                        : "text-blue-600 bg-blue-50"
                      : darkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-1 lg:gap-2">
                    <span className="text-base">{link.icon}</span>
                    <span className="hidden lg:inline">{link.name}</span>
                  </span>
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

            {/* Right side buttons - Fixed for mobile */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button - Fixed position */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {mobileMenuOpen ? (
                  <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMenu className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.nav>

      {/* Mobile Menu - Slide from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[280px] z-50 md:hidden"
            >
              <div
                className={`h-full w-full rounded-l-2xl overflow-y-auto shadow-2xl ${
                  darkMode
                    ? "bg-black/98 backdrop-blur-xl border-l border-white/10"
                    : "bg-white/98 backdrop-blur-xl border-l border-gray-200"
                }`}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-white/10 sticky top-0 bg-inherit">
                  <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-lg transition-all ${
                      darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                    }`}
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                <div className="py-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={`#${link.href}`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`flex items-center gap-3 px-5 py-3 text-base font-medium transition-all duration-300 cursor-pointer ${
                        activeSection === link.href
                          ? darkMode
                            ? "text-white bg-white/10"
                            : "text-blue-600 bg-blue-50"
                          : darkMode
                            ? "text-gray-400 hover:text-white hover:bg-white/5"
                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span>{link.name}</span>
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

                  <div className="border-t my-3 mx-4 border-gray-200 dark:border-white/10" />

                  {/* Social Links */}
                  <div className="px-5 py-2">
                    <p
                      className={`text-xs font-medium mb-3 uppercase tracking-wider ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Connect
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
                        >
                          <social.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Resume Button */}
                  <div className="px-5 pb-5 mt-4">
                    <motion.a
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      href="Sunil_Tariq_Web_Developer_CV.pdf"
                      download
                      className={`flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                        darkMode
                          ? "bg-white text-black hover:bg-gray-200"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      }`}
                    >
                      <FiDownload className="w-3.5 h-3.5" />
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
