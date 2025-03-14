import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Jest', 'Figma']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I work with a variety of technologies and tools to create amazing web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}