import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { en: 'About', id: 'Tentang' }, href: '#about' },
    { name: { en: 'Skills', id: 'Keahlian' }, href: '#skills' },
    { name: { en: 'Projects', id: 'Proyek' }, href: '#projects' },
    { name: { en: 'Contact', id: 'Kontak' }, href: '#contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 shadow-sm' : 'py-4 bg-white/80 dark:bg-gray-900/80'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Satria Ramadan
        </motion.a>
        
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative group font-medium text-gray-700 dark:text-gray-300 px-3 py-2"
              whileHover={{ y: -2 }}
            >
              {link.name[language]}
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-600 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100" />
            </motion.a>
          ))}
          
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke English'}
          >
            <FiGlobe className="text-blue-600" />
            <span className="font-medium">{language === 'en' ? 'EN' : 'ID'}</span>
          </motion.button>
          
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
        </div>
        
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={toggleLanguage}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300"
            whileTap={{ scale: 0.9 }}
            title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke English'}
          >
            <FiGlobe />
          </motion.button>
          
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
          
          <button 
            className="p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-800 px-4 py-6 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
                onClick={() => setMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {link.name[language]}
              </motion.a>
            ))}
            
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <FiGlobe className="text-blue-600" />
              {language === 'en' ? 'Switch to Indonesian' : 'Ganti ke English'}
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}