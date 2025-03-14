import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Typing effect for name
const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

// Roles & their respective descriptions
const roles = [
  { title: "Data Scientist", description: "A passionate Data Scientist, eager to drive insights from data." },
  { title: "Data Analyst", description: "A passionate Data Analyst, eager to analyze data." },
  { title: "Machine Learning Engineer", description: "A passionate Machine Learning Engineer, eager to create impactful models and solutions." },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 pt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            {/* Animated Name */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              Hi, I'm <br />
              <span className="text-blue-600"> Abhishek Singh Dikhit</span>
            </motion.h1>

            {/* Toggling Role Description */}
            <motion.p
              key={roleIndex} // Ensures smooth transition
              className="text-xl text-blue-600 font-semibold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {roles[roleIndex].title}
            </motion.p>

            <motion.p
              key={`desc-${roleIndex}`}
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[roleIndex].description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1tNiTKo7owsNQtnoqbp7doSH71x3yQm0E/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 flex items-center gap-2 border-2 border-gray-600 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FileText size={20} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
              alt="Developer"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
