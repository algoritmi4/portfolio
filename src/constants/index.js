import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  reactquery,
  graphql,
  mevent,
  expertSend,
  champacademy,
  coverhunt,
  coinzone,
  todoList,
  ux,
  phone,
  linked,
  telegram,
  email
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Node.js\nDeveloper',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'React Query',
    icon: reactquery,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'DevStarter',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2021 - Apr 2024',
  },
  {
    title: 'Front-End Developer',
    company_name: 'MEVENT',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024 - present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'COINZONE',
    description: `Analytical service for tracking and studying the dynamics of cryptocurrency.`,
    image: coinzone,
    repo: 'https://github.com/algoritmi4/coin-zone',
    demo: 'https://coin-zone.netlify.app',
  },
  {
    id: 'project-2',
    name: 'MEVENT',
    description:
      'Social network with a focus on creating and attending events.',
    image: mevent,
    repo: 'https://github.com/jakkemomo/meetups-ui/tree/dev',
    demo: 'https://meetups-ui-6vuzexfx2q-lm.a.run.app/',
  },
  {
    id: 'project-3',
    name: 'Experts send game',
    description: 'An interesting mini-game with beautiful animations.',
    image: expertSend,
    repo: 'https://github.com/algoritmi4/experts-send-app',
    demo: 'https://reliable-souffle-1a3106.netlify.app',
  },
  {
    id: 'project-4',
    name: 'ToDo List',
    description: 'Simple todo list written with a big tech stack.',
    image: todoList,
    repo: 'https://github.com/algoritmi4/todo-list-app',
    demo: 'https://gilded-crostata-2c6d85.netlify.app',
  },
  {
    id: 'project-5',
    name: 'Champacademy App',
    description: 'Website of one of the best Moscow sambo and judo clubs.',
    image: champacademy,
    repo: 'https://github.com/algoritmi4/chemp-academy-app',
    demo: 'https://chemp-academy.netlify.app',
  },
];

const contacts = [
  {
    id: 1,
    name: '@algoritmi4',
    icon: telegram,
    link: 'https://t.me/algoritmi4'
  },
  {
    id: 2,
    name: '+79125170136',
    icon: phone,
    link: 'tel:+79125170136'
  },
  {
    id: 3,
    name: 'ButorinLP@yandex.ru',
    icon: email,
    link: 'mailto:ButorinLP@yandex.ru'
  },
  {
    id: 4,
    name: 'algoritmi4',
    icon: linked,
    link: 'https://www.linkedin.com/in/algoritmi4/'
  },
]

const nameLetters = ['I', 'V', 'A', 'N'];

export { services, technologies, experiences, projects, nameLetters, contacts };
