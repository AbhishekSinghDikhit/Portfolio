import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
    title: "Bachelor's Degree",
    institution: "Rungta College of Engineering and Technology, Bhilai (CG)",
    duration: "2022-2026",
    description: "B.Tech in Computer Science (Data Science)",
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
    title: "IITM BS degree programme",
    institution: "Indian Institute of Technology, Madras, Chennai(TN)",
    duration: "2022-2027",
    description: "BS in Data Science and Applictions",
  },
  {
    icon: <School className="w-12 h-12 text-blue-500" />,
    title: "Higher Secondary School",
    institution: "JP International School, Kanker (CG)",
    duration: "2020-21",
    description: "Graduated with honors in Mathematics",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
    title: "Online Certifications",
    institution: "Various Platforms",
    duration: "2022-Present",
    description: "Continuous learning through online courses and certifications",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-80 text-center hover:shadow-lg transition-all duration-300 border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{edu.icon}</div>
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-blue-500 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.duration}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
