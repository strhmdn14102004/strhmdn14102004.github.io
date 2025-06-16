import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const content = {
    en: {
      title: "About",
      highlighted: "Me",
      description1: "I am a Fullstack Developer with a primary focus on mobile development using Flutter. With over 3 years of experience, I have helped various businesses build beautiful and functional applications.",
      description2: "Besides mobile development, I also have expertise in web development and REST API creation. Outside of coding, I'm passionate about motorcycles and often spend weekends touring.",
      skillsTitle: "Interests & Skills"
    },
    id: {
      title: "Tentang",
      highlighted: "Saya",
      description1: "Saya seorang Fullstack Developer dengan fokus utama pada pengembangan mobile menggunakan Flutter. Dengan pengalaman lebih dari 3 tahun, saya telah membantu berbagai bisnis membangun aplikasi yang indah dan fungsional.",
      description2: "Selain pengembangan mobile, saya juga memiliki keahlian dalam pengembangan web dan pembuatan REST API. Di luar coding, saya sangat menyukai dunia otomotif terutama motor, dan sering menghabiskan waktu akhir pekan untuk touring.",
      skillsTitle: "Minat & Keahlian"
    }
  };

  const skills = [
    { name: { en: "Mobile Development", id: "Pengembangan Mobile" }, icon: "📱" },
    { name: { en: "Web Development", id: "Pengembangan Web" }, icon: "🌐" },
    { name: { en: "REST API", id: "REST API" }, icon: "🔌" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-20" id="about">
      {/* Animated galaxy background */}
 
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 max-w-3xl mx-auto border border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-6 text-center md:text-left">
                {content[language].title} <span className="text-blue-600">{content[language].highlighted}</span>
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                {content[language].description1}
              </p>
              <p className="text-lg leading-relaxed">
                {content[language].description2}
              </p>
            </div>
            
            <div className="md:w-1/3">
              <h4 className="text-xl font-semibold mb-4 text-center md:text-left">
                {content[language].skillsTitle}
              </h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name[language]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated planet */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-24 h-24 opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2909/2909563.png" alt="Planet" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}