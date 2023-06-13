import { AnimationOnScroll } from 'react-animation-on-scroll';

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
        <p className="text-sm font-light text-primary md:text-4xl lg:text-2xl lg:px-36 break-all">
          I am an enthusiastic front-end developer with 3 years of experience in
          full-stack development, specializing in{' '}
          <strong className="font-bold hover:text-secondary">front-end</strong>{' '}
          development over the past year. In the last 2 years, I have devoted my
          free time to immersing myself in the world of front-end development,
          continuously enhancing my skills and staying updated on current
          trends. I have a strong passion for collaborative teamwork and strive
          to constantly improve and grow as a developer. I possess strong soft
          skills such as{' '}
          <strong className="font-bold hover:text-secondary">creativity</strong>{' '}
          and the ability to build interpersonal{' '}
          <strong className="font-bold hover:text-secondary">
            relationships
          </strong>
          . I am an avid reader of personal growth books and a marathon runner.
          I am ready to apply my experience and skills as a front-end developer
          to contribute to the success of exciting projects.
        </p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounce">
          <a
            href="#resume"
            className="py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
          >
            Resume
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible={true} animateIn="">
          <a
            href="#projects"
            className="py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-4xl"
          >
            Projects
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default DescriptionCard;
