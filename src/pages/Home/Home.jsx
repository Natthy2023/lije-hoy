/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  BookOpen, 
  ChevronRight, 
  Users, 
  Globe, 
  GraduationCap, 
  Clock,
  Palette,
  Music,
  Activity,
  Award,
  Play,
  X
} from 'lucide-react';

// New Video Section Component
const VideoImpactSection = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [isOpen, setIsOpen] = useState(false);

  // Placeholder video ID - You can replace this with the actual Lije Hoye video ID later
  const videoId = "KLXUFl3SqbM"; 

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our Impact in Motion
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Watch how Lije Hoye is transforming lives and creating inclusive communities across Africa.
        </motion.p>

        {/* Video Thumbnail/Trigger */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-gray-200"
          onClick={() => setIsOpen(true)}
        >
          <img 
            src={`https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/653705856_1368495758654093_2545036986050234793_n.jpg?stp=c0.225.1366.1366a_cp6_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeGLQIxoWBpaeZ1DVpF-n1diL6Wo2JXLWxsvpajYlctbGytXlCRv3L2WpeIFknt4oIo-rw4w0jy_0HzN9fFPlUdN&_nc_ohc=mkjFMB9ZmK4Q7kNvwEaLhre&_nc_oc=AdqrQFhyRWPq9QYMnUBe8HuKxCIk7ohYYmaG5bHm8tCvwUH7ARXmmfPEMmqsYDKdcQM&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=dk6FDoPctzwcZOGrQzfoRg&_nc_ss=7a32e&oh=00_AfyQNQ9LR8TDOgFpM0fW8C5mIwuJYoqrjyvHGx0qfXmc-Q&oe=69C52322`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-xl"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </motion.div>
          </div>
        </motion.div>

        {/* Video Lightbox Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
              onClick={() => setIsOpen(false)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-10 h-10" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

const HeroSection = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background Image with Lower Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
          alt="Happy children" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Adjusted Gradient Opacity (from /90 to /40) to view background clearly */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-green-50/60 shadow-inner" />
      </div>

      {inView && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-5xl mx-auto text-center z-10"
        >
          {/* Transparent Gradient Header */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-600/90 to-green-500/90 bg-clip-text text-transparent mb-6 tracking-tighter"
          >
            ልጄ ሆይ
          </motion.h1>

          {/* Subheader with 90% opacity */}
          <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900/90 mb-4 leading-tight">
            Every Child Deserves <br className="hidden md:block" /> Compassion & Opportunity
          </motion.p>

          {/* Description with 75% opacity for better background visibility */}
          <motion.p variants={itemVariants} className="text-xl md:text-1xl text-gray-800/75 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
            Supporting African children with autism, disabilities, and health challenges. We celebrate their talents, 
            support their dreams, and create a world where every child thrives.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Buttons maintained with strong colors to pop against the transparent background */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Heart className="w-6 h-6 fill-current" /> Support a Child Today
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-4 border-transparent bg-origin-border bg-gradient-to-r from-blue-600 to-green-500 text-gray-900 rounded-full font-bold text-xl shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              {/* Button inner background also slightly transparent */}
              <span className="absolute inset-0 bg-white/80 m-[2px] rounded-full flex items-center justify-center group-hover:bg-blue-50/90 transition-colors backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-blue-600" /> 
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Read Their Stories</span>
              </span>
              <span className="invisible flex items-center gap-3">
                <BookOpen className="w-6 h-6" /> Read Their Stories
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});

const PhotoGallery = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const photoCollections = [
    {
      title: 'Playing Together',
      description: 'African children with disabilities enjoying sports and outdoor activities',
      image: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/652910004_1368502961986706_37758606975209761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH_CAkChWCUzGKuH_B7DuX3Y8MqakOw-3VjwypqQ7D7dfzgwDntc_doh7YxDtAOer1zyqcgFnxiBYiy6heRR6cP&_nc_ohc=n7-3ytEZ3AUQ7kNvwFCaAmh&_nc_oc=AdrHkwyztQLfYpTpFipC_8MriHtnPS7pnqbieyH-rVbrEBgRHzq8cYEh4ygyJoMHWM8&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=a1j3v-E8nVB7zovse7Bi7w&_nc_ss=7a32e&oh=00_AfxJoKhzL4-UXarGmwIwoRR0AZDVEOwnrPOQjeuAVuXTHw&oe=69C53C5A',
    },
    {
      title: 'Learning & Education',
      description: 'Children engaging in inclusive education with specialized support',
      image: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/653700313_1368499591987043_3069481828454013939_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHIz-n26cvH3TRJpcBUyadV9lUHQQYuXZv2VQdBBi5dmz2qLdY6o8r6jZ0OPFf1dawP89W9KGrGbBuSRMqYuKTU&_nc_ohc=YPABt27yF5YQ7kNvwGoC4BK&_nc_oc=AdroETJsiqrt-BdknafTUMt-OUiapf7qhYAE2rIhsfgeqnk5mLFvhEXj3cCx2pSqfg4&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=r5prfFqd9aOV2MGFgh3heQ&_nc_ss=7a32e&oh=00_AfzVp0alRk0UfDg5ItD0RcvCuguesJiNg30nM701XMmHsQ&oe=69C51B0C',
    },
    {
      title: 'Creative Expression',
      description: 'Art, music, and dance helping children express themselves',
      image: 'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/647395811_921636527347565_7865315474778511239_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFE-Eekf6PTO0PgyzVNYE9M8kC52RNOkOryQLnZE06Q6rfHPxC-zd13CZpkLp42WOBFh9tCR-jh6OytADA4qPs6&_nc_ohc=DYt78_q2PXUQ7kNvwHXvwbo&_nc_oc=AdrzuD6JljDFdXF1JDObDWgD5r_uEz9yLHHo18HNo79EeVt4StrqAUvMGpTI8wd1M-Q&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=LKYwSYDcEviVqZ_SADT2UQ&_nc_ss=7a32e&oh=00_Afwb4A7FCZ8IPaaWnCcxze2vO830H7xQLvAZ0gHPH4huhw&oe=69C5193B',
    },
    {
      title: 'Medical & Therapy Support',
      description: 'Physical therapy and professional medical care services',
      image: 'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/653709252_1370874645082871_6326336076313302020_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEHTCBi03JYOZjNyPWHylgxCyPOi5DFwV0LI86LkMXBXZgwirevGC4yKr_fHiebq0RzIDeRhy5HLvrZ3epTs1v5&_nc_ohc=tJv4VQ_bMoAQ7kNvwE4GdAg&_nc_oc=AdqNo4L_j9STMXo5A4T8uFltWM180JpqQx1DRastM82hAE8x8-kOavChRMwddCmtWqo&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=cFfDp9V1DIONdOTxiv89IA&_nc_ss=7a32e&oh=00_AfytyTawb-kzg7limuaQe-vOfF6_xNmcPmcH7dmn1_WZ5A&oe=69C53992',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Children in Action</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {photoCollections.map((collection, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[16/9]"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-sm opacity-90">{collection.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const FeaturedChildren = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const children = [
    {
      id: 1,
      name: 'Abebe',
      age: 4,
      condition: 'Autism Spectrum Disorder',
      story: 'Loves art and music. With therapy support, Abebe is learning to express himself and connect with others.',
      image: 'https://pulitzercenter.org/sites/default/files/styles/max_1200/public/10-09-18/photo_1.jpg.webp?itok=tPCAzV_n',
      color: 'bg-purple-600',
      progress: 65,
    },
    {
      id: 2,
      name: 'Zara',
      age: 10,
      condition: 'Visual Impairment',
      story: 'Despite her challenges, Zara is a top student. She dreams of becoming a teacher and inspiring others.',
      image: 'https://i2.pickpik.com/photos/137/80/886/girl-africa-ethiopia-child-preview.jpg',
      color: 'bg-rose-600',
      progress: 80,
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Meet Our Champions</h2>
      <p className="text-xl text-gray-600 text-center mb-12">Every child has unique talents. Your support helps them shine.</p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {children.map((child) => (
          <motion.div
            key={child.id}
            initial={{ opacity: 0, x: child.id % 2 === 0 ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="md:w-1/2">
              <img src={child.image} alt={child.name} className="h-full w-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${child.color}`}>
                {child.condition}
              </span>
              <h3 className="text-3xl font-bold mt-4">{child.name}, {child.age}</h3>
              <p className="text-gray-600 mt-4 mb-6 italic">"{child.story}"</p>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 font-bold">
                  <span>Funding Goal</span>
                  <span>{child.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className={`h-full ${child.color} rounded-full`} style={{ width: `${child.progress}%` }} />
                </div>
              </div>

              <button className={`w-full py-3 ${child.color} text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}>
                <Heart className="w-5 h-5" /> Support {child.name}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

const ImpactStats = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: 1200, label: 'Children Supported', icon: <Users className="w-8 h-8" /> },
    { number: 45, label: 'African Countries', icon: <Globe className="w-8 h-8" /> },
    { number: 98, label: '% Success Rate', icon: <Award className="w-8 h-8" /> },
    { number: 5000, label: 'Volunteer Hours', icon: <Clock className="w-8 h-8" /> },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-500  text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center flex flex-col items-center">
            <div className="p-4 bg-white/10 rounded-2xl mb-4">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold mb-2">{stat.number}+</div>
            <p className="text-blue-100 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

const Home = memo(() => (
  <div className="min-h-screen font-sans">
    <HeroSection />
    <PhotoGallery />
    <VideoImpactSection />
    <FeaturedChildren />
    <ImpactStats />
  </div>
));

export default Home;