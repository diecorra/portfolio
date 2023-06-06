import { AiFillGithub } from 'react-icons/ai';
import { wikidrinkimg } from '../../assets/projectimages/wikidrink';
import ProjectImage from '../../shared/ProjectImage';

const cards = [
  {
    imgUrl: wikidrinkimg,
    alt: 'Wiki Drink',
    description:
      'Web application created to search for cocktails and related recipes. Also the user can send the recipe through the form to add other cocktails.',
    githubrepo:
      'https://github.com/diecorra/react-web-projects/tree/main/cocktail',
    weblink: 'https://wikidrink-cocktail.netlify.app',
  },
];

const Card = () => {
  return (
    <>
      {cards.map((card) => {
        return (
          <div
            key={card.alt}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-primary md:max-w-4xl lg:max-w-md"
          >
            <ProjectImage imgUrl={card.imgUrl} alt={card.alt} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-secondary md:text-4xl lg:text-2xl">
                {card.alt}
              </div>
              <p className="text-sm font-light text-white md:text-3xl lg:text-xl">
                {card.description}
              </p>
            </div>
            <div className="flex flex-row justify-evenly w-full py-3">
              <a
                href={card.githubrepo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-between items-center py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-3xl lg:text-xl"
              >
                <AiFillGithub />
                GitHub
              </a>
              <a
                href={card.weblink}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 rounded font-semibold bg-secondary text-primary md:text-3xl lg:text-xl"
              >
                Live
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
