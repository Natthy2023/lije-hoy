/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Globe2,
  GraduationCap,
  HandHeart,
  BookOpen,
  Activity,
  Heart,
  CheckCircle2
} from 'lucide-react';

const ImpactPage = memo(({ setCurrentPage }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { number: 1200, label: 'Children Supported', icon: <Users className="w-10 h-10" /> },
    { number: 45, label: 'African Countries', icon: <Globe2 className="w-10 h-10" /> },
    { number: 98, label: '% School Completion', icon: <GraduationCap className="w-10 h-10" /> },
    { number: 5000, label: 'Volunteer Hours', icon: <HandHeart className="w-10 h-10" /> },
  ];

  const outcomes = [
    {
      category: 'Education',
      image: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/653700313_1368499591987043_3069481828454013939_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHIz-n26cvH3TRJpcBUyadV9lUHQQYuXZv2VQdBBi5dmz2qLdY6o8r6jZ0OPFf1dawP89W9KGrGbBuSRMqYuKTU&_nc_ohc=YPABt27yF5YQ7kNvwGdZHyp&_nc_oc=AdpdECaDroaE8OdQh_54d9mCM_CRHx7V1BPXi7FY1qVLeNqpOruvBhNnQ1ZWAW9D6Ek&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=_oJKsjI2MEQVovdsNAcrwg&_nc_ss=7a32e&oh=00_AfyJFKLiYm53b-MLFkDppuZSxX6X8l2wjrUefiFf-G61Rg&oe=69C51B0C',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: 'from-blue-400 to-blue-600',
      results: [
        '95% of children complete school',
        '88% pass with good grades',
        '74% continue to secondary education',
        '500+ children in special schools',
      ],
    },
    {
      category: 'Health & Development',
      image: 'https://media.path.org/images/05012_hr-A-woman-holds-a-baby-on-her-lap-as.max-1200x800.jpg',
      icon: <Activity className="w-8 h-8 text-white" />,
      color: 'from-green-400 to-teal-600',
      results: [
        '80% improved motor skills',
        '75% improved communication',
        '90% received medical care',
        '1000+ therapy sessions provided',
      ],
    },
    {
      category: 'Social & Emotional',
      image: 'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/651387722_1368502971986705_1920352152108497509_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFbxN9GL6WNsOyD_WOq2GtKWJP6wDGmY0FYk_rAMaZjQY1bZun1l1nuaLB1caPORJxafepW1crIPSsMragUMLej&_nc_ohc=DQWgn1b5WK4Q7kNvwGDLeRR&_nc_oc=AdqBdtd8UT-Let5fFH2m-_PTSS8XUOUkIv-OyJRZWjIFFkI-_mbCPmc0aA7uR_v0mWk&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=rDXiEqBCHbX5eSNCNwOdpQ&_nc_ss=7a32e&oh=00_AfxEQP-svZSI-mdSfNZgY6uLt8E3LNOXoOlt1zLi9UMbCA&oe=69C5345B',
      icon: <Heart className="w-8 h-8 text-white" />,
      color: 'from-pink-400 to-rose-600',
      results: [
        '85% improved confidence',
        '92% have strong friendships',
        '88% participate in activities',
        '100% feel loved and supported',
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
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from real support – see how your donations change lives.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-3xl text-center group overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-500 mb-6 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-blue-700 mb-2">
                {inView ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {stat.number}{stat.label.includes('%') ? '' : '+'}
                  </motion.span>
                ) : "0"}
              </div>
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Outcomes with Real Imagery and Retained Gradients */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-10 mb-24"
        >
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Image Section with Iconic Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img src={outcome.image} alt={outcome.category} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                {/* Original Gradient appearance retained here */}
                <div className={`absolute -bottom-8 -left-8 ${outcome.color} p-10 rounded-full shadow-lg`}>
                  <div className="relative -top-2 -right-2">
                    {outcome.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-12">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{outcome.category}</h3>
                <ul className="space-y-4">
                  {outcome.results.map((result, ridx) => (
                    <li key={ridx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Showcase (Retained Appearance) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Stories of Resilience</h2>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                name: "Abebe's Achievement",
                story: "From isolated to artistic. Abebe now displays his art in community centers and inspires others.",
                icon: "🎨", // Emojis here were considered "personal stories" rather than functional UI icons.
              },
              {
                name: "Zara's Dream",
                story: "Top of her class and working toward becoming a teacher. Zara proves blindness is not a barrier.",
                icon: "📚",
              },
              {
                name: "Marcus' Victory",
                story: "Sports champion with cerebral palsy. Marcus leads his school's adaptive sports team with pride.",
                icon: "⚽",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="bg-white/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
              >
                <div className="text-4xl mb-6">{story.icon}</div>
                <h3 className="text-xl font-bold mb-3">{story.name}</h3>
                <p className="text-gray-100 leading-relaxed text-sm">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action (Retained Color) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('donate')}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
          >
            <Heart size={22} fill="currentColor" />
            Support a Child Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

ImpactPage.displayName = 'ImpactPage';

export default ImpactPage;