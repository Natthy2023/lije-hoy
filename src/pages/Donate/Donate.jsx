/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Shield, 
  Star, 
  Crown, 
  Lock, 
  CheckCircle, 
  FileText, 
  Globe 
} from 'lucide-react';

const DonatePage = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedTier, setSelectedTier] = useState('monthly');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedChild, setSelectedChild] = useState(null);

  const tiers = [
    {
      amount: 25,
      name: 'Friend',
      icon: <Heart size={40} />,
      color: 'from-blue-400 to-blue-600',
      description: 'Help with basics',
      includes: [
        '✓ Monthly school supplies',
        '✓ Educational materials',
        '✓ Digital impact updates',
        '✓ Certificate of support',
      ],
    },
    {
      amount: 50,
      name: 'Guardian',
      icon: <Shield size={40} />,
      color: 'from-green-400 to-teal-600',
      description: 'Comprehensive support',
      includes: [
        '✓ Education & therapy',
        '✓ Monthly medical care',
        '✓ Bi-weekly updates',
        '✓ Personal impact letter',
        '✓ Tax deductible receipt',
      ],
      popular: true,
    },
    {
      amount: 100,
      name: 'Hero',
      icon: <Star size={40} />,
      color: 'from-purple-400 to-pink-600',
      description: 'Full support package',
      includes: [
        '✓ Complete education support',
        '✓ Therapy & medical care',
        '✓ Creative programs',
        '✓ Weekly video updates',
        '✓ Annual child meeting',
        '✓ Exclusive recognition',
      ],
    },
    {
      amount: 250,
      name: 'Champion',
      icon: <Crown size={40} />,
      color: 'from-yellow-400 to-orange-600',
      description: 'Transform a life',
      includes: [
        '✓ Full comprehensive support',
        '✓ Priority access to updates',
        '✓ Annual trip sponsorship',
        '✓ Name on website',
        '✓ VIP recognition event',
        '✓ Lifetime impact report',
        '✓ Direct communication',
      ],
    },
  ];

  const children = [
    { 
      id: 1, 
      name: 'Abebe', 
      image: 'https://pulitzercenter.org/sites/default/files/styles/max_1200/public/10-09-18/photo_1.jpg.webp?itok=tPCAzV_n', 
      condition: 'Autism' 
    },
    { 
      id: 2, 
      name: 'Zara', 
      image: 'https://i2.pickpik.com/photos/137/80/886/girl-africa-ethiopia-child-preview.jpg', 
      condition: 'Visual Impairment' 
    },
    { 
      id: 3, 
      name: 'Abenezer', 
      image: 'https://images.squarespace-cdn.com/content/v1/5d628f4f8c8cd40001353051/9ec4963d-b814-49ad-9596-497ffb5b5a8c/IMG_20230615_101647_539.jpg', 
      condition: 'Cerebral Palsy' 
    },
    { 
      id: 4, 
      name: 'Amina', 
      image: 'https://www.bridgestone.com/bwsc/stories/article/2019/08/img/img_article083001_01.jpg', 
      condition: 'Hearing Loss' 
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Make a Difference</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your donation directly supports African children with disabilities, autism, and health challenges.
          </p>
        </motion.div>

        {/* Child Selection - Replaced Emojis with Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose a Child to Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {children.map((child) => (
              <motion.button
                key={child.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedChild(child.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all border-4 ${
                  selectedChild === child.id
                    ? 'border-blue-600 shadow-xl'
                    : 'border-white hover:border-blue-200 shadow-md'
                }`}
              >
                <div className="h-48 w-full bg-gray-200">
                  <img src={child.image} alt={child.name} className="h-full w-full object-cover" />
                </div>
                <div className={`p-4 text-center ${selectedChild === child.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'}`}>
                  <p className="font-bold text-lg">{child.name}</p>
                  <p className={`text-xs ${selectedChild === child.id ? 'text-blue-100' : 'text-gray-500'}`}>{child.condition}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Donation Frequency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Frequency</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['monthly', 'quarterly', 'annual', 'once'].map((freq) => (
              <motion.button
                key={freq}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTier(freq)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedTier === freq
                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-400 text-gray-700'
                }`}
              >
                {freq.charAt(0).toUpperCase() + freq.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Donation Tiers - Emojis replaced with Lucide Icons */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Select Your Donation Tier</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-600 md:scale-105'
                    : 'bg-white border border-gray-100'
                }`}
              >
                {tier.popular && (
                  <div className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className={`mb-4 inline-block p-3 rounded-2xl bg-gradient-to-br ${tier.color} text-white`}>
                  {tier.icon}
                </div>

                <h3 className="text-3xl font-black text-gray-900 mb-2">${tier.amount}<span className="text-sm font-normal text-gray-500">/mo</span></h3>
                <p className="text-lg font-bold text-gray-900 mb-2">{tier.name}</p>
                <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>

                <div className="space-y-3 mb-8">
                  {tier.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle size={14} className="text-green-500" />
                      {item.replace('✓ ', '')}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all bg-gradient-to-r ${tier.color} hover:shadow-lg`}
                >
                  Donate {tier.amount === 250 ? '& Save Lives' : 'Now'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Donation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Donation Amount</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full pl-10 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-bold hover:shadow-lg whitespace-nowrap"
            >
              Donate ${customAmount || '0'}
            </motion.button>
          </div>
        </motion.div>

        {/* Security & Trust with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-10 flex items-center justify-center gap-2">
            <Lock className="text-green-500" /> Your Donation is Secure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Lock className="text-blue-600" />, label: 'SSL Encrypted' },
              { icon: <CheckCircle className="text-green-600" />, label: '100% Verified' },
              { icon: <FileText className="text-purple-600" />, label: 'Tax Deductible' },
              { icon: <Globe className="text-teal-600" />, label: 'Global Impact' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors mb-4">
                  {item.icon}
                </div>
                <p className="font-bold text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6 font-medium">Every dollar makes a direct impact on a child's life</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-xl hover:shadow-2xl transition-all shadow-lg flex items-center gap-3 mx-auto"
          >
            <Lock size={20} /> Donate Securely Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

DonatePage.displayName = 'DonatePage';

export default DonatePage;