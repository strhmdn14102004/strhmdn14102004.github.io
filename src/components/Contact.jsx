import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiInstagram, FiPhone } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "Get in touch with me",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      buttonText: "Send Message",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
      contactTitle: "Contact Information",
      socialTitle: "Find Me On"
    },
    id: {
      title: "Hubungi Saya",
      subtitle: "Silakan hubungi saya",
      nameLabel: "Nama Anda",
      emailLabel: "Alamat Email",
      messageLabel: "Pesan Anda",
      buttonText: "Kirim Pesan",
      successMessage: "Pesan terkirim dengan sukses!",
      errorMessage: "Gagal mengirim pesan. Silakan coba lagi.",
      contactTitle: "Informasi Kontak",
      socialTitle: "Media Sosial"
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqabbyva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {content[language].title}
          </h3>
          
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                {content[language].contactTitle}
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-500 dark:text-gray-300">Email</h5>
                    <a href="mailto:satsat1410@gmail.com" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition">
                      satsat1410@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-500 dark:text-gray-300">Phone</h5>
                    <a href="tel:+628123456789" className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition">
                      +62 851-7427-0611
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                {content[language].socialTitle}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/satriaramadan14102004" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <FiGithub className="text-xl text-gray-800 dark:text-gray-200" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/satriaramadan" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <FiLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://instagram.com/strhmdn_" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <FiInstagram className="text-xl text-pink-600 dark:text-pink-400" />
                  <span className="font-medium">Instagram</span>
                </a>
                 <a 
                  href="https://instagram.com/strhmdn_" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <FaWhatsapp className="text-xl text-green-600 dark:text-green-400" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
            
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h4 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">
              {language === 'en' ? 'Send Me a Message' : 'Kirim Pesan'}
            </h4>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content[language].nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder={language === 'en' ? 'John Doe' : 'Nama Anda'}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content[language].emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder={language === 'en' ? 'your@email.com' : 'email@anda.com'}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content[language].messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder={language === 'en' ? 'Your message here...' : 'Pesan Anda...'}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'en' ? 'Sending...' : 'Mengirim...'}
                  </>
                ) : (
                  <>
                    {content[language].buttonText}
                    <FiSend className="text-lg" />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {content[language].successMessage}
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  {content[language].errorMessage}
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}