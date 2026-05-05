import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdSend, MdCheckCircle } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactMethods = [
    { icon: HiMail, label: "Email", value: "suniltariq08@gmail.com", link: "mailto:suniltariq08@gmail.com", color: "from-red-500 to-rose-500", iconColor: "text-red-500" },
    { icon: HiPhone, label: "Phone", value: "+92 325 1987313", link: "tel:+923251987313", color: "from-green-500 to-emerald-500", iconColor: "text-green-500" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+92 3251987313", link: "https://wa.me/923251987313", color: "from-emerald-500 to-teal-500", iconColor: "text-emerald-500" },
    { icon: HiLocationMarker, label: "Location", value: "Lahore, Pakistan", link: null, color: "from-purple-500 to-indigo-500", iconColor: "text-purple-500" },
    { icon: HiClock, label: "Response Time", value: "Within 24 hours", link: null, color: "from-orange-500 to-amber-500", iconColor: "text-orange-500" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/SunilTariq-WebDeveloper",
      color: "hover:bg-gray-700 dark:hover:bg-gray-700",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sunil-tariq-7298523a0/",
      color: "hover:bg-blue-600 dark:hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4"
          >
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with innovative people. 
                Feel free to reach out through any of these channels!
              </p>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className={`flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer transition-all duration-300`}
                      onClick={() => method.link && copyToClipboard(method.value, method.label)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-500">{method.label}</p>
                          {method.link ? (
                            <a href={method.link} className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                              {method.value}
                            </a>
                          ) : (
                            <p className="font-medium text-gray-700 dark:text-gray-300">{method.value}</p>
                          )}
                        </div>
                      </div>
                      {method.link && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedField === method.label ? (
                            <MdCheckCircle className="text-green-500 text-xl" />
                          ) : (
                            <FiCopy className="text-gray-400 dark:text-gray-500 text-lg" />
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-500 dark:text-gray-500">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:shadow-lg group`}
                      >
                        <Icon className="text-gray-600 dark:text-gray-400 text-xl group-hover:text-white transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Sunil Tariq"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="suniltariq08@gmail.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <MdCheckCircle className="text-xl" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message <MdSend />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-200 dark:border-gray-800">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for freelance work
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-600">|</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;