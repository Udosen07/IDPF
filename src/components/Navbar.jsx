import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../lib/themeContext";
import { FaReact } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  // Toggle the "dark" class on the root element
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/assets/cv.pdf"; // Replace this with the actual path to your CV file
    link.download = "Ukonu, Idika CV.pdf"; // Specify the name of the downloaded file
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Programmatically click the link to trigger download
    document.body.removeChild(link); // Clean up by removing the link from the document
  };

  return (
    <nav className="dark:bg-darkBgDefault bg-white w-full top-0 fixed left-0 z-10">
      <div className="flex items-center justify-between px-6 py-4 md:px-20 md:py-6">
        <a href="/">
          <div className="text-black dark:text-white text-2xl font-bold dancing-script">
            Ukonu
          </div>
        </a>
        <div className="hidden md:flex space-x-6 items-center lg:text-[16px] md:text-[15px] text-[12px] font-semibold text-black">
          <a
            href="#home"
            className="text-black dark:text-white text-xl "
            onClick={handleClose}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black dark:text-white text-xl "
            onClick={handleClose}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-black dark:text-white text-xl "
            onClick={handleClose}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-black dark:text-white text-xl "
            onClick={handleClose}
          >
            Projects
          </a>
       
          <div className="border-l-2 border-w h-6 dark:border-white border-black "></div>
          <div
            className="text-black dark:text-white text-2xl"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <MdSunny /> : <MdDarkMode />}
          </div>
          <button
            className="dark:bg-white dark:text-black px-3 py-2 rounded-2xl  bg-darkBgDefault text-white dark:hover:bg-[#AED136] hover:bg-[#AED136]"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>

        <button
          className="block md:hidden text-2xl text-black dark:text-white"
          onClick={handleClose}
        >
          {open ? "" : <GiHamburgerMenu />}
        </button>
      </div>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 block md:hidden"
            onClick={handleClose}
          ></div>
          <div className="fixed w-3/5 left-0 inset-0 z-30 p-6 dark:bg-darkBgDefault bg-white font-semibold  text-black dark:text-white text-base block md:hidden">
            <div
              className="flex justify-end text-2xl cursor-pointer"
              onClick={handleClose}
            >
              <IoClose />
            </div>
            <div className="flex flex-col space-y-4 text-[20px]">
              <a
                href="#home"
                className="text-black dark:text-white text-base "
                onClick={handleClose}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-black dark:text-white text-base "
                onClick={handleClose}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-black dark:text-white text-base "
                onClick={handleClose}
              >
                Skills
              </a>
              <a
                to="#projects"
                className="text-black dark:text-white text-base "
                onClick={handleClose}
              >
                Projects
              </a>
             
              <hr />
              <div className=" text-black dark:text-white text-base flex justify-between items-center">
                <p>Switch Theme</p>

                <button onClick={toggleDarkMode}>
                  {isDarkMode ? <MdSunny /> : <MdDarkMode />}
                </button>
              </div>
              <button
                className="dark:bg-white dark:text-black  bg-darkBgDefault text-white p-2 rounded-2xl text-base dark:hover:bg-[#AED136] hover:bg-[#AED136]"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
