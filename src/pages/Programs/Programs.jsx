/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgramsPage = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const programs = [
    {
      title: 'Education Support',
      emoji: '📚',
      color: 'from-blue-400 to-blue-600',
      description: 'Quality education adapted to each child\'s needs',
      details: [
        'Specialized school tuition',
        'Learning materials & books',
        'One-on-one tutoring sessions',
        'Technology & digital learning',
      ],
    },
    {
      title: 'Medical & Therapy',
      emoji: '🏥',
      color: 'from-red-400 to-pink-600',
      description: 'Healthcare and rehabilitation services',
      details: [
        'Regular medical checkups',
        'Physical therapy sessions',
        'Speech & occupational therapy',
        'Medication & treatment',
      ],
    },
    {
      title: 'Creative Arts',
      emoji: '🎨',
      color: 'from-purple-400 to-pink-600',
      description: 'Art, music, and creative expression',
      details: [
        'Art classes & supplies',
        'Music lessons & instruments',
        'Dance & movement training',
        'Theater & performance',
      ],
    },
    {
      title: 'Sports & Recreation',
      emoji: '⚽',
      color: 'from-green-400 to-teal-600',
      description: 'Adaptive sports and physical activities',
      details: [
        'Adaptive sports training',
        'Equipment & assistive devices',
        'Team sports participation',
        'Recreation activities',
      ],
    },
    {
      title: 'Life Skills Training',
      emoji: '🎯',
      color: 'from-yellow-400 to-orange-600',
      description: 'Independence and daily living skills',
      details: [
        'Self-care training',
        'Vocational skills',
        'Social skills coaching',
        'Career preparation',
      ],
    },
    {
      title: 'Nutritional Support',
      emoji: '🍎',
      color: 'from-orange-400 to-red-600',
      description: 'Healthy meals and nutritional programs',
      details: [
        'Daily nutritious meals',
        'Vitamin supplements',
        'Dietary programs',
        'Health & wellness education',
      ],
    },
  ];

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

  return (
    <section ref={ref} className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support programs designed to help every child thrive
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`text-6xl mb-4 bg-gradient-to-br ${program.color} bg-clip-text text-transparent`}>
                {program.emoji}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>

              <ul className="space-y-3">
                {program.details.map((detail, didx) => (
                  <li key={didx} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all"
          >
            Support Our Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

ProgramsPage.displayName = 'ProgramsPage';

export default ProgramsPage;