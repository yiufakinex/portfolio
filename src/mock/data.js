import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Franklin Burger', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Franklin Burger Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Franklin Yiu.',
  subtitle: "I'm a full stack developer.",
  // title: "Hi, if you're",
  // name: 'here,',
  // subtitle: 'this site is a work in progress.',
  // cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  frontEnd: {
    title: 'Front End',
    stacks: [
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'React', img: 'react.png' },
      { name: 'Typescript', img: 'typescript.webp' },
      { name: 'Tailwind', img: 'tailwind.png' },
      { name: 'HTML5', img: 'html5.png' },
      { name: 'CSS3', img: 'css.png' },
      { name: 'Vite', img: 'vite.png' },
      { name: 'ShadcnUI', img: 'ShadcnUI.png' },
      { name: 'Figma', img: 'Figma.png' },
    ],
    burger: 'burger_topbun.png',
  },
  backEnd: {
    title: 'Back End',
    stacks: [
      { name: 'Node', img: 'node.png' },
      { name: 'Express', img: 'express.png' },
      { name: 'Java', img: 'java.png' },
      { name: 'PostgreSQL', img: 'pg.png' },
      { name: 'RESTful API', img: 'restfulapi.png' },
      { name: 'Spring Boot', img: 'springboot.png' },
      { name: 'MySQL', img: 'mysql.png' },
      { name: 'MongoDB', img: 'mongodb.png' },
    ],
    burger: 'burger_bottombun.png',
  },
  tools: {
    title: 'Tools',
    stacks: [
      { name: 'Stripe', img: 'stripe.png' },
      { name: 'Git', img: 'git.png' },
      { name: 'Kubernetes', img: 'kubernetes.png' },
      { name: 'AWS', img: 'aws.png' },
      { name: 'Postman', img: 'postman.webp' },
      { name: 'Webpack', img: 'module.png' },
      { name: 'OAuth', img: 'id.png' },
      { name: 'WebSockets', img: 'websockets.png' },
      { name: 'ESLint', img: 'eslint.png' },
      { name: 'Auth0', img: 'autho.png' },
      { name: 'Terraform', img: 'terraform.png' },
      { name: 'Docker', img: 'docker.png' },
    ],
    burger: 'burger_middle.png',
  },
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'DesertGo.com - Food Delivery App',
    imageAlt: 'desertgo.jpg',
    imageUrl: 'https://res.cloudinary.com/dls9pinnl/image/upload/t_chatappresize/v1716250047/desertgo_vljrlt.jpg',
    info:
      "This is a food delivery application created using React/TypeScript in the frontend and Node.js/TypeScript and Express in the backend. Users can create accounts via Auth0, real-time order tracking, browse restaurants, order food, and complete checkout with Stripe. ",
    info2: 'Deploying a Food Delivery App on AWS',
    info3: '<h3>## Current Implementation ##</h3><ul><li>Hosted on AWS EC2 Free Tier</li><li>Nginx for static file serving and reverse proxy</li><li>HTTPS/SSL encryption with Let\'s Encrypt</li><li>Secure Stripe webhook integration</li><li>DuckDNS for domain management</li></ul>',
    stack: [
      'React',
      'Auth0',
      'Node/Express',
      'MongoDB',
      'Stripe',
      'Vite',
      'ShadcnUI',
      'TypeScript',
      'Tailwind',
      'Cloudinary',
      'AWS',
      'Git',
      'Let\'s Encrypt',
      'Nginx',
      'DuckDNS',
      'PuTTY',
    ],
    note: 'App hosted on free AWS server. Please allow 10-15s to spin up.',
    url: 'https://fooddeli.duckdns.org/',
    frontrepo: 'https://github.com/yiufakinex/food-delivery-app-frontend',
    backrepo: 'https://github.com/yiufakinex/food-delivery-app-backend',
    frontdepo: 'https://github.com/yiufakinex/food-delivery-app-frontend/tree/aws-deployment',
    backdepo: 'https://github.com/yiufakinex/food-delivery-app-backend/tree/aws-deployment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Advanced: Deploying a Food Delivery App on AWS with Terraform',
    imageAlt: 'aws.jpg',
    imageUrl: 'https://res.cloudinary.com/dls9pinnl/image/upload/t_chatappresize/v1742354509/new%20Terraform-Ecommerce_j1wfv9_704d38.jpg',
    info:
      'An end-to-end deployment of a scalable and secure Food Delivery application using AWS infrastructure, managed and automated with Terraform.',
    info2: '',
    info3: '<h3>## Advanced Implementation ##</h3><p>While this portfolio project uses a cost-effective setup, I\'m also familiar with designing more robust AWS architectures including:</p><ul><li>VPC with public/private subnets for enhanced security</li><li>RDS for managed database services</li><li>Route53 for DNS management</li><li>Load balancing with ELB/ALB</li><li>Auto Scaling groups for high availability</li><li>S3 for static assets and backups</li><li>CloudFront for content delivery</li><li>IAM for fine-grained access control</li></ul>',
    stack: [
      'AWS',
      'VPC',
      'EC2',
      'RDS',
      'Route53',
      'ELB/ALB',
      'S3',
      'CloudFront',
      'IAM',
      'Terraform',
      'Git',
      'Docker',
      'SNS',
    ],
    note: 'Advanced implementation code is below.',
    url: '',
    awsdepo: 'https://github.com/yiufakinex/food-delivery-app-aws-terraform',  // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chat App',
    imageAlt: 'chatapp.jpg',
    imageUrl: 'https://res.cloudinary.com/dls9pinnl/image/upload/t_chatappresize/v1742251907/chatapp_tsqv7p.png',
    info:
      'This project is a chat application developed using Spring Boot for the backend and React/TypeScript for the frontend. It leverages StompJS and SockJS (WebSocket) for real-time user communication and MySQL for data persistence. Users can create accounts via OAuth 2.0, form custom group chats, and exchange messages seamlessly. This application draws inspiration from earlier versions of Discord, aiming to deliver a robust and user-friendly chat experience.',
    info2: '',
    stack: [
      'TypeScript', 
      'React', 
      'MySQL', 
      '0auth',
      'StompJS',
      'SockJS',
      'Node/Express',
      'Tailwind',
      'Webpack',
      'Axios',
      'Java',
      'Spring Boots',
      'AWS',
      'Docker',
      'Git',
    ],
    note: 'App hosted on free AWS server. Please allow 10-15s to spin up.',
    url: 'https://chatapp-franklin.duckdns.org/', // if no url, the button will not show up
    frontrepo: 'https://github.com/yiufakinex/chat-app-frontend',
    backrepo: 'https://github.com/yiufakinex/chat-app-backend',
    frontdepo: 'https://github.com/yiufakinex/chat-app-frontend/tree/aws-deployment',
    backdepo: 'https://github.com/yiufakinex/chat-app-backend/tree/aws-deployment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Advanced: Deploying a Chat App on AWS using Terraform',
    imageAlt: 'sless.jpg',
    imageUrl: 'https://res.cloudinary.com/dls9pinnl/image/upload/v1742365413/sless_xljapl.jpg',
    info:
      'An end-to-end deployment of a scalable and secure Chat application using AWS infrastructure, managed and automated with Terraform.',
    info2: '',
    info3: '<h3>## Advanced Implementation - Traditional Approach ##</h3><p>While this portfolio project uses a cost-effective setup, I\'m familiar with designing robust AWS architectures for production chat applications including:</p><ul><li>VPC with public/private subnets for enhanced security - application servers in private subnets</li><li>RDS with Multi-AZ deployment for database high availability and failover</li><li>Route53 for custom domain management with health checks</li><li>Application Load Balancer with WebSocket support and sticky sessions</li><li>Auto Scaling groups configured for chat traffic patterns</li><li>ElastiCache (Redis) for STOMP message broker and session management</li><li>S3 for media file storage with presigned URLs for secure access</li><li>CloudFront for static asset delivery and additional DDoS protection</li><li>IAM roles with least privilege for EC2 instances and services</li><li>CloudWatch for comprehensive monitoring and alerting</li><li>WAF for rate limiting and protection against common web vulnerabilities</li></ul>',
    stack: [
      'AWS',
      'VPC',
      'EC2',
      'RDS',
      'Redis',
      'Route53',
      'ALB',
      'Auto Scaling',
      'S3',
      'CloudFront',
      'IAM',
      'CloudWatch',
      'WAF',
      'Terraform',
      'Git',
      'Spring Boot',
      'WebSocket/STOMP',
      'Docker',
    ],
    note: 'Advanced implementation code is below.',
    url: '',
    awstdepo: 'https://github.com/yiufakinex/chat-app-aws-terraform',  // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'ToDoList',
    imageAlt: 'todolist.jpg',
    imageUrl: 'https://res.cloudinary.com/dls9pinnl/image/upload/t_chatappresize/v1716250047/todolist_occeuf.jpg',
    info:
      'An interactive task management tool to organize and track daily tasks efficiently. This project is developed using Spring Boot for the backend and React/TypeScript for the frontend. Customizable task lists allow users to manage and prioritize tasks in various views. Accessible on all devices for seamless productivity.',

    stack: [
      'Vite',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Java',
      'Node/Express',
      'Spring Boots',
      'Eslint',
      'MaterialUI',
      'AWS',
      'Docker',
      'Terraform',
    ],
    note:
      'App hosted on free Heroku server. Please allow 15-30s to spin up. We have limited Adzuna API queries. If app causes 500 error, please select state: California; filter: Javascript, to explore app with cached dummy data.',
    //url: 'https://javascript-jobs-usa.herokuapp.com/',
    frontrepo: 'https://github.com/yiufakinex/todolist-frontend',
    backrepo: 'https://github.com/yiufakinex/todolist-backend', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  // For lulz:
  // img: 'Origami_Bernie_Meme.jpeg',
  // img: 'LinkedInPhoto.png',
  img: 'IMG.jpg',
  paragraphOne:
    'As a lifelong engineer, I have experience in planning and managing high-rise building projects before transitioning to the tech industry.',
  paragraphTwo:
    'In 2023, I took a leap and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.',
  paragraphThree:
    "When I'm not coding, I enjoy outdoor activities like baseball, snowboarding and hiking, testing new recipes, or writing musical parodies on my guitar.",
  resume: 'https://docs.google.com/document/d/1Ymk8y2eeROQg0S0Slz-ESlkmGvwKZt6YceTfTD09kyE/edit?usp=drive_link', 
//linkedin: 'https://www.linkedin.com/in/franklin-you-can-do-it',
  github: 'https://github.com/yiufakinex',
  leetcode: '', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch!',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
      //id: nanoid(),
      //name: 'linkedin',
      //url: 'https://www.linkedin.com/in/franklin-you-can-do-it',
    //},
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yiufakinex',
    },
    {
      id: nanoid(),
      name: 'file',
      url: aboutData.resume,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
