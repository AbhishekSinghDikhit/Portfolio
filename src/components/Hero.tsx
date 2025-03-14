import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
              alt="Developer"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="animate-bounce text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}