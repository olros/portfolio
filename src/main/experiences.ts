import blank from './assets/experience/blank.jpg';
import capra from './assets/experience/capra.png';
import ec_play from './assets/experience/ec_play.jpg';
import kantega from './assets/experience/kantega.jpg';
import knowit from './assets/experience/knowit.jpg';
import wiseline from './assets/experience/wiseline.jpg';

export type Experience = {
  id: string;
  company: string;
  when: string;
  image: string;
  type: string;
  link: string;
};

export const experiences: Experience[] = [
  {
    id: 'blank-heltid',
    link: 'https://blank.no',
    company: 'Blank',
    when: 'August 2024 - Nå',
    image: blank,
    type: 'Heltid',
  },
  {
    id: 'kantega',
    link: 'https://kantega.no',
    company: 'Kantega',
    when: 'August 2022 - Juni 2024',
    image: kantega,
    type: 'Deltid',
  },
  {
    id: 'capra',
    link: 'https://capraconsulting.no/',
    company: 'Capra',
    when: 'Sommer 2023',
    image: capra,
    type: 'Sommerjobb',
  },
  {
    id: 'blank-deltid',
    link: 'https://blank.no',
    company: 'Blank',
    when: 'Sommer 2022',
    image: blank,
    type: 'Sommerjobb',
  },
  {
    id: 'wiseline',
    link: 'https://wiseline.no',
    company: 'Wiseline',
    when: 'August 2021 - Juni 2022',
    image: wiseline,
    type: 'Deltid',
  },
  {
    id: 'knowit',
    link: 'https://knowit.no',
    company: 'Knowit',
    when: 'Sommer 2021',
    image: knowit,
    type: 'Sommerjobb',
  },
  {
    id: 'ec_play',
    link: 'https://ec-play.com',
    company: 'EC-Play',
    when: 'Juni 2020 - Juni 2021',
    image: ec_play,
    type: 'Sommerjobb/Deltid',
  },
];
