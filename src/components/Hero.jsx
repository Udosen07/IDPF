import { TiLocation } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="lg:mt-[88px] md:mt-[86px] mt-[60px] dark:bg-darkBgDefault bg-white px-6 pt-10 pb-28 md:px-20 md:py-10 grid md:grid-cols-2 grid-cols-1 gap-10"
      id="home"
    >
      <div>
        <h1 className="text-black dark:text-textColor text-3xl font-bold">
          Hi I'm David 👋
        </h1>
        <p className="text-black dark:text-textColor mt-5 text-xl">
          As a frontend developer, I am dedicated to creating fast, accessible,
          and visually engaging web applications that are fully responsive
          across all devices. My focus is on delivering seamless digital
          experiences that merge optimal performance with exceptional design
          standards. With a strong foundation in frontend technologies and a
          passion that has grown throughout my career, I consistently strive for
          innovation and excellence in building intuitive, user-centric
          interfaces.
        </p>
        <p className="flex gap-2 items-center mt-5 text-black dark:text-textColor text-xl">
          <TiLocation /> Lagos, Nigeria
        </p>
        <div className="flex gap-5 items-center text-2xl mt-5 text-black dark:text-textColor">
          <a href="mailto:udosendavid@outlook.com" target="_blank">
            <div>
              <IoMdMail />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/david-udosen-8b63962a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://github.com/Udosen07" target="_blank">
            <div>
              <FaGithub />
            </div>
          </a>
          <a href="https://twitter.com/damon00829398" target="_blank">
            <div>
              <FaSquareXTwitter />
            </div>
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Initial state before it enters the view
        whileInView={{ opacity: 1, scale: 1 }} // Trigger animation on scroll
        transition={{ duration: 0.8 }} // Set the duration of the animation
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="w-full h-full">
          <img
            src="/assets/Udosen.jpg"
            className="w-full md:h-[300px] h-[400px] object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
