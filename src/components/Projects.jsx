import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'StudifyAI',
    description: 'Developed an AI-powered platform for exam generation, evaluation, PDF summarization, and real-time Q&A using NLP. Integrated ML for automated question generation and a responsive interface for seamless educational support.',
    image: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/AbhishekSinghDikhit/Studify',
    tags: ['Python', 'FastAPI', 'Gemini API', 'SQLite', 'HTML/CSS', 'JS']
  },
  {
    title: 'Fake News Classification App',
    description: 'Developed a web app for real-time fake news detection using a Decision Tree Classifier, with interactive visualizations powered by Pandas and Streamlit. Enhanced user experience with an intuitive interface for seamless analysis.',
    image: 'https://images.unsplash.com/photo-1636188540036-1879f679c2b0?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/AbhishekSinghDikhit/FakeNewsClassificationApp',
    tags: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Streamlit']
  },
  {
    title: 'NeoGemBot',
    description: 'Developed a conversational AI Telegram bot using Python, and NLP, integrating Gemini AI for enhanced responses. Utilized MongoDB for adaptive learning, achieving a 95% user satisfaction rate.',
    image: 'https://images.unsplash.com/photo-1654764450278-17bb78c00eb6?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/AbhishekSinghDikhit/NeoGemBot',
    tags: ['Python', 'MongoDB', 'HuggingFace', 'Telegram', 'Gemini API']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {/* Uncomment if you want to show a demo link */}
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
