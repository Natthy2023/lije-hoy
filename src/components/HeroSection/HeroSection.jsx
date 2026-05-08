import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = memo(({ onDonate }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply opacity-20 blur-3xl"
      />

      {inView && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto text-center z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {t('home.title')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6"
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Empowering families, supporting special needs children, and promoting mental well-being through counseling, therapy, and community programs in Addis Ababa.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onDonate}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all"
            >
              {t('home.cta')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
            >
              {t('common.learnMore')}
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: t('home.stats.children'), value: '2,500+' },
              { label: t('home.stats.donors'), value: '1,200+' },
              { label: t('home.stats.impact'), value: '100%' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;