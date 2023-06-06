const DescriptionCard = () => {
  return (
    <div className="flex flex-col justify-evenly items-center grow">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary md:text-7xl z-10">
          Diego Corradi
        </h1>
        <h4 className="text-xl font-semibold text-secondary md:text-4xl">
          Front-End Developer
        </h4>
      </div>
      <div>
        <p className="text-sm font-light text-primary text-justify md:text-4xl lg:text-2xl lg:px-36">
          I am a passionate front-end developer with 3 years of experience as a
          full-stack developer. I have focused on front-end development for the
          past 2 years, finding great satisfaction in working in teams and
          improving my skills.
        </p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <a
          href="#resume"
          className="py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
        >
          Resume
        </a>
        <a
          href="#projects"
          className="py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default DescriptionCard;
