import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const content = {
    en: {
      title: "My Projects",
      subtitle: "Some projects I've worked on with various technologies",
      viewMore: "View More Projects",
      clickForDetails: "Click for details",
      viewProject: "View Project"
    },
    id: {
      title: "Proyek Saya",
      subtitle: "Beberapa proyek yang telah saya kerjakan dengan berbagai teknologi",
      viewMore: "Lihat Proyek Lainnya",
      clickForDetails: "Klik untuk detail",
      viewProject: "Lihat Proyek"
    }
  };

  const projects = [
    {
      title: {
        en: "Flutter Attendance App",
        id: "Aplikasi Absensi Flutter"
      },
      description: {
        en: "Location-based attendance system with notifications and Firebase.",
        id: "Sistem absensi berbasis lokasi dengan notifikasi dan Firebase."
      },
      tags: ["Flutter", "Firebase", "Geolocation"],
      image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
      link: "#"
    },
    {
      title: {
        en: "Inventory API",
        id: "API Inventaris Barang"
      },
      description: {
        en: "REST API with Node.js and MongoDB for warehouse application.",
        id: "REST API dengan Node.js dan MongoDB untuk aplikasi gudang."
      },
      tags: ["Node.js", "Express", "MongoDB"],
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      link: "#"
    },
    {
      title: {
        en: "Portfolio Website",
        id: "Website Portofolio"
      },
      description: {
        en: "Built with React, Tailwind, and Framer Motion animations.",
        id: "Dibuat dengan React, Tailwind, dan animasi Framer Motion."
      },
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      link: "#"
    },
    {
      title: {
        en: "E-commerce App",
        id: "Aplikasi E-commerce"
      },
      description: {
        en: "Mobile e-commerce application with payment integration.",
        id: "Aplikasi e-commerce mobile dengan integrasi pembayaran."
      },
      tags: ["Flutter", "Firebase", "Stripe"],
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965300.png",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-2">{content[language].title}</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-8 w-max px-4 mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card flex-shrink-0 perspective-1000"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                >
                  <motion.div
                    className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
                    animate={{ 
                      rotateY: flippedIndex === index ? 180 : 0,
                      scale: hoveredIndex === index ? 1.03 : 1
                    }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 backface-hidden p-6 flex flex-col">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3">{project.title[language]}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div 
                        className="absolute top-4 right-4 text-xs px-2 py-1 bg-blue-500 text-white rounded"
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 10
                        }}
                      >
                        {content[language].clickForDetails}
                      </motion.div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg overflow-hidden border border-blue-700 backface-hidden transform-rotate-y-180 flex flex-col items-center justify-center p-6">
                      <img src={project.image} alt={project.title[language]} className="w-20 h-20 mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-center">{project.title[language]}</h4>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {content[language].viewProject}
                        <span>→</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {content[language].viewMore}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}