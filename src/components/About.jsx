const About = () => {
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
    <div className="dark:bg-darkBgSecondary bg-gray-200 " id="about">
      <div className="md:w-[70%] mx-auto md:py-20 w-[90%] py-10 dark:text-textColor">
        <h1 className="font-bold text-3xl text-center mb-5">About Me</h1>
        <p className="text-xl text-center mb-5  ">
          Hello, I’m Ukonu Idika a frontend developer specializing in
          high-performance web and mobile applications. I build fast,
          accessible, and visually stunning digital experiences that work
          seamlessly across all devices. By blending technical precision with
          thoughtful design, I create interfaces that are not just functional
          but also engaging and intuitive. With a deep understanding of frontend
          technologies and a passion for user-centric development, I approach
          every project with meticulous attention to detail. Whether crafting
          responsive web UIs or dynamic mobile apps, I prioritize clean,
          scalable code to ensure top-tier performance and long-term usability.
        </p>
        <p className="text-xl text-center mb-5 ">
          Let’s collaborate to bring your vision to life with high-performance,
          innovative digital solutions. Whether you need a sleek web app or a
          dynamic mobile experience, I’m here to build impactful, user-driven
          products that stand out. Reach out I’d love to create something
          amazing together!
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
