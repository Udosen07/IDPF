import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="dark:bg-darkBgDefault bg-white md:py-20 py-10 md:px-20 px-6 dark:text-textColor "
      id="projects"
    >
      <h1 className="text-center text-2xl font-bold">Projects</h1>
      <p className="text-center font-semibold text-[16px] md:text-[20px]">
        Some of the noteworthy projects i have built;
      </p>
      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} // Set animation duration
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-gray-200 md:p-[48px] p-[32px] md:rounded-l-xl rounded-t-xl md:rounded-t-none dark:bg-darkBgExpSecondary">
          <img src="/assets/Alantech.png" className="w-full object-contain " />
        </div>
        <div className="dark:bg-darkBgExp bg-white md:p-[48px] p-[32px] md:rounded-r-xl rounded-b-xl md:rounded-b-none">
          <h1 className="text-xl font-bold">Alantech Staflate Project</h1>
          <p className="mt-5 pb-10">
            The platform is where users can watch uploaded YouTube videos and
            earn money in the process. The project includes several key
            features: a user-friendly dashboard for managing activities, a
            classroom interface for organized content viewing, and a referral
            page that allows users to share a unique link to invite others,
            enhancing user engagement and growth.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} // Set animation duration
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-gray-200 md:p-[48px] p-[32px] md:rounded-l-xl rounded-t-xl md:rounded-t-none dark:bg-darkBgExpSecondary">
          <img
            src="/assets/All Consults.png"
            className="w-full object-contain"
          />
        </div>
        <div className="dark:bg-darkBgExp bg-white md:p-[48px] p-[32px] md:rounded-r-xl rounded-b-xl md:rounded-b-none">
          <h1 className="text-xl font-bold">All Consults</h1>
          <p className="mt-5 pb-10">
            The official website of Alternate Luminary Link Consults
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} // Set animation duration
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-gray-200 md:p-[48px] p-[32px] md:rounded-l-xl rounded-t-xl md:rounded-t-none dark:bg-darkBgExpSecondary">
          <img
            src="/assets/native bridge.png"
            className="w-full object-contain"
          />
        </div>
        <div className="dark:bg-darkBgExp bg-white md:p-[48px] p-[32px] md:rounded-r-xl rounded-b-xl md:rounded-b-none">
          <h1 className="text-xl font-bold">Native Bridge</h1>
          <p className="mt-5 pb-10">A pet project for starfeeds</p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} // Set animation duration
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-gray-200 md:p-[48px] p-[32px] md:rounded-l-xl rounded-t-xl md:rounded-t-none dark:bg-darkBgExpSecondary">
          <img
            src="/assets/aora.jpg"
            className="w-full h-[300px] object-contain"
          />
        </div>
        <div className="dark:bg-darkBgExp bg-white md:p-[48px] p-[32px] md:rounded-r-xl rounded-b-xl md:rounded-b-none">
          <h1 className="text-xl font-bold">Aora</h1>
          <p className="mt-5 pb-10">
            A React Native project that provides full CRUD functionalities,
            allowing users to post, view, and manage videos. The app features a
            user profile section where users can see all the videos they've
            posted. Users can upload new videos, view their own and others'
            content, update video details, or delete videos. The interface is
            optimized for a seamless video viewing experience, with user
            profiles displaying all content contributed by that specific user,
            ensuring easy access and management of posted videos.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
