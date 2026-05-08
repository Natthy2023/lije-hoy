/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Heart, Scale, Globe, Users, AlertTriangle, Lock } from 'lucide-react';

const TermsPage = memo(() => {
  const sections = [
    {
      icon: <FileText size={24} />,
      title: 'About Lije Hoy',
      content: 'Lije Hoy is an NGO based in Addis Ababa, Ethiopia that provides: Counseling services, Therapy programs, Family support and training, Special needs support programs, Youth development activities, Community engagement programs. Our mission is to support emotional well-being, personal development, and community empowerment.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Use of Website',
      content: 'Users agree to use the website lawfully and respectfully. Users must not: Use the website for unlawful purposes, Attempt unauthorized access to systems or data, Upload harmful software or malicious content, Misrepresent identity or information, Interfere with website functionality, Use the website to harass or harm others. We reserve the right to restrict access for misuse or violations.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Counseling and Therapy Services',
      content: 'Our counseling and therapy services are intended to provide emotional support, guidance, and mental well-being assistance. Users acknowledge that: Counseling outcomes may vary between individuals, Services are not emergency medical services, Users remain responsible for personal decisions and actions, Serious medical emergencies should be directed to emergency healthcare providers.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Appointments and Payments',
      content: 'Counseling and therapy sessions may involve fees. Current pricing begins at approximately 500 Ethiopian birr per hour depending on the type of therapy or counseling service. Lije Hoy reserves the right to: Modify pricing, Reschedule appointments, Refuse service in appropriate circumstances, Establish cancellation policies.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Confidentiality',
      content: 'We respect confidentiality and privacy in counseling and support services. However, confidentiality may be limited where: Required by law, There is risk of harm, Child safety concerns arise, Abuse or exploitation is suspected, Disclosure is legally necessary.'
    },
    {
      icon: <Users size={24} />,
      title: 'Children and Youth Services',
      content: 'Programs involving children and youth may require parental or guardian consent. Parents and guardians are responsible for: Providing accurate information, Cooperating with safety procedures, Supporting the welfare of participating children. Lije Hoy prioritizes child protection and safety standards.'
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'Disclaimer',
      content: 'The information provided on this website is for general informational and support purposes. While we aim to provide accurate and helpful information, Lije Hoy does not guarantee: Continuous website availability, Error-free content, Specific counseling outcomes, Uninterrupted services. Services are provided on a reasonable-effort basis.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Ethiopian Law',
      content: 'These Terms and Conditions shall be governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes relating to website use or services shall be subject to applicable Ethiopian legal processes and jurisdiction.'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 dark:text-gray-400">Last Updated: May 8, 2026</p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl text-blue-600">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">For questions regarding these Terms and Conditions, please contact:</p>
          <div className="space-y-2">
            <p className="text-gray-900 dark:text-white"><strong>Lije Hoy</strong></p>
            <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</p>
            <p className="text-gray-600 dark:text-gray-400">Email: lijehoy47@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: 0922167608</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TermsPage.displayName = 'TermsPage';

export default TermsPage;
