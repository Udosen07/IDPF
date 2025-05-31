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
          Hi I'm Ukonu 👋
        </h1>
        <p className="text-black dark:text-textColor mt-5 text-xl">
          As a frontend developer, I specialize in crafting high-performance,
          accessible, and visually compelling web applications that adapt
          flawlessly to any device. My goal is to build smooth, engaging digital
          experiences where top-tier functionality meets elegant design. With
          deep expertise in frontend technologies and a career-long passion for
          development, I am committed to pushing boundaries delivering
          intuitive, user-focused interfaces that excel in both form and
          function.
        </p>
        <p className="flex gap-2 items-center mt-5 text-black dark:text-textColor text-xl">
          <TiLocation /> Drammen, Norway
        </p>
        <div className="flex gap-5 items-center text-2xl mt-5 text-black dark:text-textColor">
          <a href="mailto:ukonu.idika@yahoo.com" target="_blank">
            <div>
              <IoMdMail />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ukonu-idika-367a00254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://github.com/ukonuidika" target="_blank">
            <div>
              <FaGithub />
            </div>
          </a>
          <a href="https://twitter.com/UIdika61267" target="_blank">
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
            src="/assets/ukonu.jpg"
            className="w-full md:h-[300px] h-[400px] object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
