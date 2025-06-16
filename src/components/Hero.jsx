import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const bgX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const content = {
    en: {
      name: "Satria Ramadan",
      titles: [
        'Fullstack Developer',
        'Flutter Specialist',
        'Tech Enthusiast',
        'Cosmic Coder'
      ],
      cta: "Explore My Work"
    },
    id: {
      name: "Satria Ramadan",
      titles: [
        'Fullstack Developer',
        'Spesialis Flutter',
        'Pecinta Teknologi',
        'Coder Kosmik'
      ],
      cta: "Lihat Projek Saya"
    }
  };

  const Star = ({ id }) => {
    const size = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;

    return (
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.7 + 0.3
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: duration / 2,
          delay,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    );
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"
        style={{
          backgroundPositionX: bgX,
          backgroundPositionY: bgY,
          backgroundSize: '110% 110%'
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-starfield.png')]" />
      </motion.div>

      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => (
          <Star key={`star-${i}`} id={i} />
        ))}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full border-2 border-white/10 shadow-lg overflow-hidden"
        >
          <img 
            src="src/assets/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          {content[language].name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[2.5rem]"
        >
          <TypeAnimation
            sequence={content[language].titles.flatMap(title => [title, 2000])}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="font-medium"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content[language].cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}