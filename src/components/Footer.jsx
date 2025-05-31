import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div
      className=" dark:bg-darkBgDefault bg-white  pt-10 md:px-20 px-6 dark:text-textColor flex justify-between items-center flex-wrap "
      id="footer"
    >
      <h1 className="text-xl mb-5">&copy; 2024 All rights reserved</h1>
      <div className="flex gap-5 items-center text-2xl mb-5">
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
  );
};

export default Footer;
