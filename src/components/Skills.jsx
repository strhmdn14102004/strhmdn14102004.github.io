import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFlutter,          // For Flutter
  faReact,              // For React
  faNodeJs,             // For Node.js
  faGoogle,            // For Firebase            
  faCss,            // For Tailwind CSS
  faGofore,             // For Golang
  faLaravel,            // For Laravel
  faFigma,              // For Figma
  faMicrosoft,           // For Microsoft Office
  faGit,
  faWebAwesome
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase,           // For REST API
  faCode,               // For programming languages
  faDesktop,             // For Responsive Design
  faEdit,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons"; // For Adobe products

export default function Skills() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "Various technologies I master and frequently use in my projects",
      otherSkills: "Other Skills"
    },
    id: {
      title: "Keahlian Teknis",
      subtitle: "Berbagai teknologi yang saya kuasai dan sering gunakan dalam proyek-proyek saya",
      otherSkills: "Skill Lainnya"
    }
  };

  const skills = [
    { 
      name: { en: "Flutter", id: "Flutter" }, 
      level: 90, 
      icon: <FontAwesomeIcon icon={faFlutter} className="text-blue-500" />,
      color: "from-blue-500 to-blue-700" 
    },
    { 
      name: { en: "React", id: "React" }, 
      level: 85, 
      icon: <FontAwesomeIcon icon={faReact} className="text-blue-400" />,
      color: "from-cyan-500 to-blue-600" 
    },
    { 
      name: { en: "Node.js", id: "Node.js" }, 
      level: 80, 
      icon: <FontAwesomeIcon icon={faNodeJs} className="text-green-500" />,
      color: "from-green-500 to-green-600" 
    },
    { 
      name: { en: "Firebase", id: "Firebase" }, 
      level: 75, 
      icon: <FontAwesomeIcon icon={faGoogle} className="text-orange-500" />,
      color: "from-yellow-500 to-orange-500" 
    },
    { 
      name: { en: "MongoDB", id: "MongoDB" }, 
      level: 70, 
      icon: <FontAwesomeIcon icon={faDatabase} className="text-green-600" />,
      color: "from-green-600 to-green-700" 
    },
    { 
      name: { en: "Tailwind CSS", id: "Tailwind CSS" }, 
      level: 85, 
      icon: <FontAwesomeIcon icon={faCss} className="text-cyan-400" />,
      color: "from-cyan-400 to-blue-500" 
    },
    { 
      name: { en: "Golang", id: "Golang" }, 
      level: 65, 
      icon: <FontAwesomeIcon icon={faGofore} className="text-blue-400" />,
      color: "from-blue-400 to-blue-600" 
    },
    { 
      name: { en: "Laravel", id: "Laravel" }, 
      level: 70, 
      icon: <FontAwesomeIcon icon={faLaravel} className="text-red-500" />,
      color: "from-red-500 to-orange-500" 
    }
  ];

  const otherSkills = [
    { name: "Dart", icon: <FontAwesomeIcon icon={faFlutter} className="text-blue-400" /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faCode} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <FontAwesomeIcon icon={faCode} className="text-blue-500" /> },
    { name: "HTML/CSS", icon: <FontAwesomeIcon icon={faCode} className="text-orange-500" /> },
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} className="text-red-500" /> },
    { name: "Figma", icon: <FontAwesomeIcon icon={faFigma} className="text-purple-500" /> },
    { name: "Adobe XD", icon: <FontAwesomeIcon icon={faSquare} className="text-pink-500" /> },
    { name: "Photoshop", icon: <FontAwesomeIcon icon={faSquare} className="text-blue-500" /> },
    { name: "Microsoft Office", icon: <FontAwesomeIcon icon={faMicrosoft} className="text-red-500" /> },
    { name: "REST API", icon: <FontAwesomeIcon icon={faDatabase} className="text-green-500" /> },
    { 
      name: { en: "Responsive Design", id: "Desain Responsif" }, 
      icon: <FontAwesomeIcon icon={faMobile} className="text-blue-500" /> 
    }
  ];

  return (
    <section className="py-20" id="skills">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name[language]}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <motion.div 
                  className="absolute top-0 right-0 h-full w-1 bg-white opacity-50"
                  animate={{ x: [-10, 110] }}
                  transition={{
                    duration: 2,
                    delay: 1 + index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other skills */}
        <motion.div 
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-semibold mb-4 text-center">{content[language].otherSkills}</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center gap-2"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{typeof skill.name === 'string' ? skill.name : skill.name[language]}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}