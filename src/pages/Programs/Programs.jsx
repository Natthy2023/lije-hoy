/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgramsPage = memo(({ setCurrentPage }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const programs = [
    {
      title: 'Counseling Services',
      emoji: '💙',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      description: 'Professional counseling for individuals, couples, families, and groups dealing with anxiety, depression, and emotional challenges.',
      details: [
        'Individual counseling sessions',
        'Couples therapy',
        'Family counseling',
        'Group therapy programs',
      ],
    },
    {
      title: 'Therapy & Mental Health',
      emoji: '🧠',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      description: 'Comprehensive therapy and mental health support for emotional regulation, anxiety disorders, and personality disorders.',
      details: [
        'Group Therapy',
        'Couples Therapy',
        'Personality Disorder Support',
        'Emotional Regulation Support',
        'Anxiety Disorder Counseling',
      ],
    },
    {
      title: 'Family Support Programs',
      emoji: '👨‍👩‍👧‍👦',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      description: 'Counseling and training programs designed to strengthen families and improve communication and emotional well-being.',
      details: [
        'Family counseling sessions',
        'Communication training',
        'Parenting support programs',
        'Home support systems',
      ],
    },
    {
      title: 'Special Needs Support',
      emoji: '🌟',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      description: 'Specialized training, counseling, and therapeutic programs for children with special needs.',
      details: [
        'Specialized training programs',
        'Counseling services',
        'Therapeutic interventions',
        'Emotional and developmental support',
      ],
    },
    {
      title: 'Youth Development',
      emoji: '�',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      description: 'Youth-focused programs including counseling, skills training, and personal development activities.',
      details: [
        'Counseling services',
        'Skills training programs',
        'Community activities',
        'Personal development workshops',
      ],
    },
    {
      title: 'Community Programs',
      emoji: '🤝',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      description: 'Community-based programs promoting social inclusion and mental well-being for individuals and families.',
      details: [
        'Community counseling',
        'Social inclusion activities',
        'Support groups',
        'Community engagement programs',
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
    <section ref={ref} className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`text-6xl mb-4 bg-gradient-to-br ${program.color} bg-clip-text text-transparent`}>
                {program.emoji}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>

              <ul className="space-y-3">
                {program.details.map((detail, didx) => (
                  <li key={didx} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{detail}</span>
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Make a Difference?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('donate')}
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