/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
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

  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://www.facebook.com/kamytat?mibextid=LQQJ4d', color: 'hover:text-blue-600' },
    { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://www.instagram.com/lije_hoy?igsh=MzRlODBiNWFlZA==', color: 'hover:text-pink-600' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com/lijeholye', color: 'hover:text-blue-400' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com/company/lijeholye', color: 'hover:text-blue-700' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com/@lijeholye', color: 'hover:text-red-600' },
    { icon: <Send size={20} />, label: 'Telegram', url: 'https://t.me/+jxAnJsRCpXI3YzJk', color: 'hover:text-blue-500' },
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
    { icon: <Mail size={18} className="text-blue-400" />, label: 'Email', value: 'hello@lijehoye.org', href: 'mailto:hello@lijehoye.org' },
    { icon: <Phone size={18} className="text-green-400" />, label: 'Phone', value: '+251 911 234 567', href: 'tel:+251911234567' },
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="text-blue-400 fill-blue-400" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Lije Hoye
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering African children with disabilities, autism, and health challenges through compassion, education, and opportunity.
            </p>
            <div className="space-y-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
              <p className="flex items-center gap-2"><Globe size={14} className="text-blue-500"/> 45 African Countries</p>
              <p className="flex items-center gap-2"><Heart size={14} className="text-green-500"/> 1,200+ Children Supported</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-widest text-sm">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage(link.id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm"
                >
                  <ExternalLink size={12} className="opacity-50" />
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-widest text-sm">
              Contact Us
            </h3>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-1 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">{info.label}</p>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-widest text-sm">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Stay updated on our impact and new stories.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg shadow-lg"
              >
                <Send size={16} />
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
          className="py-12 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Follow Our Journey</h3>
              <p className="text-gray-500 text-sm">Join our global community of supporters.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-800 rounded-xl transition-all border border-gray-700 ${social.color}`}
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
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left order-2 md:order-1">
              <p>© {currentYear} <span className="text-gray-200 font-semibold">Lije Hoye</span>. Made with ❤️ for every child.</p>
            </div>

            {/* Legal */}
            <div className="flex gap-6 order-1 md:order-2">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
              <ShieldCheck size={16} className="text-blue-400" /> Verified NGO
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
              <Lock size={16} className="text-green-400" /> Secure Payment
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
              <BarChart3 size={16} className="text-purple-400" /> Transparency
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;