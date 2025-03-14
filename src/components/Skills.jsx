import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaPython, FaDocker, FaGitAlt, FaGoogle, FaBrain, FaNodeJs } from 'react-icons/fa';
import { SiFastapi, SiScikitlearn, SiMongodb, SiGooglecloud, SiNumpy, SiPandas, SiTensorflow, SiPytorch, SiVuedotjs, SiPycharm } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="text-blue-500 text-4xl" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-orange-500 text-4xl" /> },
      // { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500 text-4xl" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: <FaPython className="text-blue-500 text-2xl" /> },
      { name: 'Numpy', icon: <SiNumpy className="text-blue-500 text-2xl" /> },
      { name: 'Pandas', icon: <SiPandas className="text-blue-700 text-2xl" /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-blue-800 text-2xl" /> },
      { name: 'Machine Learning', icon: <FaBrain className="text-blue-500 text-2xl" /> },
      { name: 'Tensorflow', icon: <SiTensorflow className="text-blue-600 text-2xl" /> },
      { name: 'Pytorch', icon: <SiPytorch className="text-blue-600 text-2xl" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-1xl" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500 text-1xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-1xl" /> },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400 text-4xl" /> },
      { name: 'GCP', icon: <SiGooglecloud className="text-yellow-500 text-4xl" /> },
      { name: 'Pycharm', icon: <SiPycharm className="text-yellow-500 text-4xl" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skillSet.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillSet.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-2 text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}