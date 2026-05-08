import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useThemeStore from '../../store/themeStore';

const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useThemeStore();

  const handleToggle = () => {
    console.log('Current theme before toggle:', theme);
    toggleTheme();
    console.log('Theme toggled');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
