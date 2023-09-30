import { Project } from '../../../types/project';

export const WebProjects: Project[] = [
  {
    title: 'My Controller',
    badges: [
      {
        label: 'Free Trial',
        color: 'green'
      },
      { label: 'SaaS', color: 'grape' }
    ],
    link: 'https://www.my-controller.online',
    skills: ['NextJs', 'NestJs', 'Typescript', 'MongoDb'],
    category: 'Web',
    iframeSrc: 'https://www.my-controller.online',
    srcType: 'iframeSrc'
  },
  /* 
  {
    title: 'Keto Style',
    link: 'https://www.ketonestyle.com',
    iframeSrc: 'https://www.ketonestyle.com',

    skills: ['NextJs', 'ExpressJs', 'Typescript', 'MongoDb'],
    category: 'Web',
    srcType: 'iframeSrc'
  },
*/
  {
    title: 'Geolocator',
    link: 'https://geolocator-tracker.vercel.app/',
    iframeSrc: 'https://geolocator-tracker.vercel.app/',

    skills: ['VueJs', 'Typescript'],
    category: 'Web',
    srcType: 'iframeSrc'
  },
  {
    title: 'Drug Store',
    link: 'https://drug-store-ebon.vercel.app',
    iframeSrc: 'https://drug-store-ebon.vercel.app',

    skills: ['NextJs', 'Firebase'],
    category: 'Web',
    srcType: 'iframeSrc'
  }
];

export const DesktopProjects: Project[] = [
  {
    title: 'Controller System Management (PS) ',
    badges: [
      {
        label: 'Free Trial',
        color: 'green'
      }
    ],
    link: 'https://drive.google.com/drive/folders/17JnEJxPPLvan3UkrHR7DC7fEBnKe0PVK?usp=sharing',
    skills: ['NextJs', 'Electron', 'Typescript', 'MongoDb', 'NodeJs'],
    category: 'Desktop',
    imgSrc: '/projects/controller-desktop.png',
    srcType: 'imgSrc'
  },
  {
    title: 'Controller System Management (Restaurants) ',
    badges: [
      {
        label: 'Free Trial',
        color: 'green'
      }
    ],
    link: 'https://drive.google.com/drive/folders/17JnEJxPPLvan3UkrHR7DC7fEBnKe0PVK?usp=sharing',
    skills: ['NextJs', 'Electron', 'Typescript', 'MongoDb', 'NodeJs'],
    category: 'Desktop',
    imgSrc: '/projects/controller restaurant .png',
    srcType: 'imgSrc'
  }
];

export const MobileProjects: Project[] = [
  {
    title: 'Keto Style',
    badges: [
      {
        label: 'Under Development',
        color: 'yellow'
      }
    ],
    skills: ['RN', 'Typescript', 'Figma'],
    category: 'Desktop',
    srcType: 'imgSrc',
    imgSrc: '/projects/keto-mob.png'
  }
];

export const Project_BOX_WIDTH = '400' || '300';
