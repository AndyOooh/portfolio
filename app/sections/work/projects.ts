const ReduxbookVidRel = '/projectImages/reduxbook.mp4' as string; // This works
import salaryHeroImg from '../../../public/projectImages/salaryHero.png';
const salaryHeroImgRel = '/projectImages/salaryHero.png' as string;
import lotteryImage from '../../../public/projectImages/ballotLottery.jpg';
const lotteryImageRel = '/projectImages/ballotLottery.jpg' as string;

const redbook1280Profile = '/projectImages/redbook/1280-login.png' as string;
const redbook1280Home = '/projectImages/redbook/1280-home.png' as string;
const redbook2560Home = '/projectImages/redbook/2560-home.png' as string;

const persona1280Result = '/projectImages/persona/1280-result.png' as string;
const persona1280Start = '/projectImages/persona/1280-start.png' as string;

const lotteryBallot = 'projectImages/lottery/1280-ballot.png' as string;
const lotteryLottery = 'projectImages/lottery/1280-lottery.png' as string;

const sincityDex = 'projectImages/sinCity/1280-dex.png' as string;
const sincityRoulette = 'projectImages/sinCity/1280-roulette.png' as string;

export type ProjectType = {
  video?: string;
  image?: string;
  title: string;
  gitHub: string;
  liveDemo: string;
  type: string;
  technologies: string[];
  text?: string;
  tags?: string[];
};

export const projects = [
  {
    title: 'Sin City',
    image: sincityRoulette,
    gitHub: 'https://github.com/AndyOooh/sin-city',
    // liveDemo: 'https://encode-client.herokuapp.com/',
    type: 'Frontend - Web3',
    technologies: ['React', 'Solidity', 'EthersJS'],
    text: 'A decentralized casino and exchange. Users can connect their web3 wallet to exchange tokens on Ethereum, Polygon and play roulette with the native ATY token.',
    tags: [
      'Web3',
      'Hardhat',
      'WAGMI',
      'OpenZeppelin',
      '1Inch',
      'Chainlink',
      'TypeScript',
      'BASH',
      'Tailwind',
      'Chai',
      'Mocha',
    ],
  },
  {
    title: 'Lottery dApp',
    image: lotteryLottery,
    gitHub: 'https://github.com/AndyOooh/ETHDenver-group14',
    liveDemo: 'https://encode-client.herokuapp.com/',
    type: 'Full Stack - Web3',
    technologies: ['NextJS', 'NestJS', 'Solidity', 'EthersJS'],
    text: 'A decentralized lottery and voting app. Admins can organize lotteries and votes. Users can vote and participate in lotteries. The lottery winner is chosen by a random number generator.',
    tags: ['Web3', 'Hardhat', 'TypeScript', 'BASH', 'Tailwind', 'Chai', 'Mocha'],
  },
  {
    title: 'The Redbook',
    image: redbook1280Home,
    gitHub: 'https://github.com/AndyOooh/redbook_backend',
    liveDemo: 'https://www.theredbook.xyz/login',
    type: 'Full Stack',
    role: 'Solo project',
    technologies: ['NodeJS', 'React', 'MongoDB', 'Redux'],
    text: 'A facebook imitation. Users can create and update their profile. They can create and delete posts, comments and likes. They can send, accept and reject friend requests.',
    tags: [
      'RTK-Query',
      'ExpressJS',
      'AWS',
      'NGINX',
      'SASS',
      'Google Oauth',
      'JWT',
      'Cloudinary',
      'Mongoose',
      'Formik',
      'Yup',
    ],
    implementations: ['Secure auth flow with refresh and access tokens'],
  },
  {
    title: 'Persona',
    image: persona1280Start,
    gitHub: 'https://github.com/AndyOooh/persona',
    // liveDemo: 'https://www.theredbook.xyz/login',
    type: 'Full Stack - Job Test',
    role: 'Test project - solo',
    technologies: ['Turborepo', 'NodeJS', 'Next13'],
    text: 'A small, mostly frontend, project with emphasis on testing. Users can answer questions to have a result calculated to find out where on the introvert/extrovert spectrum they are',
    tags: [
      'TypeScript',
      'BASH',
      'Express',
      'Jest',
      'Supertest',
      'Joi',
      'json-server',
      'TailwindCSS',
      'daisyUI',
      'SASS',
    ],
    implementations: [''],
  },

  // {
  //   video: ReduxbookVidRel,
  //   title: 'Redux course project',
  //   gitHub: 'https://github.com/AndyOooh/redux-essentials',
  //   liveDemo: 'https://redux-essentials-course.web.app/',
  //   type: 'Frontend + Firebase',
  //   technologies: ['React', 'Redux', 'Firebase'],
  //   tags: ['React', 'Redux', 'RTK-Query', 'Firebase'],
  // },

  {
    image: salaryHeroImgRel,
    title: 'Salary Hero',
    gitHub: 'https://github.com/AndyOooh/salary_hero',
    type: 'Backend - Job Test',
    technologies: ['NodeJS', 'ExpressJS', 'PostgreSQL', 'Sequelize'],
    text: 'A small backend project with emphasis on CRUD operations on a PostgreSQL database. Application admins can CRUD client-admins, who can CRUD employees to keep track of their salaries.',
    tags: ['Postman', 'jsonwebtoken', 'bcrypt', 'pgAdmin', 'authentication'],
  },
] as ProjectType[];
