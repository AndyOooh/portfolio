import { StaticImageData } from 'next/image';

// import ReduxbookVid from '../../../public/projectImages/reduxbook.mp4';
const ReduxbookVidRel = '/projectImages/reduxbook.mp4' as string; // This works
import salaryHeroImg from '../../../public/projectImages/salaryHero.png';
const salaryHeroImgRel = '/projectImages/salaryHero.png' as string;
import redbookImg from '../../../public/projectImages/redbook1.png';
const redbookImgRel = '/projectImages/redbook1.png' as string;
import lotteryImage from '../../../public/projectImages/ballotLottery.jpg';
const lotteryImageRel = '/projectImages/ballotLottery.jpg' as string;

export type ProjectType = {
  video?: string;
  image: string | StaticImageData;
  imageRel?: string;
  title: string;
  gitHub: string;
  liveDemo: string;
  type: string;
  technologies: string[];
  tags?: string[];
};

export const projects = [
  {
    image: redbookImg,
    imageRel: redbookImgRel,
    title: 'The Redbook',
    gitHub: 'https://github.com/AndyOooh/redbook_backend',
    liveDemo: 'https://www.theredbook.xyz/login',
    type: 'Full Stack',
    technologies: ['NodeJS', 'React', 'ExpressJS', 'MongoDB', 'Redux/RT-Query', 'SASS'],
    tags: ['AWS', 'NGINX', , 'Gooogle Oauth', 'JWT', 'Cloudinary', 'Mongoose', 'Formik', 'Yup'],
    implementations: ['Secure auth flow with refresh and access tokens'],
  },
  {
    video: ReduxbookVidRel,
    title: 'Redux course project',
    gitHub: 'https://github.com/AndyOooh/redux-essentials',
    liveDemo: 'https://redux-essentials-course.web.app/',
    type: 'Frontend + Firebase',
    technologies: ['React', 'Redux', 'Firebase'],
    tags: ['React', 'Redux', 'RTK-Query', 'Firebase'],
  },
  {
    image: salaryHeroImg,
    imageRel: salaryHeroImgRel,
    title: 'Salary Hero - job test',
    gitHub: 'https://github.com/AndyOooh/salary_hero',
    type: 'Backend',
    technologies: ['NodeJS', 'ExpressJS', 'PostgreSQl', 'Sequelize'],
    tags: ['SASS', 'JWT'],
  },

  {
    image: lotteryImage,
    imageRel: lotteryImageRel,
    title: 'Lottery dApp',
    gitHub: 'https://github.com/AndyOooh/ETHDenver-group14',
    liveDemo: 'https://encode-client.herokuapp.com/',
    type: 'Full Stack',
    technologies: ['NextJS', 'NestJS', 'Solidity', 'Hardhat', 'TailwindCSS'],
    tags: ['React', 'SASS', 'web3', 'EthersJS', 'Hardhat', 'BASH', 'Chai', 'Mocha', 'TypeScript'],
  },
  // {
  //   image: AndyxyzImage,
  //   title: 'Portfolio website',
  //   gitHub: 'https://github.com/AndyOooh/portfolio1_egator',
  //   liveDemo: 'https://www.andyo.xyz/',
  //   type: 'Frontend',
  //   technologies: 'React AWS Firebase',
  // },
] as ProjectType[];
