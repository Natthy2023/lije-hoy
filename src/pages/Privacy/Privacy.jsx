/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, User, Eye, FileText, Globe } from 'lucide-react';

const PrivacyPage = memo(() => {
  const sections = [
    {
      icon: <Shield size={24} />,
      title: 'Introduction',
      content: 'Lije Hoy is a non-governmental organization (NGO) based in Addis Ababa, Ethiopia, committed to supporting children with special needs, women, youth, and families through counseling, therapy, training, and community-based programs. Your privacy and confidentiality are important to us. This Privacy Policy explains how we collect, use, protect, and manage your personal information when you use our website, contact us, or participate in our services.'
    },
    {
      icon: <User size={24} />,
      title: 'Information We Collect',
      content: 'We may collect personal information including: Full name, Phone number, Email address, Address information, Emergency contact information, Appointment and counseling information, Information related to children or family support services, Special needs support requirements, Website usage and technical information. For counseling and therapy services, we may also collect sensitive personal information necessary to provide professional support.'
    },
    {
      icon: <Eye size={24} />,
      title: 'How We Use Your Information',
      content: 'We use collected information to: Provide counseling and therapy services, Organize appointments and support programs, Deliver family, youth, and special needs services, Respond to inquiries and communication requests, Improve our services and website experience, Maintain internal administrative records, Protect the safety and well-being of individuals, Comply with legal obligations. We only collect information that is reasonably necessary for our services.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Counseling Confidentiality',
      content: 'Lije Hoy respects the confidentiality of counseling and therapy sessions. Information shared during counseling sessions will remain private except where: Disclosure is required by Ethiopian law, There is a risk of harm to the individual or others, Child protection concerns arise, Abuse or neglect is suspected, A court order requires disclosure, Written consent is provided by the individual or guardian.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Children\'s Privacy and Protection',
      content: 'Because we work with children and youth, protecting children\'s privacy and safety is a priority. When collecting information about children: We seek parental or guardian involvement where appropriate, We collect only information necessary for support services, We apply child protection and safeguarding practices, We do not knowingly misuse children\'s information.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Sharing of Information',
      content: 'We do not sell or rent personal information. Information may only be shared: With authorized counselors or therapists, With healthcare or support professionals when necessary, With legal authorities when required by law, During emergencies involving safety or protection, With trusted service providers supporting website operations.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Data Security',
      content: 'We implement reasonable technical and organizational measures to protect personal information against: Unauthorized access, Misuse, Loss, Alteration, Disclosure. However, no online platform can guarantee complete security. Users should avoid sending highly sensitive information through unsecured communication channels.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Your Rights',
      content: 'Subject to applicable laws, users may request: Access to personal information, Correction of inaccurate information, Deletion of information where appropriate, Withdrawal of consent where applicable. Requests can be submitted through our official contact channels.'
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">If you have any questions regarding this Privacy Policy or your personal information, please contact:</p>
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

PrivacyPage.displayName = 'PrivacyPage';

export default PrivacyPage;
