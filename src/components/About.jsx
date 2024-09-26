const About = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/assets/Udosen, David CV.pdf"; // Replace this with the actual path to your CV file
    link.download = "Udosen, David CV.pdf"; // Specify the name of the downloaded file
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Programmatically click the link to trigger download
    document.body.removeChild(link); // Clean up by removing the link from the document
  };

  return (
    <div className="dark:bg-darkBgSecondary bg-gray-200 " id="about">
      <div className="md:w-[70%] mx-auto md:py-20 w-[90%] py-10 dark:text-textColor">
        <h1 className="font-bold text-3xl text-center mb-5">About Me</h1>
        <p className="text-xl text-center mb-5  ">
          Hello, I'm David Udosen, a frontend developer with expertise in
          creating high-quality web and mobile applications. I am committed to
          delivering fast, accessible, and visually compelling digital solutions
          that provide seamless user experiences across all platforms. By
          focusing on both the technical and design aspects, I ensure each
          project is not only functional but also aesthetically engaging and
          fully responsive. With a strong foundation in frontend technologies
          and a passion for building intuitive, user-centric interfaces, I bring
          a meticulous approach to every project. Whether it’s developing
          responsive web interfaces or creating dynamic mobile applications, I
          prioritize clean, efficient, and maintainable code to ensure optimal
          performance and usability.
        </p>
        <p className="text-xl text-center mb-5 ">
          If you're looking to enhance your digital presence through innovative
          web or mobile solutions, let’s connect. I look forward to turning your
          ideas into reality with cutting-edge, impactful digital products.
        </p>
        <div className="flex justify-center md:hidden">
          <button
            className="dark:bg-white dark:text-black px-3 py-2 rounded-2xl  bg-darkBgDefault text-white dark:hover:bg-[#AED136] hover:bg-[#AED136]"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
