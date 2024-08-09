import { meta, shopify, starbucks, tesla } from "../assets/images";
import brototype from '/src/assets/images/brototype.webp';
import access from '/src/assets/images/access.png';
import rental from '/src/assets/icons/rental.png';
import footsteps from '/src/assets/icons/footsteps.png';
import olx from '/src/assets/icons/olx.png';
import netflix from '/src/assets/icons/netflix.png';
import todo from '/src/assets/icons/todo.png';

import {
    // car,
    // contact,
    css,
    // estate,
    // express,
    git,
    github,
    html,
    // python,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    // snapgram,
    summiz,
    tailwindcss,
    // threads,
    // typescript
} from "../assets/icons";
import python from '/src/assets/icons/python.svg';
import django from '/src/assets/icons/django.svg';
import aws from '/src/assets/icons/aws.svg';
import figma from '/src/assets/icons/figma.svg';
import postman from '/src/assets/icons/postman.svg';
import mysql from '/src/assets/icons/mysql.svg';

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "UI",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API development and testing",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "cloud platform",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Django+React Developer",
        company_name: "Rental Home",
        icon: brototype,
        iconBg: "#accbe1",
        date: "March 2024 - April 2024",
        points: [
            "Developing and maintaining web applications using React.js,Django and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing global state management library like Redux.",
            "payment integration used for this project is PayPal",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Python Django Developer",
        company_name: "Footsteps",
        icon: brototype,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Nov 2023",
        points: [
            "Developing and maintaining web applications using django,html,css and other related technologies.",
            "Collaborating with django channels including one to one chat support, customer can be seller and also buyer.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "payment integration used for this project is Razorpay",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Project Engineer",
        company_name: "Access Refrigeration",
        icon: access,
        iconBg: "#b2e4a1",
        date: "Mar 2021 - Feb 2023",
        points: [
            "Collaborated and worked closely with 50+ professionals from the industry, conducted reports and monthly audits on project, progress presenting results to executive",
            "Oversee mechanical /HVAC facility designs for layout, plant, utilities and equipment arrangement for commercial and residential projects.",
            "Managed and collaborated commissioning and billing as per BOQ",
            "Understand overall project constraints including design budget limitations and schedule requirements.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    // {
    //     name: 'Email',
    //     iconUrl: email,
    //     link: '/contact',
    // },
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: 'https://wa.me/918281065621', // Replace 'yourphonenumber' with your actual phone number in international format without any symbols
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/RobinJohnVarghese?tab=repositories',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/robin-john-varghese-40736b158/',
    }
];

export const projects = [
    {
        iconUrl: rental,
        theme: 'btn-back-red',
        name: 'Rental Home',
        description: 'Developed a web application that tracks and notifies users  needful houses and properties, helping users find the best deals.',
        link: 'https://github.com/RobinJohnVarghese/Rental_Home_Frontend',
        // link: 'https://github.com/RobinJohnVarghese/Rental_Home_Backend',
    },
    {
        iconUrl: footsteps,
        theme: 'btn-back-green',
        name: 'Footsteps',
        description: 'Created a full-stack app  platform for  buy and use footwears for affordable price and trending styles.',
        link: 'https://github.com/RobinJohnVarghese/Footsteps_Ecommerce_django',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Password Generator',
        description: 'Designed and built an app for finding, comparing and generating passwords for different apps and personal uses',
        link: 'https://github.com/RobinJohnVarghese/passwordgeneratorfrontend',
    },
    {
        iconUrl: todo,
        theme: 'btn-back-pink',
        name: 'ToDo Lists',
        description: "It's important for the daily task or some targets for achieving the goals to check all are correct order or not",
        link: 'https://github.com/RobinJohnVarghese/ToDo-Lists',
    },
    {
        iconUrl: olx,
        theme: 'btn-back-black',
        name: 'Olx-using React',
        description: 'Developed a web application for new and old things listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/RobinJohnVarghese/OLX-using-React',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-yellow',
        name: 'Netflix clone',
        description: 'Built a complete clone of Netflix, allowing users to see photos and video with friends and family for environment..',
        link: 'https://github.com/RobinJohnVarghese/Netflix-using-React',
    }
];