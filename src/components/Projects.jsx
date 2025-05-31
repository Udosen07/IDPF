import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Zap } from "lucide-react";
import { projectsData } from "../data/projects";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section
      className="dark:bg-darkBgDefault bg-white py-20 px-6 md:px-20 dark:text-textColor"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
            <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h1>
         
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Link to={`/projects/${project.id}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-darkBgExpSecondary p-8 lg:p-12 group-hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={project.image}
                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                        alt={project.title}
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Project Content */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <Link to={`/projects/${project.id}`}>
                      <h2 className="text-3xl lg:text-4xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {project.description.length > 200
                        ? `${project.description.substring(0, 200)}...`
                        : project.description}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group transition-colors"
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < projectsData.length - 1 && (
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
            <span className="text-sm font-medium">More projects coming soon</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;