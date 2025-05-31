const Skills = () => {
  return (
    <div
      className=" dark:bg-darkBgDefault bg-white md:py-20 py-10 md:px-20 px-6 dark:text-textColor"
      id="skills"
    >
      <h1 className="text-center text-2xl font-bold">Skills</h1>
      <p className="text-center font-semibold text-[16px] md:text-[20px]">
        Some of the skills, tools, technologies i used;
      </p>
      <div className="flex flex-wrap gap-6 mt-10 justify-center items-center">
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/javascript.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-bold">Javascript</p>
        </div>

        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/typescript.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">Typescript</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/react.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">React</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/figma.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">Figma</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/html.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">HTML5</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/css.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">CSS</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/bootstrap.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="w-12 h-12">
            <img
              src="/assets/git.png"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-base font-bold">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
