import { AnimationOnScroll } from 'react-animation-on-scroll';

const DescriptionCard = () => {
  return (
    <div className="flex flex-col justify-evenly items-center grow">
      <div className="flex flex-col justify-evenly items-center">
        <h1 className="text-4xl font-bold text-primary md:text-7xl z-10">
          Diego Corradi
        </h1>
        <h4 className="text-xl font-semibold text-secondary md:text-4xl">
          Front-End Developer
        </h4>
      </div>
      <div>
        <p className="text-sm md:text-2xl lg:text-3xl font-light text-primary lg:px-36 break-all">
          I am an enthusiastic front-end developer with 2 years of experience.{' '}
          <br />
          In the last 2 years, I have dedicated my free time to immersing myself with a particular focus on React technology, continuously enhancing my
          skills and staying updated on current trends.
          <br />I am an avid reader of personal growth books and a marathon
          runner.
        </p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounce">
          <button className="transition-transform hover:scale-110">
            <a
              href="#resume"
              className="text-xl py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl hover:bg-cyan-500"
            >
              Resume
            </a>
          </button>
        </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible={true} animateIn="">
          <button className="transition-transform hover:scale-110">
            <a
              href="#projects"
              className="text-xl py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl hover:bg-cyan-500"
            >
              Projects
            </a>
          </button>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default DescriptionCard;
