import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code, Calendar, Users } from "lucide-react";
import { projectsData } from "../data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="dark:bg-darkBgDefault bg-white min-h-screen">
        <div className="container mx-auto px-6 py-20 dark:text-textColor">
          <motion.div
            className="text-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <Code className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The project you're looking for doesn't exist or may have been
              moved.
            </p>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="dark:bg-darkBgDefault bg-white min-h-screen">
      <div className="container mx-auto px-6 py-20 dark:text-textColor">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Image */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-darkBgExpSecondary rounded-2xl p-8 h-fit">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />
                </div>
              </div>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="dark:bg-darkBgExp bg-white rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h1>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-semibold">Tech Stack</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Status
                    </div>
                    <div className="font-semibold">Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Type
                    </div>
                    <div className="font-semibold">Personal</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Project
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <Code className="w-4 h-4" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
