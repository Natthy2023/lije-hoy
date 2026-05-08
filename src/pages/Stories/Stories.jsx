/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Brain,
  Accessibility,
  Eye,
  CheckCircle2,
  Heart,
  Sparkles
} from 'lucide-react';

const StoriesPage = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stories = [
    {
      id: 1,
      name: 'Bereket - Autism Spectrum Disorder',
      category: 'autism',
      age: 6,
      // Focus: Artistic talent / Ethiopia
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCzjFeK-4vE46hjOuWp3Gm3wcRzUAy06bmQ&s',
      color: 'from-purple-500 to-blue-600',
      fullStory: `Bereket was diagnosed with autism at age 2. His parents discovered he had an extraordinary talent for art and music. With proper support, Bereket has learned to express his emotions through painting. His dream is to become an artist and use his work to communicate with the world.`,
      achievements: ['Completed 50+ artworks', 'Won local art competition', 'Learning music instruments'],
      monthlyNeeds: 150,
    },
    {
      id: 2,
      name: 'Selam - Visual Impairment',
      category: 'physical',
      age: 5,
      // Focus: Education / Resilience
      image: 'https://s3.us-east-1.amazonaws.com/orbis-website-assets/www/images/News/Hawassa-strabismus-HBT/_768x638_crop_center-center_none/DSC00630_Esete.jpg',
      color: 'from-pink-500 to-rose-600',
      fullStory: `Selam lost her vision in an accident when she was 3. Today, she is one of the brightest students in her class at a school for the blind, excelling in languages and Braille. She dreams of becoming a teacher to inspire others.`,
      achievements: ['Fluent in 3 languages', 'Top grades in school', 'Independent mobility'],
      monthlyNeeds: 180,
    },
    {
      id: 3,
      name: 'Abenezer - Cerebral Palsy',
      category: 'physical',
      age: 9,
      // Focus: Play / Sports
      image: 'https://images.squarespace-cdn.com/content/v1/5d628f4f8c8cd40001353051/9ec4963d-b814-49ad-9596-497ffb5b5a8c/IMG_20230615_101647_539.jpg',
      color: 'from-green-500 to-teal-600',
      fullStory: `Abenezer learned to walk with assistive devices despite motor control challenges. He plays football with adapted rules and is an active member of his school sports team, proving limits are just challenges.`,
      achievements: ['Walks with support', 'Plays adaptive sports', 'Math excellence'],
      monthlyNeeds: 200,
    },
    {
      id: 4,
      name: 'Amina - Hearing Loss',
      category: 'sensory',
      age: 7,
      // Focus: Joy / Dance
      image: 'https://www.bridgestone.com/bwsc/stories/article/2019/08/img/img_article083001_01.jpg',
      color: 'from-yellow-500 to-orange-600',
      fullStory: `Amina communicates fluently with sign language and hearing aids. She is an enthusiastic student, passionate about dance. Her joy is contagious, and she dreams of performing on big stages.`,
      achievements: ['Fluent in sign language', 'Excellent dancer', 'Active in school'],
      monthlyNeeds: 160,
    },
    {
      id: 5,
      name: 'Henok - Down Syndrome',
      category: 'autism',
      age: 10,
      // Focus: Group / Community
      image: 'https://static.africa-press.net/ethiopia/sites/50/2022/03/img-623cb86415cde.jpg',
      color: 'from-indigo-500 to-purple-600',
      fullStory: `Henok attends a mainstream school with specialized support. He loves music and the school choir. He is learning life skills and is determined to be as independent as possible.`,
      achievements: ['Sings in school choir', 'Learning life skills', 'Makes friends easily'],
      monthlyNeeds: 170,
    },
    {
      id: 6,
      name: 'Aster - Multiple Disabilities',
      category: 'physical',
      age: 8,
      // Focus: Determination / Learning
      image: 'https://imageio.forbes.com/specials-images/imageserve/69387bb9dcc1bd8d18ae896e/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds',
      color: 'from-red-500 to-pink-600',
      fullStory: `Aster uses a wheelchair and communication board. Her teachers say she is the most determined student they know, always smiling and eager to participate in every classroom activity.`,
      achievements: ['Uses assistive tech', 'Always smiling', 'Eager learner'],
      monthlyNeeds: 220,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Children', icon: <Users size={18} /> },
    { id: 'autism', label: 'Autism', icon: <Brain size={18} /> },
    { id: 'physical', label: 'Physical', icon: <Accessibility size={18} /> },
    { id: 'sensory', label: 'Sensory', icon: <Eye size={18} /> },
  ];

  const filtered = selectedCategory === 'all'
    ? stories
    : stories.filter(s => s.category === selectedCategory);

  return (
    <section ref={ref} className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs sm:text-sm mb-4">
            <Sparkles size={14} sm:size={16} /> HEROES OF HOPE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Children Stories</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Real stories of courage from Ethiopia and across Africa. Each child's journey is a testament to the power of support.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-12 sm:mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold transition-all text-xs sm:text-sm md:text-base ${selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((story) => (
              <motion.div
                layout
                key={story.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent`} />
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-white">
                    <p className="text-xs sm:text-sm font-medium opacity-90">Age {story.age}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{story.name.split('-')[0]}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                    "{story.fullStory}"
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="text-green-500" size={16} sm:size={18} /> Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {story.achievements.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">Support Goal</p>
                      <p className="text-xl sm:text-2xl font-black text-blue-600">${story.monthlyNeeds}<span className="text-xs sm:text-sm font-normal text-gray-400">/mo</span></p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${story.color} text-white rounded-lg sm:rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-100 dark:shadow-blue-900 text-sm sm:text-base`}
                    >
                      <Heart size={16} sm:size={18} fill="currentColor" /> Support {story.name.split(' ')[0]}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

StoriesPage.displayName = 'StoriesPage';

export default StoriesPage;