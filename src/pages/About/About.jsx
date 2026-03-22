/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  BookOpen, 
  Heart, 
  Users, 
  Star, 
  Zap, 
  Search, 
  Leaf,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Stethoscope
} from 'lucide-react';

const AboutPage = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const cofounders = [
    {
      name: 'Mrs. Kebron Amanuel',
      role: 'Co-Founder & Executive Director',
      image: 'https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-1/645709960_1356744469829222_3730060090889567558_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeG4G9GdgqyrZTnl4XsDDQnXx5Lc50J2HFrHktznQnYcWsMo6lX5JCpIRq3ut6Wtbqkon7eD3ddLW8eKh6OvuTsH&_nc_ohc=PR732ZdwGzEQ7kNvwH8tdLn&_nc_oc=AdpXzmQCMJprTVGH8zp8TrZ0Qwyi1duFofGLOOnCv-_OgiaeY4GV_lPTLY7sZrb9hIw&_nc_zt=24&_nc_ht=scontent-lhr6-2.xx&_nc_gid=dtd1CDa511SaefyAaNT-sQ&_nc_ss=7a32e&oh=00_AfyCoJxHwq8I-ncst63-tg75urpA-294ySa0Vt3MBI0nHg&oe=69C5429B',
      bio: 'CEO of Lije Hoy with 6+ years experience in child health advocacy. Passionate about inclusive education.',
      social: { instagram: 'https://www.instagram.com/kb_aman_buku/', facebook: 'https://www.facebook.com/kb.aman.2025' },
    },
    {
      name: 'Fatima Kebede Johnson',
      role: 'Co-Founder & Programs Director',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
      bio: 'Educator and social worker dedicated to child development and disability rights advocacy.',
      social: { linkedin: '#', twitter: '#', instagram: '#' },
    },
    {
      name: 'David Wanjiru Ochieng',
      role: 'Co-Founder & Operations Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      bio: 'Nonprofit operations expert with passion for sustainable child welfare programs across Africa.',
      social: { linkedin: '#', twitter: '#', instagram: '#' },
    },
  ];

  const teamMembers = [
    { name: 'Sarah Ndlovu', role: 'Children Services Manager', icon: <Stethoscope size={24} /> },
    { name: 'Ahmed Hassan', role: 'Education Coordinator', icon: <GraduationCap size={24} /> },
    { name: 'Grace Mutua', role: 'Therapy Specialist', icon: <Heart size={24} /> },
    { name: 'Rashid Mohamed', role: 'Community Outreach', icon: <Users size={24} /> },
    { name: 'Amara Sesay', role: 'Finance Manager', icon: <Briefcase size={24} /> },
    { name: 'Kwame Agyeman', role: 'Communications', icon: <Send size={24} /> },
  ];

  const values = [
    { title: 'Compassion', icon: <Heart className="text-red-500" />, description: 'We see beyond disabilities and embrace the whole child with unconditional love.' },
    { title: 'Inclusion', icon: <Users className="text-blue-500" />, description: 'Every child deserves to belong and thrive regardless of their condition.' },
    { title: 'Excellence', icon: <Star className="text-yellow-500" />, description: 'We provide the highest quality support with professional standards.' },
    { title: 'Empowerment', icon: <Zap className="text-purple-500" />, description: 'We help children discover their potential and build confidence.' },
    { title: 'Transparency', icon: <Search className="text-green-500" />, description: 'Complete accountability and honest communication with all stakeholders.' },
    { title: 'Sustainability', icon: <Leaf className="text-teal-500" />, description: 'Long-term solutions that empower communities for lasting change.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Mission & Vision */}
        <motion.section 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"} 
          variants={containerVariants} 
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed italic">
              "To empower African children with disabilities through comprehensive support, quality education, and unconditional compassion."
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where African children with disabilities are fully included in society, celebrated for their unique abilities, and empowered to pursue their dreams.
            </p>
          </motion.div>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="mb-20 bg-white rounded-3xl p-12 shadow-2xl border border-blue-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-blue-600">
            <BookOpen size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-blue-600 rounded-full"></span> Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
              <p>
                <span className="font-bold text-blue-600">Lije Hoye</span> (meaning "My Child" in Amharic) was founded in 2019 to bridge the gap in disability care across the continent.
              </p>
              <p>
                Starting with just five children in Ethiopia, we have expanded to support over <strong>1,200 children</strong> across <strong>45 countries</strong>, transforming local communities through inclusive therapy and specialized education.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 text-center"
              >
                <div className="mb-4 flex justify-center text-4xl">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Co-Founders */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Executive Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cofounders.map((founder, i) => (
              <motion.div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-72 overflow-hidden relative">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="flex gap-3">
                      <a href={founder.social.instagram} className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"><Instagram size={14}/></a>
                      <a href={founder.social.facebook} className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors"><Facebook size={14}/></a>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-4">{founder.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="mb-24 bg-gray-900 rounded-[3rem] p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-12">Our Dedicated Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {m.icon}
                </div>
                <h4 className="font-bold text-lg">{m.name}</h4>
                <p className="text-gray-400 text-sm">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <Mail className="text-blue-500" />, label: 'Email', val: 'hello@lijehoye.org', href: 'mailto:hello@lijehoye.org' },
            { icon: <Phone className="text-green-500" />, label: 'Phone', val: '+251 911 234 567', href: 'tel:+251911234567' },
            { icon: <MapPin className="text-red-500" />, label: 'Location', val: 'Addis Ababa, Ethiopia', href: '#' }
          ].map((c, i) => (
            <a key={i} href={c.href} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="p-4 bg-gray-50 rounded-2xl">{c.icon}</div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{c.label}</p>
                <p className="font-bold text-gray-900">{c.val}</p>
              </div>
            </a>
          ))}
        </section>

        {/* CTA */}
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="text-center bg-gradient-to-r from-blue-600 to-green-500 p-16 rounded-[3rem] text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black mb-6">Want to be part of the story?</h2>
          <p className="text-blue-50 mb-10 text-lg opacity-90">Join our movement to provide every child with a chance to thrive.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              Support Our Mission
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Volunteer
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;