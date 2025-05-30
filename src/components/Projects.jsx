import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <div
      className="dark:bg-darkBgDefault bg-white md:py-20 py-10 md:px-20 px-6 dark:text-textColor "
      id="projects"
    >
      <h1 className="text-center text-2xl font-bold">Projects</h1>
      <p className="text-center font-semibold text-[16px] md:text-[20px]">
        Some of the noteworthy projects I have built;
      </p>

      {projectsData.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={project.id} className="block">
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 my-10 cursor-pointer hover:scale-[1.01] transition-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="bg-gray-200 md:p-[48px] p-[32px] md:rounded-l-xl rounded-t-xl md:rounded-t-none dark:bg-darkBgExpSecondary">
              <img
                src={project.image}
                className="w-full object-contain"
                alt={project.title}
              />
            </div>
            <div className="dark:bg-darkBgExp bg-white md:p-[48px] p-[32px] md:rounded-r-xl rounded-b-xl md:rounded-b-none">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p className="mt-5 pb-10">
                {project.description.length > 150
                  ? `${project.description.substring(0, 150)}...`
                  : project.description}
              </p>
              <span className="text-blue-600 dark:text-blue-400">
                View details →
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
