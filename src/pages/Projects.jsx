// // // // // // // import React, { useState } from 'react';
// // // // // // // import { motion } from 'framer-motion';
// // // // // // // import { FiGithub, FiExternalLink } from 'react-icons/fi';

// // // // // // // const Projects = () => {
// // // // // // //   const [filter, setFilter] = useState('all');

// // // // // // //   const projects = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       title: "E-Commerce Platform",
// // // // // // //       category: "fullstack",
// // // // // // //       description: "Full-featured e-commerce platform with product management, cart, payment integration.",
// // // // // // //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// // // // // // //       image: "🛒",
// // // // // // //       gradient: "from-blue-500 to-cyan-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       title: "Task Management System",
// // // // // // //       category: "fullstack",
// // // // // // //       description: "Collaborative project management tool with real-time updates and team collaboration.",
// // // // // // //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// // // // // // //       image: "✅",
// // // // // // //       gradient: "from-purple-500 to-pink-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       title: "Social Media Dashboard",
// // // // // // //       category: "frontend",
// // // // // // //       description: "Analytics dashboard for social media managers with data visualization.",
// // // // // // //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// // // // // // //       image: "📊",
// // // // // // //       gradient: "from-orange-500 to-red-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       title: "Healthcare Portal",
// // // // // // //       category: "fullstack",
// // // // // // //       description: "Patient management system with appointment scheduling and medical records.",
// // // // // // //       tech: ["React", "Node.js", "Express", "MongoDB"],
// // // // // // //       image: "🏥",
// // // // // // //       gradient: "from-green-500 to-emerald-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 5,
// // // // // // //       title: "AI Content Generator",
// // // // // // //       category: "frontend",
// // // // // // //       description: "AI-powered content generation tool using OpenAI API.",
// // // // // // //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// // // // // // //       image: "🤖",
// // // // // // //       gradient: "from-rose-500 to-pink-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 6,
// // // // // // //       title: "Portfolio Website",
// // // // // // //       category: "frontend",
// // // // // // //       description: "Modern portfolio website with smooth animations and responsive design.",
// // // // // // //       tech: ["React", "Tailwind", "Framer Motion"],
// // // // // // //       image: "🎨",
// // // // // // //       gradient: "from-indigo-500 to-purple-500",
// // // // // // //       liveLink: "https://example.com",
// // // // // // //       githubLink: "https://github.com"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const categories = [
// // // // // // //     { id: 'all', name: 'All' },
// // // // // // //     { id: 'fullstack', name: 'Full Stack' },
// // // // // // //     { id: 'frontend', name: 'Frontend' },
// // // // // // //   ];

// // // // // // //   const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

// // // // // // //   return (
// // // // // // //     <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //         {/* Section Header */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.6 }}
// // // // // // //           viewport={{ once: true }}
// // // // // // //           className="text-center mb-12"
// // // // // // //         >
// // // // // // //           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
// // // // // // //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // //               My Projects
// // // // // // //             </span>
// // // // // // //           </h2>
// // // // // // //           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
// // // // // // //           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // // // // // //             Some of my recent work
// // // // // // //           </p>
// // // // // // //         </motion.div>

// // // // // // //         {/* Filter Buttons */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.5 }}
// // // // // // //           viewport={{ once: true }}
// // // // // // //           className="flex justify-center gap-2 mb-10"
// // // // // // //         >
// // // // // // //           {categories.map((cat) => (
// // // // // // //             <button
// // // // // // //               key={cat.id}
// // // // // // //               onClick={() => setFilter(cat.id)}
// // // // // // //               className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
// // // // // // //                 filter === cat.id
// // // // // // //                   ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
// // // // // // //                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {cat.name}
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </motion.div>

// // // // // // //         {/* Projects Grid */}
// // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //           {filteredProjects.map((project, index) => (
// // // // // // //             <motion.div
// // // // // // //               key={project.id}
// // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.5, delay: index * 0.05 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               whileHover={{ y: -4 }}
// // // // // // //               className="group"
// // // // // // //             >
// // // // // // //               <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full">
// // // // // // //                 {/* Image */}
// // // // // // //                 <div className={`h-36 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
// // // // // // //                   <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
// // // // // // //                     {project.image}
// // // // // // //                   </span>
// // // // // // //                 </div>

// // // // // // //                 {/* Content */}
// // // // // // //                 <div className="p-4">
// // // // // // //                   <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
// // // // // // //                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
// // // // // // //                     {project.description}
// // // // // // //                   </p>

// // // // // // //                   {/* Tech Tags */}
// // // // // // //                   <div className="flex flex-wrap gap-1.5 mb-4">
// // // // // // //                     {project.tech.slice(0, 3).map((tech, idx) => (
// // // // // // //                       <span
// // // // // // //                         key={idx}
// // // // // // //                         className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
// // // // // // //                       >
// // // // // // //                         {tech}
// // // // // // //                       </span>
// // // // // // //                     ))}
// // // // // // //                     {project.tech.length > 3 && (
// // // // // // //                       <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
// // // // // // //                         +{project.tech.length - 3}
// // // // // // //                       </span>
// // // // // // //                     )}
// // // // // // //                   </div>

// // // // // // //                   {/* Buttons */}
// // // // // // //                   <div className="flex gap-2">
// // // // // // //                     <a
// // // // // // //                       href={project.liveLink}
// // // // // // //                       target="_blank"
// // // // // // //                       rel="noopener noreferrer"
// // // // // // //                       className="flex-1 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg font-medium text-center hover:shadow-md transition-all"
// // // // // // //                     >
// // // // // // //                       Demo
// // // // // // //                     </a>
// // // // // // //                     <a
// // // // // // //                       href={project.githubLink}
// // // // // // //                       target="_blank"
// // // // // // //                       rel="noopener noreferrer"
// // // // // // //                       className="flex-1 py-1.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
// // // // // // //                     >
// // // // // // //                       Code
// // // // // // //                     </a>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* GitHub Link */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           whileInView={{ opacity: 1 }}
// // // // // // //           transition={{ duration: 0.5, delay: 0.3 }}
// // // // // // //           viewport={{ once: true }}
// // // // // // //           className="text-center mt-10"
// // // // // // //         >
// // // // // // //           <a
// // // // // // //             href="https://github.com/suniltariq"
// // // // // // //             target="_blank"
// // // // // // //             rel="noopener noreferrer"
// // // // // // //             className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
// // // // // // //           >
// // // // // // //             <FiGithub className="text-lg" />
// // // // // // //             <span className="text-sm">View more on GitHub</span>
// // // // // // //           </a>
// // // // // // //         </motion.div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Projects;

// // // // // // import React, { useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import {
// // // // // //   FiGithub,
// // // // // //   FiExternalLink,
// // // // // //   FiArrowRight,
// // // // // //   FiCode,
// // // // // //   FiEye,
// // // // // // } from "react-icons/fi";

// // // // // // const Projects = () => {
// // // // // //   const [filter, setFilter] = useState("all");
// // // // // //   const [hoveredCard, setHoveredCard] = useState(null);

// // // // // //   const projects = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       title: "E-Commerce Platform",
// // // // // //       category: "fullstack",
// // // // // //       description:
// // // // // //         "Full-featured e-commerce platform with product management, cart, payment integration.",
// // // // // //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// // // // // //       image: "🛒",
// // // // // //       gradient: "from-blue-600 to-indigo-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 124, forks: 32 },
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       title: "Task Management System",
// // // // // //       category: "fullstack",
// // // // // //       description:
// // // // // //         "Collaborative project management tool with real-time updates and team collaboration.",
// // // // // //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// // // // // //       image: "✅",
// // // // // //       gradient: "from-purple-600 to-pink-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 89, forks: 23 },
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       title: "Social Media Dashboard",
// // // // // //       category: "frontend",
// // // // // //       description:
// // // // // //         "Analytics dashboard for social media managers with data visualization.",
// // // // // //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// // // // // //       image: "📊",
// // // // // //       gradient: "from-orange-500 to-red-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 67, forks: 18 },
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       title: "Healthcare Portal",
// // // // // //       category: "fullstack",
// // // // // //       description:
// // // // // //         "Patient management system with appointment scheduling and medical records.",
// // // // // //       tech: ["React", "Node.js", "Express", "MongoDB"],
// // // // // //       image: "🏥",
// // // // // //       gradient: "from-green-600 to-emerald-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 156, forks: 45 },
// // // // // //     },
// // // // // //     {
// // // // // //       id: 5,
// // // // // //       title: "AI Content Generator",
// // // // // //       category: "frontend",
// // // // // //       description: "AI-powered content generation tool using OpenAI API.",
// // // // // //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// // // // // //       image: "🤖",
// // // // // //       gradient: "from-rose-600 to-pink-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 203, forks: 51 },
// // // // // //     },
// // // // // //     {
// // // // // //       id: 6,
// // // // // //       title: "Portfolio Website",
// // // // // //       category: "frontend",
// // // // // //       description:
// // // // // //         "Modern portfolio website with smooth animations and responsive design.",
// // // // // //       tech: ["React", "Tailwind", "Framer Motion"],
// // // // // //       image: "🎨",
// // // // // //       gradient: "from-indigo-600 to-purple-600",
// // // // // //       liveLink: "https://example.com",
// // // // // //       githubLink: "https://github.com",
// // // // // //       stats: { stars: 45, forks: 12 },
// // // // // //     },
// // // // // //   ];

// // // // // //   const categories = [
// // // // // //     { id: "all", name: "All Projects", icon: "🎯" },
// // // // // //     { id: "fullstack", name: "Full Stack", icon: "⚡" },
// // // // // //     { id: "frontend", name: "Frontend", icon: "🎨" },
// // // // // //   ];

// // // // // //   const filteredProjects =
// // // // // //     filter === "all" ? projects : projects.filter((p) => p.category === filter);

// // // // // //   return (
// // // // // //     <section
// // // // // //       id="projects"
// // // // // //       className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
// // // // // //     >
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Animated Section Header */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           whileInView={{ opacity: 1 }}
// // // // // //           transition={{ duration: 0.8 }}
// // // // // //           viewport={{ once: true }}
// // // // // //           className="text-center mb-16"
// // // // // //         >
// // // // // //           <motion.div
// // // // // //             initial={{ scale: 0 }}
// // // // // //             whileInView={{ scale: 1 }}
// // // // // //             transition={{ duration: 0.5, type: "spring" }}
// // // // // //             className="inline-block mb-4"
// // // // // //           >
// // // // // //             <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
// // // // // //               <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // //                 ✨ Featured Work
// // // // // //               </span>
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //           <motion.h2
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             whileInView={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ delay: 0.2 }}
// // // // // //             className="text-4xl md:text-5xl font-bold mb-6"
// // // // // //           >
// // // // // //             <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
// // // // // //               Creative Projects
// // // // // //             </span>
// // // // // //           </motion.h2>

// // // // // //           <motion.p
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             whileInView={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ delay: 0.3 }}
// // // // // //             className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
// // // // // //           >
// // // // // //             Crafting digital experiences with modern technologies and innovative
// // // // // //             solutions
// // // // // //           </motion.p>
// // // // // //         </motion.div>

// // // // // //         {/* Modern Filter Buttons */}
// // // // // //         <motion.div
// // // // // //           initial={{ y: 20, opacity: 0 }}
// // // // // //           whileInView={{ y: 0, opacity: 1 }}
// // // // // //           transition={{ delay: 0.4 }}
// // // // // //           viewport={{ once: true }}
// // // // // //           className="flex justify-center mb-12"
// // // // // //         >
// // // // // //           <div className="inline-flex gap-2 p-1.5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
// // // // // //             {categories.map((cat) => (
// // // // // //               <button
// // // // // //                 key={cat.id}
// // // // // //                 onClick={() => setFilter(cat.id)}
// // // // // //                 className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
// // // // // //                   filter === cat.id
// // // // // //                     ? "text-white"
// // // // // //                     : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {filter === cat.id && (
// // // // // //                   <motion.div
// // // // // //                     layoutId="activeFilter"
// // // // // //                     className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
// // // // // //                       cat.id === "all"
// // // // // //                         ? "from-blue-600 to-purple-600"
// // // // // //                         : cat.id === "fullstack"
// // // // // //                           ? "from-purple-600 to-pink-600"
// // // // // //                           : "from-orange-600 to-red-600"
// // // // // //                     }`}
// // // // // //                     transition={{ type: "spring", duration: 0.5 }}
// // // // // //                   />
// // // // // //                 )}
// // // // // //                 <span className="relative z-10 flex items-center gap-2">
// // // // // //                   <span>{cat.icon}</span>
// // // // // //                   {cat.name}
// // // // // //                 </span>
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* Projects Grid - Modern Card Design */}
// // // // // //         <AnimatePresence mode="wait">
// // // // // //           <motion.div
// // // // // //             key={filter}
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -20 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
// // // // // //           >
// // // // // //             {filteredProjects.map((project, index) => (
// // // // // //               <motion.div
// // // // // //                 key={project.id}
// // // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 transition={{ delay: index * 0.1 }}
// // // // // //                 whileHover={{ y: -8 }}
// // // // // //                 onHoverStart={() => setHoveredCard(project.id)}
// // // // // //                 onHoverEnd={() => setHoveredCard(null)}
// // // // // //                 className="group relative"
// // // // // //               >
// // // // // //                 {/* Glow Effect */}
// // // // // //                 <div
// // // // // //                   className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
// // // // // //                 />

// // // // // //                 {/* Card Content */}
// // // // // //                 <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 h-full">
// // // // // //                   {/* Image Section with Overlay */}
// // // // // //                   <div className="relative h-48 overflow-hidden">
// // // // // //                     <div
// // // // // //                       className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90`}
// // // // // //                     />
// // // // // //                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

// // // // // //                     {/* Animated Icon */}
// // // // // //                     <motion.div
// // // // // //                       className="absolute inset-0 flex items-center justify-center"
// // // // // //                       animate={{
// // // // // //                         scale: hoveredCard === project.id ? 1.1 : 1,
// // // // // //                         rotate: hoveredCard === project.id ? 5 : 0,
// // // // // //                       }}
// // // // // //                       transition={{ duration: 0.3 }}
// // // // // //                     >
// // // // // //                       <span className="text-7xl filter drop-shadow-2xl">
// // // // // //                         {project.image}
// // // // // //                       </span>
// // // // // //                     </motion.div>

// // // // // //                     {/* Category Badge */}
// // // // // //                     <div className="absolute top-4 left-4">
// // // // // //                       <div className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
// // // // // //                         {project.category === "fullstack"
// // // // // //                           ? "⚡ Full Stack"
// // // // // //                           : "🎨 Frontend"}
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     {/* Stats Badge */}
// // // // // //                     <div className="absolute top-4 right-4">
// // // // // //                       <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center gap-1">
// // // // // //                         <FiCode className="text-xs" />
// // // // // //                         <span>{project.stats.stars}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Content */}
// // // // // //                   <div className="p-6">
// // // // // //                     <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // // // // //                       {project.title}
// // // // // //                     </h3>

// // // // // //                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
// // // // // //                       {project.description}
// // // // // //                     </p>

// // // // // //                     {/* Tech Stack */}
// // // // // //                     <div className="flex flex-wrap gap-2 mb-6">
// // // // // //                       {project.tech.map((tech, idx) => (
// // // // // //                         <motion.span
// // // // // //                           key={idx}
// // // // // //                           initial={{ scale: 0 }}
// // // // // //                           animate={{ scale: 1 }}
// // // // // //                           transition={{ delay: idx * 0.05 }}
// // // // // //                           className="px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800/50 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium border border-gray-200 dark:border-gray-700"
// // // // // //                         >
// // // // // //                           {tech}
// // // // // //                         </motion.span>
// // // // // //                       ))}
// // // // // //                     </div>

// // // // // //                     {/* Action Buttons */}
// // // // // //                     <div className="flex gap-3">
// // // // // //                       <motion.a
// // // // // //                         href={project.liveLink}
// // // // // //                         target="_blank"
// // // // // //                         rel="noopener noreferrer"
// // // // // //                         whileHover={{ scale: 1.05 }}
// // // // // //                         whileTap={{ scale: 0.95 }}
// // // // // //                         className={`flex-1 py-2.5 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
// // // // // //                       >
// // // // // //                         <FiEye className="text-sm" />
// // // // // //                         Live Demo
// // // // // //                       </motion.a>
// // // // // //                       <motion.a
// // // // // //                         href={project.githubLink}
// // // // // //                         target="_blank"
// // // // // //                         rel="noopener noreferrer"
// // // // // //                         whileHover={{ scale: 1.05 }}
// // // // // //                         whileTap={{ scale: 0.95 }}
// // // // // //                         className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
// // // // // //                       >
// // // // // //                         <FiGithub className="text-sm" />
// // // // // //                         Code
// // // // // //                       </motion.a>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Hover Border Effect */}
// // // // // //                   <div
// // // // // //                     className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-50 pointer-events-none transition-all duration-300 group-hover:border-${project.gradient.split("-")[1]}-500`}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </motion.div>
// // // // // //         </AnimatePresence>

// // // // // //         {/* View All Button */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ delay: 0.5 }}
// // // // // //           viewport={{ once: true }}
// // // // // //           className="text-center mt-16"
// // // // // //         >
// // // // // //           <motion.a
// // // // // //             href="https://github.com/suniltariq"
// // // // // //             target="_blank"
// // // // // //             rel="noopener noreferrer"
// // // // // //             whileHover={{ scale: 1.05 }}
// // // // // //             whileTap={{ scale: 0.95 }}
// // // // // //             className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all group"
// // // // // //           >
// // // // // //             <FiGithub className="text-xl" />
// // // // // //             <span>Explore More on GitHub</span>
// // // // // //             <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
// // // // // //           </motion.a>
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;

// // // // // import React, { useState } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import {
// // // // //   FiGithub,
// // // // //   FiExternalLink,
// // // // //   FiArrowRight,
// // // // //   FiCalendar,
// // // // //   FiStar,
// // // // //   FiGitBranch,
// // // // // } from "react-icons/fi";

// // // // // const Projects = () => {
// // // // //   const [filter, setFilter] = useState("all");
// // // // //   const [expandedId, setExpandedId] = useState(null);

// // // // //   const projects = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "E-Commerce Platform",
// // // // //       category: "fullstack",
// // // // //       description:
// // // // //         "Full-featured e-commerce platform with product management, cart, payment integration.",
// // // // //       fullDescription:
// // // // //         "Built a complete e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Implemented JWT authentication, Redis caching, and Stripe integration.",
// // // // //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// // // // //       image: "🛒",
// // // // //       gradient: "from-blue-600 to-indigo-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2024",
// // // // //       stats: { stars: 124, forks: 32, commits: 245 },
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "Task Management System",
// // // // //       category: "fullstack",
// // // // //       description:
// // // // //         "Collaborative project management tool with real-time updates and team collaboration.",
// // // // //       fullDescription:
// // // // //         "Real-time task management with WebSocket connections, drag-drop interface, team roles, and activity tracking. Features include task assignments, deadlines, and progress visualization.",
// // // // //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// // // // //       image: "✅",
// // // // //       gradient: "from-purple-600 to-pink-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2024",
// // // // //       stats: { stars: 89, forks: 23, commits: 178 },
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "Social Media Dashboard",
// // // // //       category: "frontend",
// // // // //       description:
// // // // //         "Analytics dashboard for social media managers with data visualization.",
// // // // //       fullDescription:
// // // // //         "Interactive dashboard displaying social metrics, engagement rates, and audience insights. Built with D3.js for custom visualizations and real-time data updates.",
// // // // //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// // // // //       image: "📊",
// // // // //       gradient: "from-orange-500 to-red-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2023",
// // // // //       stats: { stars: 67, forks: 18, commits: 134 },
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: "Healthcare Portal",
// // // // //       category: "fullstack",
// // // // //       description:
// // // // //         "Patient management system with appointment scheduling and medical records.",
// // // // //       fullDescription:
// // // // //         "HIPAA-compliant healthcare platform with appointment booking, prescription management, and secure video consultations. Implemented role-based access for patients and doctors.",
// // // // //       tech: ["React", "Node.js", "Express", "MongoDB"],
// // // // //       image: "🏥",
// // // // //       gradient: "from-green-600 to-emerald-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2024",
// // // // //       stats: { stars: 156, forks: 45, commits: 312 },
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       title: "AI Content Generator",
// // // // //       category: "frontend",
// // // // //       description: "AI-powered content generation tool using OpenAI API.",
// // // // //       fullDescription:
// // // // //         "Content generation platform supporting blog posts, social media captions, and marketing copy. Features include tone adjustment, SEO optimization, and export options.",
// // // // //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// // // // //       image: "🤖",
// // // // //       gradient: "from-rose-600 to-pink-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2024",
// // // // //       stats: { stars: 203, forks: 51, commits: 289 },
// // // // //     },
// // // // //     {
// // // // //       id: 6,
// // // // //       title: "Portfolio Website",
// // // // //       category: "frontend",
// // // // //       description:
// // // // //         "Modern portfolio website with smooth animations and responsive design.",
// // // // //       fullDescription:
// // // // //         "Personal portfolio with custom animations, dark mode, and optimized performance. Features include dynamic project filtering, contact form, and blog integration.",
// // // // //       tech: ["React", "Tailwind", "Framer Motion"],
// // // // //       image: "🎨",
// // // // //       gradient: "from-indigo-600 to-purple-600",
// // // // //       liveLink: "https://example.com",
// // // // //       githubLink: "https://github.com",
// // // // //       date: "2024",
// // // // //       stats: { stars: 45, forks: 12, commits: 98 },
// // // // //     },
// // // // //   ];

// // // // //   const categories = [
// // // // //     { id: "all", name: "All Work", count: projects.length },
// // // // //     {
// // // // //       id: "fullstack",
// // // // //       name: "Full Stack",
// // // // //       count: projects.filter((p) => p.category === "fullstack").length,
// // // // //     },
// // // // //     {
// // // // //       id: "frontend",
// // // // //       name: "Frontend",
// // // // //       count: projects.filter((p) => p.category === "frontend").length,
// // // // //     },
// // // // //   ];

// // // // //   const filteredProjects =
// // // // //     filter === "all" ? projects : projects.filter((p) => p.category === filter);

// // // // //   return (
// // // // //     <section className="py-24 bg-black relative overflow-hidden">
// // // // //       {/* Abstract Background */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
// // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />

// // // // //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         {/* Hero Section */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           whileInView={{ opacity: 1 }}
// // // // //           className="text-center mb-20"
// // // // //         >
// // // // //           <motion.div
// // // // //             initial={{ y: 20, opacity: 0 }}
// // // // //             animate={{ y: 0, opacity: 1 }}
// // // // //             className="inline-block mb-6"
// // // // //           >
// // // // //             <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
// // // // //               <span className="text-sm font-mono text-blue-400">
// // // // //                 // PORTFOLIO
// // // // //               </span>
// // // // //             </div>
// // // // //           </motion.div>

// // // // //           <motion.h1
// // // // //             initial={{ y: 20, opacity: 0 }}
// // // // //             animate={{ y: 0, opacity: 1 }}
// // // // //             transition={{ delay: 0.1 }}
// // // // //             className="text-5xl md:text-7xl font-bold mb-6"
// // // // //           >
// // // // //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // // // //               Featured Projects
// // // // //             </span>
// // // // //           </motion.h1>

// // // // //           <motion.p
// // // // //             initial={{ y: 20, opacity: 0 }}
// // // // //             animate={{ y: 0, opacity: 1 }}
// // // // //             transition={{ delay: 0.2 }}
// // // // //             className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
// // // // //           >
// // // // //             A collection of my best work, combining creative design with
// // // // //             technical excellence
// // // // //           </motion.p>
// // // // //         </motion.div>

// // // // //         {/* Minimal Filter */}
// // // // //         <motion.div
// // // // //           initial={{ y: 20, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.3 }}
// // // // //           className="flex justify-center mb-16"
// // // // //         >
// // // // //           <div className="inline-flex gap-1 p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
// // // // //             {categories.map((cat) => (
// // // // //               <button
// // // // //                 key={cat.id}
// // // // //                 onClick={() => setFilter(cat.id)}
// // // // //                 className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
// // // // //                   filter === cat.id
// // // // //                     ? "text-white"
// // // // //                     : "text-gray-400 hover:text-white"
// // // // //                 }`}
// // // // //               >
// // // // //                 {filter === cat.id && (
// // // // //                   <motion.div
// // // // //                     layoutId="activeFilterPill"
// // // // //                     className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
// // // // //                     transition={{ type: "spring", duration: 0.5 }}
// // // // //                   />
// // // // //                 )}
// // // // //                 <span className="relative z-10 flex items-center gap-2">
// // // // //                   {cat.name}
// // // // //                   <span className="text-xs opacity-60">{cat.count}</span>
// // // // //                 </span>
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* Masonry Grid Layout - No Cards */}
// // // // //         <AnimatePresence mode="wait">
// // // // //           <motion.div
// // // // //             key={filter}
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="space-y-12"
// // // // //           >
// // // // //             {filteredProjects.map((project, index) => (
// // // // //               <motion.article
// // // // //                 key={project.id}
// // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ delay: index * 0.1 }}
// // // // //                 className="group border-b border-white/10 last:border-0 pb-12 last:pb-0"
// // // // //               >
// // // // //                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
// // // // //                   {/* Left Column - Visual */}
// // // // //                   <div className="lg:w-2/5">
// // // // //                     <motion.div
// // // // //                       whileHover={{ scale: 1.02 }}
// // // // //                       className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10"
// // // // //                     >
// // // // //                       <div
// // // // //                         className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
// // // // //                       />
// // // // //                       <div className="relative p-12 flex items-center justify-center">
// // // // //                         <motion.span
// // // // //                           whileHover={{ scale: 1.1, rotate: 5 }}
// // // // //                           className="text-8xl"
// // // // //                         >
// // // // //                           {project.image}
// // // // //                         </motion.span>
// // // // //                       </div>

// // // // //                       {/* Stats Overlay */}
// // // // //                       <div className="absolute bottom-4 right-4 flex gap-3">
// // // // //                         <div className="flex items-center gap-1 text-xs text-gray-400">
// // // // //                           <FiStar className="text-yellow-500" />
// // // // //                           {project.stats.stars}
// // // // //                         </div>
// // // // //                         <div className="flex items-center gap-1 text-xs text-gray-400">
// // // // //                           <FiGitBranch />
// // // // //                           {project.stats.forks}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </motion.div>
// // // // //                   </div>

// // // // //                   {/* Right Column - Content */}
// // // // //                   <div className="lg:w-3/5">
// // // // //                     {/* Meta Info */}
// // // // //                     <div className="flex items-center gap-4 mb-4 text-sm">
// // // // //                       <span className="px-3 py-1 rounded-full bg-white/5 text-blue-400 font-mono text-xs">
// // // // //                         {project.category === "fullstack"
// // // // //                           ? "FULL STACK"
// // // // //                           : "FRONTEND"}
// // // // //                       </span>
// // // // //                       <span className="flex items-center gap-1 text-gray-500">
// // // // //                         <FiCalendar className="text-xs" />
// // // // //                         {project.date}
// // // // //                       </span>
// // // // //                     </div>

// // // // //                     {/* Title */}
// // // // //                     <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // // // //                       {project.title}
// // // // //                     </h3>

// // // // //                     {/* Description */}
// // // // //                     <p className="text-gray-400 text-lg mb-4 leading-relaxed">
// // // // //                       {project.description}
// // // // //                     </p>

// // // // //                     {/* Expandable Full Description */}
// // // // //                     <AnimatePresence>
// // // // //                       {expandedId === project.id && (
// // // // //                         <motion.div
// // // // //                           initial={{ opacity: 0, height: 0 }}
// // // // //                           animate={{ opacity: 1, height: "auto" }}
// // // // //                           exit={{ opacity: 0, height: 0 }}
// // // // //                           className="overflow-hidden"
// // // // //                         >
// // // // //                           <p className="text-gray-500 mb-6 leading-relaxed">
// // // // //                             {project.fullDescription}
// // // // //                           </p>
// // // // //                         </motion.div>
// // // // //                       )}
// // // // //                     </AnimatePresence>

// // // // //                     {/* Tech Stack - Horizontal Scroll */}
// // // // //                     <div className="flex flex-wrap gap-2 mb-6">
// // // // //                       {project.tech.map((tech, idx) => (
// // // // //                         <motion.span
// // // // //                           key={idx}
// // // // //                           initial={{ opacity: 0, x: -10 }}
// // // // //                           animate={{ opacity: 1, x: 0 }}
// // // // //                           transition={{ delay: idx * 0.05 }}
// // // // //                           className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm font-mono hover:bg-white/10 transition-colors"
// // // // //                         >
// // // // //                           {tech}
// // // // //                         </motion.span>
// // // // //                       ))}
// // // // //                     </div>

// // // // //                     {/* Actions */}
// // // // //                     <div className="flex items-center gap-4">
// // // // //                       <motion.a
// // // // //                         href={project.liveLink}
// // // // //                         target="_blank"
// // // // //                         whileHover={{ x: 5 }}
// // // // //                         className="inline-flex items-center gap-2 text-white font-semibold group/link"
// // // // //                       >
// // // // //                         <span>View Project</span>
// // // // //                         <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
// // // // //                       </motion.a>

// // // // //                       <motion.a
// // // // //                         href={project.githubLink}
// // // // //                         target="_blank"
// // // // //                         whileHover={{ x: 5 }}
// // // // //                         className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
// // // // //                       >
// // // // //                         <FiGithub />
// // // // //                         <span className="text-sm">Source</span>
// // // // //                       </motion.a>

// // // // //                       <button
// // // // //                         onClick={() =>
// // // // //                           setExpandedId(
// // // // //                             expandedId === project.id ? null : project.id,
// // // // //                           )
// // // // //                         }
// // // // //                         className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-400 transition-colors ml-auto"
// // // // //                       >
// // // // //                         <span>
// // // // //                           {expandedId === project.id
// // // // //                             ? "Read less"
// // // // //                             : "Read more"}
// // // // //                         </span>
// // // // //                         <FiArrowRight
// // // // //                           className={`transition-transform ${expandedId === project.id ? "rotate-90" : ""}`}
// // // // //                         />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </motion.article>
// // // // //             ))}
// // // // //           </motion.div>
// // // // //         </AnimatePresence>

// // // // //         {/* Footer Link */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           whileInView={{ opacity: 1 }}
// // // // //           transition={{ delay: 0.5 }}
// // // // //           className="text-center mt-16 pt-8 border-t border-white/10"
// // // // //         >
// // // // //           <motion.a
// // // // //             href="https://github.com/suniltariq"
// // // // //             target="_blank"
// // // // //             whileHover={{ scale: 1.02 }}
// // // // //             className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
// // // // //           >
// // // // //             <FiGithub className="text-xl" />
// // // // //             <span className="font-mono text-sm">
// // // // //               View all projects on GitHub
// // // // //             </span>
// // // // //             <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
// // // // //           </motion.a>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Projects;
// // // // import React, { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import {
// // // //   FiGithub,
// // // //   FiExternalLink,
// // // //   FiArrowRight,
// // // //   FiCalendar,
// // // //   FiStar,
// // // //   FiGitBranch,
// // // //   FiCode,
// // // // } from "react-icons/fi";

// // // // const Projects = () => {
// // // //   const [filter, setFilter] = useState("all");
// // // //   const [expandedId, setExpandedId] = useState(null);

// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "E-Commerce Platform",
// // // //       category: "fullstack",
// // // //       description:
// // // //         "Full-featured e-commerce platform with product management, cart, payment integration.",
// // // //       fullDescription:
// // // //         "Built a complete e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Implemented JWT authentication, Redis caching, and Stripe integration.",
// // // //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// // // //       image: "🛒",
// // // //       gradient: "from-blue-500 to-indigo-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2024",
// // // //       stats: { stars: 124, forks: 32 },
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Task Management System",
// // // //       category: "fullstack",
// // // //       description:
// // // //         "Collaborative project management tool with real-time updates and team collaboration.",
// // // //       fullDescription:
// // // //         "Real-time task management with WebSocket connections, drag-drop interface, team roles, and activity tracking. Features include task assignments, deadlines, and progress visualization.",
// // // //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// // // //       image: "✅",
// // // //       gradient: "from-purple-500 to-pink-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2024",
// // // //       stats: { stars: 89, forks: 23 },
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Social Media Dashboard",
// // // //       category: "frontend",
// // // //       description:
// // // //         "Analytics dashboard for social media managers with data visualization.",
// // // //       fullDescription:
// // // //         "Interactive dashboard displaying social metrics, engagement rates, and audience insights. Built with D3.js for custom visualizations and real-time data updates.",
// // // //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// // // //       image: "📊",
// // // //       gradient: "from-orange-500 to-red-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2023",
// // // //       stats: { stars: 67, forks: 18 },
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "Healthcare Portal",
// // // //       category: "fullstack",
// // // //       description:
// // // //         "Patient management system with appointment scheduling and medical records.",
// // // //       fullDescription:
// // // //         "HIPAA-compliant healthcare platform with appointment booking, prescription management, and secure video consultations. Implemented role-based access for patients and doctors.",
// // // //       tech: ["React", "Node.js", "Express", "MongoDB"],
// // // //       image: "🏥",
// // // //       gradient: "from-green-500 to-emerald-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2024",
// // // //       stats: { stars: 156, forks: 45 },
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       title: "AI Content Generator",
// // // //       category: "frontend",
// // // //       description: "AI-powered content generation tool using OpenAI API.",
// // // //       fullDescription:
// // // //         "Content generation platform supporting blog posts, social media captions, and marketing copy. Features include tone adjustment, SEO optimization, and export options.",
// // // //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// // // //       image: "🤖",
// // // //       gradient: "from-rose-500 to-pink-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2024",
// // // //       stats: { stars: 203, forks: 51 },
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       title: "Portfolio Website",
// // // //       category: "frontend",
// // // //       description:
// // // //         "Modern portfolio website with smooth animations and responsive design.",
// // // //       fullDescription:
// // // //         "Personal portfolio with custom animations, dark mode, and optimized performance. Features include dynamic project filtering, contact form, and blog integration.",
// // // //       tech: ["React", "Tailwind", "Framer Motion"],
// // // //       image: "🎨",
// // // //       gradient: "from-indigo-500 to-purple-500",
// // // //       liveLink: "https://example.com",
// // // //       githubLink: "https://github.com",
// // // //       date: "2024",
// // // //       stats: { stars: 45, forks: 12 },
// // // //     },
// // // //   ];

// // // //   const categories = [
// // // //     { id: "all", name: "All Projects", count: projects.length },
// // // //     {
// // // //       id: "fullstack",
// // // //       name: "Full Stack",
// // // //       count: projects.filter((p) => p.category === "fullstack").length,
// // // //     },
// // // //     {
// // // //       id: "frontend",
// // // //       name: "Frontend",
// // // //       count: projects.filter((p) => p.category === "frontend").length,
// // // //     },
// // // //   ];

// // // //   const filteredProjects =
// // // //     filter === "all" ? projects : projects.filter((p) => p.category === filter);

// // // //   return (
// // // //     <section className="py-20 lg:py-28 transition-colors duration-300">
// // // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Header Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mb-12 lg:mb-16"
// // // //         >
// // // //           {/* Badge */}
// // // //           <div className="inline-block mb-4">
// // // //             <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
// // // //               PORTFOLIO
// // // //             </div>
// // // //           </div>

// // // //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
// // // //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // //               Featured Projects
// // // //             </span>
// // // //           </h2>

// // // //           <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
// // // //             Here are some of my recent works
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* Filter Buttons - Optimized for both themes */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6, delay: 0.1 }}
// // // //           viewport={{ once: true }}
// // // //           className="flex justify-center mb-12"
// // // //         >
// // // //           <div className="inline-flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
// // // //             {categories.map((cat) => (
// // // //               <button
// // // //                 key={cat.id}
// // // //                 onClick={() => setFilter(cat.id)}
// // // //                 className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
// // // //                   filter === cat.id
// // // //                     ? "text-white"
// // // //                     : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
// // // //                 }`}
// // // //               >
// // // //                 {filter === cat.id && (
// // // //                   <motion.div
// // // //                     layoutId="activeFilter"
// // // //                     className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
// // // //                     transition={{ type: "spring", duration: 0.5 }}
// // // //                   />
// // // //                 )}
// // // //                 <span className="relative z-10 flex items-center gap-2">
// // // //                   {cat.name}
// // // //                   <span className="text-xs opacity-80">{cat.count}</span>
// // // //                 </span>
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Projects List - No Cards, Clean Layout */}
// // // //         <AnimatePresence mode="wait">
// // // //           <motion.div
// // // //             key={filter}
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             transition={{ duration: 0.4 }}
// // // //             className="space-y-8 lg:space-y-12"
// // // //           >
// // // //             {filteredProjects.map((project, index) => (
// // // //               <motion.article
// // // //                 key={project.id}
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: index * 0.1 }}
// // // //                 className="group border-b border-gray-200 dark:border-gray-800 last:border-0 pb-8 lg:pb-12 last:pb-0"
// // // //               >
// // // //                 <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
// // // //                   {/* Left - Visual/Icon Area */}
// // // //                   <div className="lg:w-2/5">
// // // //                     <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800">
// // // //                       {/* Gradient Overlay */}
// // // //                       <div
// // // //                         className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
// // // //                       />

// // // //                       {/* Icon */}
// // // //                       <div className="relative p-10 lg:p-12 flex items-center justify-center">
// // // //                         <motion.span
// // // //                           whileHover={{ scale: 1.05 }}
// // // //                           transition={{ type: "spring", stiffness: 300 }}
// // // //                           className="text-7xl lg:text-8xl"
// // // //                         >
// // // //                           {project.image}
// // // //                         </motion.span>
// // // //                       </div>

// // // //                       {/* Stats */}
// // // //                       <div className="absolute bottom-3 right-3 flex gap-2 text-xs">
// // // //                         <div className="flex items-center gap-1 px-2 py-1 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-md text-gray-600 dark:text-gray-400">
// // // //                           <FiStar className="text-yellow-500 text-xs" />
// // // //                           {project.stats.stars}
// // // //                         </div>
// // // //                         <div className="flex items-center gap-1 px-2 py-1 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-md text-gray-600 dark:text-gray-400">
// // // //                           <FiGitBranch className="text-xs" />
// // // //                           {project.stats.forks}
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Right - Content Area */}
// // // //                   <div className="lg:w-3/5 flex-1">
// // // //                     {/* Meta Row */}
// // // //                     <div className="flex flex-wrap items-center gap-3 mb-3">
// // // //                       <span
// // // //                         className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
// // // //                           project.category === "fullstack"
// // // //                             ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
// // // //                             : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
// // // //                         }`}
// // // //                       >
// // // //                         {project.category === "fullstack"
// // // //                           ? "Full Stack"
// // // //                           : "Frontend"}
// // // //                       </span>
// // // //                       <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
// // // //                         <FiCalendar className="text-xs" />
// // // //                         {project.date}
// // // //                       </span>
// // // //                     </div>

// // // //                     {/* Title */}
// // // //                     <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
// // // //                       {project.title}
// // // //                     </h3>

// // // //                     {/* Short Description */}
// // // //                     <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
// // // //                       {project.description}
// // // //                     </p>

// // // //                     {/* Expandable Full Description */}
// // // //                     <AnimatePresence>
// // // //                       {expandedId === project.id && (
// // // //                         <motion.div
// // // //                           initial={{ opacity: 0, height: 0 }}
// // // //                           animate={{ opacity: 1, height: "auto" }}
// // // //                           exit={{ opacity: 0, height: 0 }}
// // // //                           transition={{ duration: 0.3 }}
// // // //                           className="overflow-hidden"
// // // //                         >
// // // //                           <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm lg:text-base">
// // // //                             {project.fullDescription}
// // // //                           </p>
// // // //                         </motion.div>
// // // //                       )}
// // // //                     </AnimatePresence>

// // // //                     {/* Tech Stack */}
// // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // //                       {project.tech.map((tech, idx) => (
// // // //                         <span
// // // //                           key={idx}
// // // //                           className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-mono"
// // // //                         >
// // // //                           {tech}
// // // //                         </span>
// // // //                       ))}
// // // //                     </div>

// // // //                     {/* Action Buttons */}
// // // //                     <div className="flex items-center gap-4">
// // // //                       <a
// // // //                         href={project.liveLink}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                         className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg font-medium hover:shadow-lg transition-shadow"
// // // //                       >
// // // //                         <FiExternalLink className="text-sm" />
// // // //                         Live Demo
// // // //                       </a>

// // // //                       <a
// // // //                         href={project.githubLink}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                         className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
// // // //                       >
// // // //                         <FiGithub className="text-sm" />
// // // //                         Code
// // // //                       </a>

// // // //                       <button
// // // //                         onClick={() =>
// // // //                           setExpandedId(
// // // //                             expandedId === project.id ? null : project.id,
// // // //                           )
// // // //                         }
// // // //                         className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
// // // //                       >
// // // //                         <span>
// // // //                           {expandedId === project.id
// // // //                             ? "Show less"
// // // //                             : "Read more"}
// // // //                         </span>
// // // //                         <FiArrowRight
// // // //                           className={`text-xs transition-transform ${expandedId === project.id ? "rotate-90" : "group-hover:translate-x-1"}`}
// // // //                         />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.article>
// // // //             ))}
// // // //           </motion.div>
// // // //         </AnimatePresence>

// // // //         {/* Empty State */}
// // // //         {filteredProjects.length === 0 && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             className="text-center py-20"
// // // //           >
// // // //             <div className="text-6xl mb-4">🔍</div>
// // // //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// // // //               No projects found
// // // //             </h3>
// // // //             <p className="text-gray-600 dark:text-gray-400">
// // // //               Try changing the filter
// // // //             </p>
// // // //           </motion.div>
// // // //         )}

// // // //         {/* GitHub Link */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           whileInView={{ opacity: 1 }}
// // // //           transition={{ duration: 0.6, delay: 0.3 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mt-12 lg:mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
// // // //         >
// // // //           <a
// // // //             href="https://github.com/suniltariq"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
// // // //           >
// // // //             <FiGithub className="text-lg" />
// // // //             <span className="text-sm">View more projects on GitHub</span>
// // // //             <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
// // // //           </a>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Projects;

// // // import React, { useState, useRef } from "react";
// // // import {
// // //   motion,
// // //   useScroll,
// // //   useTransform,
// // //   AnimatePresence,
// // // } from "framer-motion";
// // // import {
// // //   FiGithub,
// // //   FiExternalLink,
// // //   FiChevronRight,
// // //   FiGrid,
// // //   FiList,
// // // } from "react-icons/fi";

// // // const Projects = () => {
// // //   const [filter, setFilter] = useState("all");
// // //   const [viewMode, setViewMode] = useState("grid");
// // //   const containerRef = useRef(null);

// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start end", "end start"],
// // //   });

// // //   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "E-Commerce Platform",
// // //       category: "fullstack",
// // //       description:
// // //         "Full-featured e-commerce platform with product management, cart, payment integration.",
// // //       longDescription:
// // //         "Built a complete e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
// // //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// // //       image: "🛒",
// // //       color: "blue",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: true,
// // //       metrics: { users: "10K+", transactions: "5K+" },
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "TaskFlow",
// // //       category: "fullstack",
// // //       description:
// // //         "Collaborative project management tool with real-time updates and team collaboration.",
// // //       longDescription:
// // //         "Real-time task management with WebSocket connections, drag-drop interface, team roles, and activity tracking.",
// // //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// // //       image: "✅",
// // //       color: "purple",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: true,
// // //       metrics: { teams: "200+", tasks: "50K+" },
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "SocialPulse",
// // //       category: "frontend",
// // //       description:
// // //         "Analytics dashboard for social media managers with data visualization.",
// // //       longDescription:
// // //         "Interactive dashboard displaying social metrics, engagement rates, and audience insights.",
// // //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// // //       image: "📊",
// // //       color: "orange",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: false,
// // //       metrics: { platforms: "5+", metrics: "50+" },
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "MediCare Portal",
// // //       category: "fullstack",
// // //       description:
// // //         "Patient management system with appointment scheduling and medical records.",
// // //       longDescription:
// // //         "HIPAA-compliant healthcare platform with appointment booking, prescription management.",
// // //       tech: ["React", "Node.js", "Express", "MongoDB"],
// // //       image: "🏥",
// // //       color: "green",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: true,
// // //       metrics: { patients: "5K+", appointments: "15K+" },
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "AI Writer",
// // //       category: "frontend",
// // //       description: "AI-powered content generation tool using OpenAI API.",
// // //       longDescription:
// // //         "Content generation platform supporting blog posts, social media captions, and marketing copy.",
// // //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// // //       image: "🤖",
// // //       color: "rose",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: false,
// // //       metrics: { words: "1M+", users: "1K+" },
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Creative Portfolio",
// // //       category: "frontend",
// // //       description:
// // //         "Modern portfolio website with smooth animations and responsive design.",
// // //       longDescription:
// // //         "Personal portfolio with custom animations, dark mode, and optimized performance.",
// // //       tech: ["React", "Tailwind", "Framer Motion"],
// // //       image: "🎨",
// // //       color: "indigo",
// // //       liveLink: "https://example.com",
// // //       githubLink: "https://github.com",
// // //       featured: false,
// // //       metrics: { views: "100K+", projects: "10+" },
// // //     },
// // //   ];

// // //   const categories = [
// // //     { id: "all", name: "All Work", icon: "✨" },
// // //     { id: "fullstack", name: "Full Stack", icon: "⚡" },
// // //     { id: "frontend", name: "Frontend", icon: "🎨" },
// // //   ];

// // //   const filteredProjects =
// // //     filter === "all" ? projects : projects.filter((p) => p.category === filter);
// // //   const featuredProjects = projects.filter((p) => p.featured);
// // //   const regularProjects = filteredProjects.filter((p) => !p.featured);

// // //   const colorMap = {
// // //     blue: "from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600",
// // //     purple: "from-purple-500 to-pink-500 dark:from-purple-500 dark:to-pink-500",
// // //     orange: "from-orange-500 to-red-500 dark:from-orange-500 dark:to-red-500",
// // //     green:
// // //       "from-green-500 to-emerald-500 dark:from-green-500 dark:to-emerald-500",
// // //     rose: "from-rose-500 to-pink-500 dark:from-rose-500 dark:to-pink-500",
// // //     indigo:
// // //       "from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500",
// // //   };

// // //   return (
// // //     <section ref={containerRef} className="relative py-24 overflow-hidden">
// // //       {/* Background Effects */}
// // //       <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
// // //       <div className="absolute inset-0 bg-grid-pattern opacity-5" />

// // //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Hero Section */}
// // //         <motion.div style={{ opacity }} className="text-center mb-20">
// // //           <motion.div
// // //             initial={{ scale: 0 }}
// // //             animate={{ scale: 1 }}
// // //             transition={{ type: "spring", duration: 0.6 }}
// // //             className="inline-block mb-6"
// // //           >
// // //             <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
// // //               <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //                 MY WORK
// // //               </span>
// // //             </div>
// // //           </motion.div>

// // //           <motion.h2
// // //             initial={{ y: 30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 0.1 }}
// // //             className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
// // //           >
// // //             <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
// // //               Featured
// // //             </span>
// // //             <br />
// // //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //               Creations
// // //             </span>
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ y: 30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 0.2 }}
// // //             className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
// // //           >
// // //             Transforming ideas into exceptional digital experiences
// // //           </motion.p>
// // //         </motion.div>

// // //         {/* Controls Bar */}
// // //         <motion.div
// // //           initial={{ y: 20, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ delay: 0.3 }}
// // //           className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
// // //         >
// // //           {/* Filters */}
// // //           <div className="flex gap-2 p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
// // //             {categories.map((cat) => (
// // //               <button
// // //                 key={cat.id}
// // //                 onClick={() => setFilter(cat.id)}
// // //                 className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all ${
// // //                   filter === cat.id
// // //                     ? "text-white"
// // //                     : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
// // //                 }`}
// // //               >
// // //                 {filter === cat.id && (
// // //                   <motion.div
// // //                     layoutId="activeFilter"
// // //                     className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
// // //                     transition={{ type: "spring", duration: 0.5 }}
// // //                   />
// // //                 )}
// // //                 <span className="relative z-10 flex items-center gap-2">
// // //                   <span>{cat.icon}</span>
// // //                   {cat.name}
// // //                 </span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* View Toggle */}
// // //           <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl">
// // //             <button
// // //               onClick={() => setViewMode("grid")}
// // //               className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-gray-700 shadow-sm" : "text-gray-500"}`}
// // //             >
// // //               <FiGrid />
// // //             </button>
// // //             <button
// // //               onClick={() => setViewMode("list")}
// // //               className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-gray-700 shadow-sm" : "text-gray-500"}`}
// // //             >
// // //               <FiList />
// // //             </button>
// // //           </div>
// // //         </motion.div>

// // //         {/* Featured Projects Banner */}
// // //         {filter === "all" && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.4 }}
// // //             className="mb-16"
// // //           >
// // //             <div className="grid md:grid-cols-2 gap-6">
// // //               {featuredProjects.map((project, idx) => (
// // //                 <motion.div
// // //                   key={project.id}
// // //                   initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
// // //                   animate={{ opacity: 1, x: 0 }}
// // //                   transition={{ delay: 0.5 + idx * 0.1 }}
// // //                   className="group relative"
// // //                 >
// // //                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
// // //                   <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
// // //                     <div
// // //                       className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorMap[project.color]} opacity-10 rounded-bl-full`}
// // //                     />
// // //                     <div className="p-8">
// // //                       <div className="flex items-start justify-between mb-4">
// // //                         <span className="text-6xl">{project.image}</span>
// // //                         <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-full text-xs font-semibold text-yellow-600 dark:text-yellow-500">
// // //                           FEATURED
// // //                         </span>
// // //                       </div>
// // //                       <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
// // //                         {project.title}
// // //                       </h3>
// // //                       <p className="text-gray-600 dark:text-gray-400 mb-4">
// // //                         {project.description}
// // //                       </p>
// // //                       <div className="flex gap-4 mb-6">
// // //                         {Object.entries(project.metrics).map(([key, value]) => (
// // //                           <div key={key}>
// // //                             <div className="text-xl font-bold text-gray-900 dark:text-white">
// // //                               {value}
// // //                             </div>
// // //                             <div className="text-xs text-gray-500 dark:text-gray-500 uppercase">
// // //                               {key}
// // //                             </div>
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                       <div className="flex gap-3">
// // //                         <a
// // //                           href={project.liveLink}
// // //                           target="_blank"
// // //                           rel="noopener noreferrer"
// // //                           className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-center hover:shadow-lg transition-all"
// // //                         >
// // //                           Explore Project
// // //                         </a>
// // //                         <a
// // //                           href={project.githubLink}
// // //                           target="_blank"
// // //                           rel="noopener noreferrer"
// // //                           className="px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
// // //                         >
// // //                           <FiGithub className="text-gray-700 dark:text-gray-300" />
// // //                         </a>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         )}

// // //         {/* Projects Grid/List */}
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={`${filter}-${viewMode}`}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -20 }}
// // //             transition={{ duration: 0.4 }}
// // //             className={
// // //               viewMode === "grid"
// // //                 ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
// // //                 : "space-y-4"
// // //             }
// // //           >
// // //             {(filter === "all" ? regularProjects : filteredProjects).map(
// // //               (project, index) => (
// // //                 <motion.div
// // //                   key={project.id}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: index * 0.05 }}
// // //                   whileHover={{ y: viewMode === "grid" ? -8 : 0 }}
// // //                   className="group"
// // //                 >
// // //                   {viewMode === "grid" ? (
// // //                     // Grid View
// // //                     <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all h-full">
// // //                       <div
// // //                         className={`h-32 bg-gradient-to-r ${colorMap[project.color]} flex items-center justify-center relative overflow-hidden`}
// // //                       >
// // //                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
// // //                         <motion.span
// // //                           whileHover={{ scale: 1.1, rotate: 5 }}
// // //                           className="text-5xl"
// // //                         >
// // //                           {project.image}
// // //                         </motion.span>
// // //                       </div>
// // //                       <div className="p-5">
// // //                         <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
// // //                           {project.title}
// // //                         </h3>
// // //                         <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
// // //                           {project.description}
// // //                         </p>
// // //                         <div className="flex flex-wrap gap-1.5 mb-4">
// // //                           {project.tech.slice(0, 3).map((tech, idx) => (
// // //                             <span
// // //                               key={idx}
// // //                               className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
// // //                             >
// // //                               {tech}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                         <div className="flex gap-2">
// // //                           <a
// // //                             href={project.liveLink}
// // //                             target="_blank"
// // //                             className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg text-center hover:shadow-md transition-all"
// // //                           >
// // //                             Demo
// // //                           </a>
// // //                           <a
// // //                             href={project.githubLink}
// // //                             target="_blank"
// // //                             className="px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
// // //                           >
// // //                             <FiGithub className="text-gray-700 dark:text-gray-300" />
// // //                           </a>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     // List View
// // //                     <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all">
// // //                       <div className="flex items-center gap-4">
// // //                         <div
// // //                           className={`w-12 h-12 bg-gradient-to-r ${colorMap[project.color]} rounded-lg flex items-center justify-center flex-shrink-0`}
// // //                         >
// // //                           <span className="text-2xl">{project.image}</span>
// // //                         </div>
// // //                         <div className="flex-1 min-w-0">
// // //                           <div className="flex items-center gap-3 mb-1">
// // //                             <h3 className="text-base font-bold text-gray-900 dark:text-white">
// // //                               {project.title}
// // //                             </h3>
// // //                             <span
// // //                               className={`px-2 py-0.5 rounded text-xs ${
// // //                                 project.category === "fullstack"
// // //                                   ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
// // //                                   : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
// // //                               }`}
// // //                             >
// // //                               {project.category === "fullstack"
// // //                                 ? "Full Stack"
// // //                                 : "Frontend"}
// // //                             </span>
// // //                           </div>
// // //                           <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
// // //                             {project.description}
// // //                           </p>
// // //                         </div>
// // //                         <div className="flex gap-2">
// // //                           <a
// // //                             href={project.liveLink}
// // //                             target="_blank"
// // //                             className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all"
// // //                           >
// // //                             <FiExternalLink className="text-sm" />
// // //                           </a>
// // //                           <a
// // //                             href={project.githubLink}
// // //                             target="_blank"
// // //                             className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
// // //                           >
// // //                             <FiGithub className="text-gray-700 dark:text-gray-300 text-sm" />
// // //                           </a>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </motion.div>
// // //               ),
// // //             )}
// // //           </motion.div>
// // //         </AnimatePresence>

// // //         {/* Footer CTA */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ delay: 0.3 }}
// // //           className="text-center mt-16 pt-8"
// // //         >
// // //           <a
// // //             href="https://github.com/suniltariq"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all group"
// // //           >
// // //             <FiGithub className="text-lg" />
// // //             <span>View All Projects on GitHub</span>
// // //             <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
// // //           </a>
// // //         </motion.div>
// // //       </div>

// // //       <style jsx>{`
// // //         .bg-grid-pattern {
// // //           background-image: radial-gradient(
// // //             circle at 1px 1px,
// // //             rgba(0, 0, 0, 0.05) 1px,
// // //             transparent 1px
// // //           );
// // //           background-size: 40px 40px;
// // //         }
// // //         .dark .bg-grid-pattern {
// // //           background-image: radial-gradient(
// // //             circle at 1px 1px,
// // //             rgba(255, 255, 255, 0.05) 1px,
// // //             transparent 1px
// // //           );
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FiGithub,
// //   FiExternalLink,
// //   FiChevronRight,
// //   FiGrid,
// //   FiList,
// //   FiStar,
// //   FiGitBranch,
// // } from "react-icons/fi";

// // const Projects = () => {
// //   const [filter, setFilter] = useState("all");
// //   const [viewMode, setViewMode] = useState("grid");
// //   const [hoveredCard, setHoveredCard] = useState(null);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "E-Commerce Platform",
// //       category: "fullstack",
// //       description:
// //         "Full-featured e-commerce platform with product management, cart, payment integration.",
// //       longDescription:
// //         "Built a complete e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
// //       tech: ["React", "Node.js", "MongoDB", "Stripe"],
// //       image: "🛒",
// //       color: "blue",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: true,
// //       stats: { stars: 124, forks: 32 },
// //     },
// //     {
// //       id: 2,
// //       title: "TaskFlow",
// //       category: "fullstack",
// //       description:
// //         "Collaborative project management tool with real-time updates and team collaboration.",
// //       longDescription:
// //         "Real-time task management with WebSocket connections, drag-drop interface, team roles, and activity tracking.",
// //       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
// //       image: "✅",
// //       color: "purple",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: true,
// //       stats: { stars: 89, forks: 23 },
// //     },
// //     {
// //       id: 3,
// //       title: "SocialPulse",
// //       category: "frontend",
// //       description:
// //         "Analytics dashboard for social media managers with data visualization.",
// //       longDescription:
// //         "Interactive dashboard displaying social metrics, engagement rates, and audience insights.",
// //       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
// //       image: "📊",
// //       color: "orange",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: false,
// //       stats: { stars: 67, forks: 18 },
// //     },
// //     {
// //       id: 4,
// //       title: "MediCare Portal",
// //       category: "fullstack",
// //       description:
// //         "Patient management system with appointment scheduling and medical records.",
// //       longDescription:
// //         "HIPAA-compliant healthcare platform with appointment booking, prescription management.",
// //       tech: ["React", "Node.js", "Express", "MongoDB"],
// //       image: "🏥",
// //       color: "green",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: true,
// //       stats: { stars: 156, forks: 45 },
// //     },
// //     {
// //       id: 5,
// //       title: "AI Writer",
// //       category: "frontend",
// //       description: "AI-powered content generation tool using OpenAI API.",
// //       longDescription:
// //         "Content generation platform supporting blog posts, social media captions, and marketing copy.",
// //       tech: ["React", "OpenAI", "Tailwind", "Express"],
// //       image: "🤖",
// //       color: "rose",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: false,
// //       stats: { stars: 203, forks: 51 },
// //     },
// //     {
// //       id: 6,
// //       title: "Creative Portfolio",
// //       category: "frontend",
// //       description:
// //         "Modern portfolio website with smooth animations and responsive design.",
// //       longDescription:
// //         "Personal portfolio with custom animations, dark mode, and optimized performance.",
// //       tech: ["React", "Tailwind", "Framer Motion"],
// //       image: "🎨",
// //       color: "indigo",
// //       liveLink: "https://example.com",
// //       githubLink: "https://github.com",
// //       featured: false,
// //       stats: { stars: 45, forks: 12 },
// //     },
// //   ];

// //   const categories = [
// //     { id: "all", name: "All Work", count: projects.length },
// //     {
// //       id: "fullstack",
// //       name: "Full Stack",
// //       count: projects.filter((p) => p.category === "fullstack").length,
// //     },
// //     {
// //       id: "frontend",
// //       name: "Frontend",
// //       count: projects.filter((p) => p.category === "frontend").length,
// //     },
// //   ];

// //   const filteredProjects =
// //     filter === "all" ? projects : projects.filter((p) => p.category === filter);
// //   const featuredProjects = projects.filter((p) => p.featured);
// //   const regularProjects = filteredProjects.filter((p) => !p.featured);

// //   const colorMap = {
// //     blue: "from-blue-500 to-blue-600",
// //     purple: "from-purple-500 to-pink-500",
// //     orange: "from-orange-500 to-red-500",
// //     green: "from-green-500 to-emerald-500",
// //     rose: "from-rose-500 to-pink-500",
// //     indigo: "from-indigo-500 to-purple-500",
// //   };

// //   return (
// //     <section id="projects" className="py-16 bg-white dark:bg-black transition-colors duration-300">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <div className="inline-block mb-4">
// //             <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
// //               <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
// //                 MY PORTFOLIO
// //               </span>
// //             </div>
// //           </div>

// //           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
// //             <span className="text-gray-900 dark:text-white">Featured</span>
// //             <br />
// //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //               Projects
// //             </span>
// //           </h2>

// //           <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
// //             Here are some of my best works that showcase my skills and
// //             experience
// //           </p>
// //         </motion.div>

// //         {/* Controls */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.1 }}
// //           viewport={{ once: true }}
// //           className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
// //         >
// //           {/* Filters */}
// //           <div className="flex gap-2 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat.id}
// //                 onClick={() => setFilter(cat.id)}
// //                 className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
// //                   filter === cat.id
// //                     ? "text-white"
// //                     : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
// //                 }`}
// //               >
// //                 {filter === cat.id && (
// //                   <motion.div
// //                     layoutId="activeFilter"
// //                     className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
// //                     transition={{ type: "spring", duration: 0.5 }}
// //                   />
// //                 )}
// //                 <span className="relative z-10 flex items-center gap-2">
// //                   {cat.name}
// //                   <span className="text-xs opacity-80">{cat.count}</span>
// //                 </span>
// //               </button>
// //             ))}
// //           </div>

// //           {/* View Toggle */}
// //           <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
// //             <button
// //               onClick={() => setViewMode("grid")}
// //               className={`p-2 rounded-lg transition-all ${
// //                 viewMode === "grid"
// //                   ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
// //                   : "text-gray-500 dark:text-gray-500"
// //               }`}
// //             >
// //               <FiGrid size={18} />
// //             </button>
// //             <button
// //               onClick={() => setViewMode("list")}
// //               className={`p-2 rounded-lg transition-all ${
// //                 viewMode === "list"
// //                   ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
// //                   : "text-gray-500 dark:text-gray-500"
// //               }`}
// //             >
// //               <FiList size={18} />
// //             </button>
// //           </div>
// //         </motion.div>

// //         {/* Featured Projects */}
// //         {filter === "all" && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="mb-16"
// //           >
// //             <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
// //               Featured Projects
// //             </h3>
// //             <div className="grid md:grid-cols-2 gap-6">
// //               {featuredProjects.map((project) => (
// //                 <motion.div
// //                   key={project.id}
// //                   whileHover={{ y: -5 }}
// //                   className="group"
// //                 >
// //                   <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all">
// //                     <div
// //                       className={`h-40 bg-gradient-to-r ${colorMap[project.color]} relative overflow-hidden`}
// //                     >
// //                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
// //                       <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full">
// //                         <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
// //                           ★ FEATURED
// //                         </span>
// //                       </div>
// //                       <div className="flex items-center justify-center h-full">
// //                         <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
// //                           {project.image}
// //                         </span>
// //                       </div>
// //                     </div>
// //                     <div className="p-6">
// //                       <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
// //                         {project.title}
// //                       </h4>
// //                       <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                         {project.description}
// //                       </p>
// //                       <div className="flex gap-4 mb-4">
// //                         <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
// //                           <FiStar className="text-yellow-500" />
// //                           {project.stats.stars}
// //                         </div>
// //                         <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
// //                           <FiGitBranch />
// //                           {project.stats.forks}
// //                         </div>
// //                       </div>
// //                       <div className="flex gap-3">
// //                         <a
// //                           href={project.liveLink}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
// //                         >
// //                           Live Demo
// //                         </a>
// //                         <a
// //                           href={project.githubLink}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
// //                         >
// //                           <FiGithub
// //                             className="text-gray-700 dark:text-gray-300"
// //                             size={20}
// //                           />
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}

// //         {/* All Projects */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //           viewport={{ once: true }}
// //         >
// //           <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
// //             {filter === "all" ? "More Projects" : "All Projects"}
// //           </h3>

// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={`${filter}-${viewMode}`}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.3 }}
// //               className={
// //                 viewMode === "grid"
// //                   ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
// //                   : "space-y-4"
// //               }
// //             >
// //               {(filter === "all" ? regularProjects : filteredProjects).map(
// //                 (project, index) => (
// //                   <motion.div
// //                     key={project.id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: index * 0.05 }}
// //                     whileHover={viewMode === "grid" ? { y: -5 } : {}}
// //                     onHoverStart={() => setHoveredCard(project.id)}
// //                     onHoverEnd={() => setHoveredCard(null)}
// //                     className="group"
// //                   >
// //                     {viewMode === "grid" ? (
// //                       // Grid View Card
// //                       <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all h-full">
// //                         <div
// //                           className={`h-32 bg-gradient-to-r ${colorMap[project.color]} flex items-center justify-center relative overflow-hidden`}
// //                         >
// //                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
// //                           <motion.span
// //                             animate={{
// //                               scale: hoveredCard === project.id ? 1.1 : 1,
// //                             }}
// //                             className="text-5xl"
// //                           >
// //                             {project.image}
// //                           </motion.span>
// //                         </div>
// //                         <div className="p-5">
// //                           <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
// //                             {project.title}
// //                           </h4>
// //                           <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
// //                             {project.description}
// //                           </p>
// //                           <div className="flex flex-wrap gap-1.5 mb-4">
// //                             {project.tech.slice(0, 3).map((tech, idx) => (
// //                               <span
// //                                 key={idx}
// //                                 className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
// //                               >
// //                                 {tech}
// //                               </span>
// //                             ))}
// //                             {project.tech.length > 3 && (
// //                               <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
// //                                 +{project.tech.length - 3}
// //                               </span>
// //                             )}
// //                           </div>
// //                           <div className="flex gap-2">
// //                             <a
// //                               href={project.liveLink}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg text-center hover:shadow-md transition-all"
// //                             >
// //                               Demo
// //                             </a>
// //                             <a
// //                               href={project.githubLink}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="px-3 py-1.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
// //                             >
// //                               <FiGithub className="inline" />
// //                             </a>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ) : (
// //                       // List View Item
// //                       <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all">
// //                         <div className="flex items-center gap-4">
// //                           <div
// //                             className={`w-12 h-12 bg-gradient-to-r ${colorMap[project.color]} rounded-lg flex items-center justify-center flex-shrink-0`}
// //                           >
// //                             <span className="text-2xl">{project.image}</span>
// //                           </div>
// //                           <div className="flex-1 min-w-0">
// //                             <div className="flex items-center gap-3 mb-1">
// //                               <h4 className="text-base font-bold text-gray-900 dark:text-white">
// //                                 {project.title}
// //                               </h4>
// //                               <span
// //                                 className={`px-2 py-0.5 rounded text-xs font-medium ${
// //                                   project.category === "fullstack"
// //                                     ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
// //                                     : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
// //                                 }`}
// //                               >
// //                                 {project.category === "fullstack"
// //                                   ? "Full Stack"
// //                                   : "Frontend"}
// //                               </span>
// //                             </div>
// //                             <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
// //                               {project.description}
// //                             </p>
// //                           </div>
// //                           <div className="flex gap-2">
// //                             <a
// //                               href={project.liveLink}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all"
// //                             >
// //                               <FiExternalLink size={16} />
// //                             </a>
// //                             <a
// //                               href={project.githubLink}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
// //                             >
// //                               <FiGithub
// //                                 size={16}
// //                                 className="text-gray-700 dark:text-gray-300"
// //                               />
// //                             </a>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </motion.div>
// //                 ),
// //               )}
// //             </motion.div>
// //           </AnimatePresence>
// //         </motion.div>

// //         {/* Footer */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           viewport={{ once: true }}
// //           className="text-center mt-8 pt-8  border-gray-200 dark:border-gray-800"
// //         >
// //           <a
// //             href="https://github.com/suniltariq"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all group"
// //           >
// //             <FiGithub size={20} />
// //             <span>View All Projects on GitHub</span>
// //             <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import me from '../images/me.jpg'
// import {
//   FiGithub,
//   FiExternalLink,
//   FiArrowRight,
//   FiCalendar,
//   FiStar,
//   FiGitBranch,
// } from "react-icons/fi";

// const Projects = () => {
//   const [filter, setFilter] = useState("all");
//   const [expandedId, setExpandedId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       category: "fullstack",
//       description:
//         "Full-featured e-commerce platform with product management, cart, and Stripe payment integration.",
//       fullDescription:
//         "Built a complete e-commerce solution serving 10,000+ customers with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       image: "../images/me.jpg",
//       date: "2024",
//       stats: { stars: 124, forks: 32 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//     {
//       id: 2,
//       title: "TaskFlow",
//       category: "fullstack",
//       description:
//         "Collaborative project management tool with real-time updates and team collaboration features.",
//       fullDescription:
//         "Real-time task management platform used by 200+ teams, featuring WebSocket connections, drag-drop interface, team roles, and activity tracking.",
//       tech: ["React", "Express", "Socket.io", "PostgreSQL"],
//       image: "✅",
//       date: "2024",
//       stats: { stars: 89, forks: 23 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//     {
//       id: 3,
//       title: "SocialPulse",
//       category: "frontend",
//       description:
//         "Analytics dashboard for social media managers with beautiful data visualization.",
//       fullDescription:
//         "Interactive dashboard displaying social metrics across 5+ platforms, featuring custom D3.js visualizations and real-time data updates.",
//       tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
//       image: "📊",
//       date: "2023",
//       stats: { stars: 67, forks: 18 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//     {
//       id: 4,
//       title: "MediCare Portal",
//       category: "fullstack",
//       description:
//         "Patient management system with appointment scheduling and medical records.",
//       fullDescription:
//         "HIPAA-compliant healthcare platform managing 5,000+ patients with appointment booking, prescription management, and secure video consultations.",
//       tech: ["React", "Node.js", "Express", "MongoDB"],
//       image: "🏥",
//       date: "2024",
//       stats: { stars: 156, forks: 45 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//     {
//       id: 5,
//       title: "AI Writer",
//       category: "frontend",
//       description: "AI-powered content generation tool using OpenAI API.",
//       fullDescription:
//         "Content generation platform that has helped create over 1 million words of content, supporting blog posts, social media captions, and marketing copy.",
//       tech: ["React", "OpenAI", "Tailwind", "Express"],
//       image: "🤖",
//       date: "2024",
//       stats: { stars: 203, forks: 51 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//     {
//       id: 6,
//       title: "Creative Portfolio",
//       category: "frontend",
//       description:
//         "Modern portfolio website with smooth animations and responsive design.",
//       fullDescription:
//         "Personal portfolio with custom animations, dark mode, and optimized performance, receiving 100,000+ views across multiple projects.",
//       tech: ["React", "Tailwind", "Framer Motion"],
//       image: "🎨",
//       date: "2024",
//       stats: { stars: 45, forks: 12 },
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All Work" },
//     { id: "fullstack", name: "Full Stack" },
//     { id: "frontend", name: "Frontend" },
//   ];

//   const filteredProjects =
//     filter === "all" ? projects : projects.filter((p) => p.category === filter);

//   return (
//     <section className="py-24 bg-white dark:bg-black">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-4">
//             <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 MY WORK
//               </span>
//             </div>
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">
//             <span className="text-gray-900 dark:text-white">Selected</span>
//             <span className="text-blue-600 dark:text-blue-400"> Projects</span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
//             A curated collection of my best work
//           </p>
//         </motion.div>

//         {/* Filter - Minimal */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="flex justify-center gap-1 mb-16"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setFilter(cat.id)}
//               className={`px-6 py-2 text-sm font-medium transition-all ${
//                 filter === cat.id
//                   ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
//                   : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects List - No Cards, Clean Layout */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={filter}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="space-y-16"
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.article
//                 key={project.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//                   {/* Left - Icon/Visual */}
//                   <div className="lg:w-1/3">
//                     <div className="sticky top-8">
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         className="text-8xl lg:text-9xl mb-4"
//                       >
//                         {project.image}
//                       </motion.div>
//                       <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
//                         <span className="flex items-center gap-1">
//                           <FiStar className="text-yellow-500" />
//                           {project.stats.stars}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <FiGitBranch />
//                           {project.stats.forks}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <FiCalendar />
//                           {project.date}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right - Content */}
//                   <div className="lg:w-2/3">
//                     {/* Category Badge */}
//                     <div className="mb-3">
//                       <span
//                         className={`text-xs font-mono px-2 py-1 ${
//                           project.category === "fullstack"
//                             ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30"
//                             : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
//                         }`}
//                       >
//                         {project.category === "fullstack"
//                           ? "FULL_STACK"
//                           : "FRONTEND"}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {project.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     {/* Expandable Details */}
//                     <AnimatePresence>
//                       {expandedId === project.id && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                             {project.fullDescription}
//                           </p>

//                           {/* Tech Stack */}
//                           <div className="flex flex-wrap gap-2 mb-6">
//                             {project.tech.map((tech, idx) => (
//                               <span
//                                 key={idx}
//                                 className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-mono"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>

//                     {/* Actions */}
//                     <div className="flex items-center gap-6">
//                       <a
//                         href={project.liveLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
//                       >
//                         <span>View Project</span>
//                         <FiExternalLink
//                           className="group-hover/link:translate-x-1 transition-transform"
//                           size={14}
//                         />
//                       </a>

//                       <a
//                         href={project.githubLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
//                       >
//                         <FiGithub size={16} />
//                         <span className="text-sm">Source</span>
//                       </a>

//                       <button
//                         onClick={() =>
//                           setExpandedId(
//                             expandedId === project.id ? null : project.id,
//                           )
//                         }
//                         className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
//                       >
//                         <span>
//                           {expandedId === project.id ? "Close" : "Read more"}
//                         </span>
//                         <FiArrowRight
//                           className={`text-xs transition-transform ${expandedId === project.id ? "rotate-90" : ""}`}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Separator Line */}
//                 {index < filteredProjects.length - 1 && (
//                   <div className="mt-16 pt-0 border-b border-gray-200 dark:border-gray-800" />
//                 )}
//               </motion.article>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* Empty State */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//               No projects found
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Try changing the filter
//             </p>
//           </motion.div>
//         )}

//         {/* Footer Link */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
//         >
//           <a
//             href="https://github.com/suniltariq"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
//           >
//             <FiGithub size={20} />
//             <span>View all projects on GitHub</span>
//             <FiArrowRight
//               className="group-hover:translate-x-1 transition-transform"
//               size={14}
//             />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import real_estate_project from "../images/real estate project.avif";
import smart_ask_ai from "../images/Smart_Ask_Ai.webp";
import portfolio from "../images/portfolio.jpg";
import Restaurant from "../images/Restaurant.jpg";

import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiCalendar,
  FiStar,
  FiGitBranch,
} from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Multi Agent Real Estate MernStack Project",
      category: "fullstack",
      description:
        "Full-featured real estate platform with property listings, search filters, authentication, and user dashboard.",

      fullDescription:
        "Developed a complete real estate web application using React, Node.js, Express, and MongoDB. Features include secure JWT authentication, property listing and detailed views, favorites dashboard, and a fully functional REST API. Designed for scalability and smooth user experience.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Jwt", "Aws"],
      image:
        // "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
        real_estate_project,
      date: "2024",
      stats: { stars: 124, forks: 32 },
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Smart Ask AI Chatbot",
      category: "fullstack",
      description:
        "AI-powered question-answer platform with intelligent responses and user-friendly interface.",

      fullDescription:
        "Built Smart Ask AI, an intelligent web application that allows users to ask questions and receive accurate AI-generated answers in real-time. Developed using modern technologies with a clean UI, fast response handling, and scalable backend architecture. Features include dynamic query handling, optimized performance, and seamless user experience.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image:
        // "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
        smart_ask_ai,
      date: "2024",
      stats: { stars: 89, forks: 23 },
      liveLink: "https://example.com",
      githubLink:
        "https://github.com/SunilTariq-WebDeveloper/Smart-Ask-AI-Full-Stack-Project",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "frontend",
      description:
        "Modern personal portfolio website showcasing projects, skills, and web development expertise.",

      fullDescription:
        "Designed and developed a fully responsive personal portfolio website to highlight projects, technical skills, and experience. Built with a clean and modern UI, optimized for performance and accessibility. Includes project showcase, contact functionality, and smooth user experience across all devices.",
      tech: ["Html", "Tailwind CSS", "React"],
      image: portfolio,
      date: "2024",
      stats: { stars: 89, forks: 23 },
      liveLink: "https://example.com",
      githubLink:
        "https://github.com/SunilTariq-WebDeveloper/Smart-Ask-AI-Full-Stack-Project",
    },
    {
      id: 4,
      title: "Restaurant Management System (MERN Stack)",
      category: "fullstack",
      description:
        "Full-stack restaurant management system with order handling, menu management, and admin dashboard.",

      fullDescription:
        "Developed a complete Restaurant Management System using MERN Stack (MongoDB, Express.js, React, Node.js). The system includes user authentication, dynamic menu management, online order placement, order tracking, and an admin dashboard for managing products, categories, and orders. Focused on responsive UI, secure API integration, and smooth user experience.",

      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      image: Restaurant,
      date: "2025",
      stats: { stars: 120, forks: 35 },

      liveLink: "https://example.com",
      githubLink: "https://github.com/SunilTariq-WebDeveloper/FlavourHub",
    },
  ];

  const categories = [
    { id: "all", name: "All Work" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                MY WORK
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Selected</span>
            <span className="text-blue-600 dark:text-blue-400"> Projects</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of my best work
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-1 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                filter === cat.id
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left - Image */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mb-4 overflow-hidden  rounded-2xl"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-84 object-cover rounded-2xl"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/400x300?text=Project+Image";
                          }}
                        />
                      </motion.div>

                      <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <FiStar className="text-yellow-500" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiGitBranch />
                          {project.stats.forks}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiCalendar />
                          {project.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:w-2/3">
                    <div className="mb-3">
                      <span
                        className={`text-xs font-mono px-2 py-1 ${
                          project.category === "fullstack"
                            ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30"
                            : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                        }`}
                      >
                        {project.category === "fullstack"
                          ? "FULL_STACK"
                          : "FRONTEND"}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {project.fullDescription}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-6">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        <span>View Project</span>
                        <FiExternalLink
                          className="group-hover/link:translate-x-1 transition-transform"
                          size={14}
                        />
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm">Source</span>
                      </a>

                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === project.id ? null : project.id,
                          )
                        }
                        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
                      >
                        <span>
                          {expandedId === project.id ? "Close" : "Read more"}
                        </span>
                        <FiArrowRight
                          className={`text-xs transition-transform ${expandedId === project.id ? "rotate-90" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {index < filteredProjects.length - 1 && (
                  <div className="mt-16 pt-0 border-b border-gray-200 dark:border-gray-800" />
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <a
            href="https://github.com/SunilTariq-WebDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
          >
            <FiGithub size={20} />
            <span>View all projects on GitHub</span>
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={14}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
