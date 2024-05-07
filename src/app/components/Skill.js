// src/components/Skills.js
"use client"
import React from 'react';
import { useTheme } from './theme.js'; // Adjust the path as needed



import "../style/skill.css"

import {
  FaCode,
  FaDatabase,
  FaServer,
  FaToolbox,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGit,
  FaDocker,
  FaSlack,
} from 'react-icons/fa';
import { SiMongodb, SiHeroku, SiNetlify, SiAzuredevops, SiAuth0, SiStripe, SiPaypal, SiSentry, SiPostman } from 'react-icons/si';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skillsList = [
    { name: 'HTML5/CSS3', icon: <FaCode className="text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <FaCode className="text-yellow-500" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
    { name: 'Redux', icon: <FaCode className="text-purple-500" /> },
    { name: 'React Router', icon: <FaCode className="text-indigo-500" /> },
    { name: 'JSX', icon: <FaCode className="text-pink-500" /> },
    { name: 'CSS ', icon: <FaCode className="text-green-500" /> },
    { name: 'Responsive', icon: <FaCode className="text-orange-500" /> },
    { name: 'Webpack/Babel', icon: <FaCode className="text-gray-500" /> },
    { name: 'RESTful APIs', icon: <FaServer className="text-red-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <FaServer className="text-purple-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Mongoose', icon: <FaDatabase className="text-blue-500" /> },
    { name: 'JWT ', icon: <FaCode className="text-yellow-500" /> },
    { name: 'API Security', icon: <FaServer className="text-red-500" /> },
    { name: 'Middleware', icon: <FaServer className="text-purple-500" /> },
    { name: 'CORS', icon: <FaServer className="text-indigo-500" /> },
    { name: 'Async/Await', icon: <FaCode className="text-pink-500" /> },
    { name: 'NPM/Yarn', icon: <FaToolbox className="text-blue-500" /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Heroku', icon: <SiHeroku className="text-purple-500" /> },
    { name: 'Netlify/Vercel', icon: <SiNetlify className="text-indigo-500" /> },
    { name: 'AWS/GCP/Azure', icon: <FaAws className="text-orange-500" /> },
    { name: 'Auth0/Okta', icon: <SiAuth0 className="text-yellow-500" /> },
    { name: 'Stripe/PayPal', icon: <SiStripe className="text-blue-500" /> },
    { name: 'Sentry', icon: <SiSentry className="text-red-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGit className="text-gray-500" /> },
    { name: 'Slack', icon: <FaSlack className="text-pink-500" /> },
    // Add more skills here...
  ];

  return (<>
  <h1 className={`custom-skills-container ${isDarkMode ? 'dark' : ''} mt-4 font-bold text-xl`}>My SKills</h1>
<div className={`custom-skills-container ${isDarkMode ? 'dark' : ''}`}>

    {skillsList.map((skill, index) => (
        <div key={index} className={`custom-skill-item ${isDarkMode ? 'dark' : ''}`}>
            <div className={`custom-skill-item-inner ${isDarkMode ? 'dark' : ''}`}>
                <div className={`custom-skill-item-content ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`custom-skill-icon-container ${isDarkMode ? 'dark' : ''}`}>
                        <p className={`custom-skill-item-icon ${isDarkMode ? 'text-gray-300' : ''}`}>{skill.icon}</p>
                    </div>
                    <div className={`custom-skill-name-container ${isDarkMode ? 'dark' : ''}`}>
                        <p className={`custom-skill-item-name ${isDarkMode ? 'text-gray-300' : ''}`}>{skill.name}</p>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
</>


  );
};

export default Skills;
