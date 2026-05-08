/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  Lock,
  CheckCircle,
  Building2,
  Copy,
  Phone,
  Mail
} from 'lucide-react';

const DonatePage = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section ref={ref} className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Make a Difference</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Your donation directly supports children with special needs, women, youth, and families in Addis Ababa through counseling, therapy, and community programs.
          </p>
        </motion.div>

        {/* Bank Account Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700 mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <Building2 className="text-blue-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Bank Transfer Details</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6">
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Bank Name</label>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Commercial Bank of Ethiopia (CBE)</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6">
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Account Name</label>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Lije Hoy</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6">
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Account Number</label>
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">1000123456789</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard('1000123456789')}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  title="Copy account number"
                >
                  <Copy size={16} />
                </motion.button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6">
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Branch</label>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Addis Ababa Main Branch</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700 mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Contact Us</h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</label>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">0922167608</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600">
                <Mail size={20} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</label>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">lijehoy47@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Impact */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Your Donation Supports</h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: <Heart size={24} />, text: 'Counseling services for individuals and families' },
              { icon: <CheckCircle size={24} />, text: 'Therapy and mental health support programs' },
              { icon: <Building2 size={24} />, text: 'Family support and training programs' },
              { icon: <Lock size={24} />, text: 'Special needs children support services' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <p className="text-sm sm:text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 font-medium text-base sm:text-lg">
            Thank you for your generous support. Every contribution makes a difference in the lives of those we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

DonatePage.displayName = 'DonatePage';

export default DonatePage;