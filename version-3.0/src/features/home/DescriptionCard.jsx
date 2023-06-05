const DescriptionCard = () => {
  return (
    <div className="flex flex-col justify-evenly items-center grow">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary">Diego Corradi</h1>
        <h4 className="text-xl font-semibold text-secondary">
          Front-End Developer
        </h4>
      </div>
      <div>
        <p className="text-sm font-light text-primary text-justify">
          I am a passionate front-end developer with 3 years of experience as a
          full-stack developer. I have focused on front-end development for the
          past 2 years, finding great satisfaction in working in teams and
          improving my skills.
        </p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <button className="py-2 px-4 rounded bg-secondary text-primary">
          Get CV
        </button>
        <button className="py-2 px-4 rounded bg-secondary text-primary">
          Projects
        </button>
      </div>
    </div>
  );
};

export default DescriptionCard;