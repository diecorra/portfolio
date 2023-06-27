import React from 'react';
import { DiReact } from 'react-icons/di';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { myshopimg } from '../../assets/projectimages/myshop';
import { wikidrinkimg } from '../../assets/projectimages/wikidrink';
import { zustandimg } from '../../assets/zustand-icon';

export const projectsData = [
  {
    imgUrl: myshopimg,
    alt: 'MY SHOP',
    description:
      'Web application which simulates an online shop. The application offers basic functionality: users can make an order, while administrators can manage the CMS to add new products to the shop and view the orders placed by customers.',
    githubrepo: 'https://github.com/diecorra/my-shop',
    weblink: 'https://react-myshop.netlify.app',
    technologies: [
      {
        name: 'React',
        icon: <DiReact style={{ color: '#54D2F3', fontSize: '2.5rem' }} />,
        textColor: 'white',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript style={{ color: '#2F74C0', fontSize: '1.8rem' }} />,
        textColor: 'white',
      },
      {
        name: 'Tailwind',
        icon: (
          <SiTailwindcss style={{ color: '#2F74C0', fontSize: '1.5rem' }} />
        ),
        textColor: 'white',
        textSize: '0.5rem',
      },
      {
        name: 'Zustand',
        icon: <img src={zustandimg} alt="Zustand" />,
        textColor: 'white',
      },
    ],
  },
  {
    imgUrl: wikidrinkimg,
    alt: 'WIKI DRINK',
    description:
      'Web application created to search for cocktails and related recipes. Also the user can send the recipe through the form to add other cocktails.',
    githubrepo:
      'https://github.com/diecorra/react-web-projects/tree/main/cocktail',
    weblink: 'https://wikidrink-cocktail.netlify.app',
    technologies: [
      {
        name: 'React',
        icon: <DiReact style={{ color: '#54D2F3', fontSize: '2.5rem' }} />,
        textColor: 'white',
      },
      {
        name: 'Tailwind',
        icon: (
          <SiTailwindcss style={{ color: '#2F74C0', fontSize: '1.5rem' }} />
        ),
        textColor: 'white',
      },
    ],
  },
];
