import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';

const socialLink = [
  {
    url: 'https://www.instagram.com/diecorra',
    icon: <AiFillInstagram />,

    name: 'Instagram',
  },
  {
    url: 'https://github.com/diecorra',
    icon: <AiFillGithub />,
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/diegocorradi',
    icon: <AiFillLinkedin />,

    name: 'LinkedIn',
  },
  {
    url: 'mailto:diego.corradi95@gmail.com',
    icon: <CiMail />,
    name: 'Gmail',
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center my-3">
      {socialLink.map((link) => {
        return (
          <ul key={link.name}>
            <a href={link.url} alt={link.name} target="_blank" rel="noreferrer">
              <IconContext.Provider
                value={{
                  className:
                    'text-primary hover:text-secondary text-4xl md:text-5xl',
                }}
              >
                {link.icon}
              </IconContext.Provider>
            </a>
          </ul>
        );
      })}
    </nav>
  );
};

export default Navbar;
