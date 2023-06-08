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
        <p className="text-sm py-4 font-light text-primary md:text-4xl md:py-10 lg:text-2xl lg:px-36 break-all">
          I am a passionate front-end developer with 3 years of development
          experience, specializing in{' '}
          <strong className="font-bold hover:text-secondary">front-end</strong>{' '}
          for the past 2 years. I enjoy working in teams and honing my skills,
          with strong soft skills including{' '}
          <strong className="font-bold hover:text-secondary">creativity</strong>{' '}
          and{' '}
          <strong className="font-bold hover:text-secondary">
            relationship-building
          </strong>
          . During my free time, I dedicate myself to learning, developing new
          projects, and staying current with front-end trends. Ready to leverage
          my experience and skills to contribute to the success of exciting
          projects.
        </p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounce">
          <a
            href="#resume"
            className="text-xl py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
          >
            Resume
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible={true} animateIn="">
          <a
            href="#projects"
            className="text-xl py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
          >
            Projects
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default DescriptionCard;
