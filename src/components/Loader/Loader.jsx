/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onLoadComplete, 1200);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-orange-400"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-green-400 border-l-blue-300"
          />
          <div className="absolute inset-4 flex items-center justify-center">
            <motion.img
              src="/logo.JPG"
              alt="Lije Hoy Logo"
              className="w-12 h-12 rounded-full object-cover"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4"
        >
          Lije Hoy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl font-semibold text-blue-600 mb-6"
        >
          ልጄ ሆይ
        </motion.p>

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;