import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import ProjectImage from '../../shared/ProjectImage';
import { projectsData } from './projectsdata';

const Card = () => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {projectsData.map((projectData) => {
          return (
            <div
              key={projectData.alt}
              className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-primary md:max-w-4xl lg:max-w-md h-full"
            >
              <ProjectImage imgUrl={projectData.imgUrl} alt={projectData.alt} />
              <div className="px-6 py-4 md:py-6">
                <div className="font-bold text-xl text-secondary md:text-4xl lg:text-2xl py-4 md:py-6">
                  {projectData.alt}
                </div>
                <p className="text-sm font-light text-white md:text-xl lg:text-base overflow:ellipses">
                  {projectData.description}
                </p>
              </div>

              {projectData.technologies ? (
                <div className="flex justify-around justify-center items-center h-full">
                  {projectData?.technologies?.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex flex-col justify-between items-center max-w-min h-16"
                    >
                      <div className="h-[40%]">
                        <p>{technology.icon}</p>
                      </div>
                      <div className="h-[40%]">
                        <p
                          style={{
                            color: technology.textColor,
                            fontSize: '0.8rem',
                          }}
                        >
                          {technology.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="flex mt-auto justify-evenly w-full py-4 mb-4 md:py-6 md:mb-6">
                <a
                  href={projectData.githubrepo}
                  target="_blank"
                  rel="noreferrer"
                  className="button-card hover:bg-cyan-300"
                >
                  <AiFillGithub />
                  GitHub
                </a>
                <a
                  href={projectData.weblink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-card hover:bg-cyan-300"
                >
                  <BiLinkExternal />
                  Live
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </AnimationOnScroll>
  );
};

export default Card;
