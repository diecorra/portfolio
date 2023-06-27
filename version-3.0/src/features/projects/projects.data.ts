import { myshopimg } from '../../assets/projectimages/myshop';
import { wikidrinkimg } from '../../assets/projectimages/wikidrink';

export const projectsData = [
  {
    imgUrl: myshopimg,
    alt: 'MY SHOP',
    description:
      'Web application which simulates an online shop. The application offers basic functionality: users can make an order, while administrators can manage the CMS to add new products to the shop and view the orders placed by customers.',
    githubrepo: 'https://github.com/diecorra/my-shop',
    weblink: 'https://react-myshop.netlify.app',
  },
  {
    imgUrl: wikidrinkimg,
    alt: 'WIKI DRINK',
    description:
      'Web application created to search for cocktails and related recipes. Also the user can send the recipe through the form to add other cocktails.',
    githubrepo:
      'https://github.com/diecorra/react-web-projects/tree/main/cocktail',
    weblink: 'https://wikidrink-cocktail.netlify.app',
  },
];
