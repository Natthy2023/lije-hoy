/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
  ShieldCheck,
  Lock,
  BarChart3,
  Globe
} from 'lucide-react';

const Footer = memo(({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://www.facebook.com/share/18RAKscx3q/?mibextid=wwXIfr', color: 'hover:text-blue-600' },
    { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://www.instagram.com/lije_hoy_?igsh=YnhmOHphNTFwenQy&utm_source=qr', color: 'hover:text-pink-600' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://www.youtube.com/@LijeHoy', color: 'hover:text-red-600' },
    { icon: <TikTokIcon />, label: 'TikTok', url: 'https://www.tiktok.com/@lije.hoy', color: 'hover:text-gray-200' },
    { icon: <Send size={20} />, label: 'Telegram', url: 'https://t.me/lije_hoygroup', color: 'hover:text-blue-500' },
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Stories', id: 'stories' },
    { label: 'Programs', id: 'programs' },
    { label: 'Impact', id: 'impact' },
    { label: 'Donate', id: 'donate' },
    { label: 'About', id: 'about' },
  ];

  const contactInfo = [
    { icon: <Mail size={18} className="text-blue-400" />, label: 'Email', value: 'lijehoy47@gmail.com', href: 'mailto:lijehoy47@gmail.com' },
    { icon: <Phone size={18} className="text-green-400" />, label: 'Phone', value: '0922167608', href: 'tel:0922167608' },
    { icon: <MapPin size={18} className="text-red-400" />, label: 'Address', value: 'Addis Ababa, Ethiopia', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-800 dark:to-gray-900 text-white border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.JPG" alt="Lije Hoy Logo" className="h-12 sm:h-16 w-12 sm:w-16 rounded-full object-cover" />
            </div>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
              Empowering African children with disabilities, autism, and health challenges through compassion, education, and opportunity.
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
              <p className="flex items-center gap-1.5 sm:gap-2"><Globe size={12} sm:size={14} className="text-blue-500" /> 45 African Countries</p>
              <p className="flex items-center gap-1.5 sm:gap-2"><Heart size={12} sm:size={14} className="text-green-500" /> 1,200+ Children Supported</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100 uppercase tracking-widest text-xs sm:text-sm">
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage(link.id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-xs sm:text-sm"
                >
                  <ExternalLink size={10} sm:size={12} className="opacity-50" />
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100 uppercase tracking-widest text-xs sm:text-sm">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-5">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-0.5 sm:mt-1 p-1.5 sm:p-2 rounded-lg bg-gray-800 dark:bg-gray-700 group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-tighter">{info.label}</p>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100 uppercase tracking-widest text-xs sm:text-sm">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
              Stay updated on our impact and new stories.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 dark:bg-gray-700/50 border border-gray-700 dark:border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all text-xs sm:text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 px-2.5 sm:px-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg shadow-lg"
              >
                <Send size={12} sm:size={16} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="py-8 sm:py-12 border-t border-gray-800/50 dark:border-gray-700/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Follow Our Journey</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Join our global community of supporters.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 sm:p-3 bg-gray-800 dark:bg-gray-700 rounded-lg sm:rounded-xl transition-all border border-gray-700 dark:border-gray-600 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800/50 dark:border-gray-700/50 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              <p>© {currentYear} <span className="text-gray-200 dark:text-gray-300 font-semibold">Lije Hoy</span>. Made with ❤️ for every child.</p>
            </div>

            {/* Legal */}
            <div className="flex gap-3 sm:gap-6 order-1 sm:order-2">
              <button onClick={() => setCurrentPage('privacy')} className="text-[10px] sm:text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                Privacy
              </button>
              <button onClick={() => setCurrentPage('terms')} className="text-[10px] sm:text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                Terms
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;