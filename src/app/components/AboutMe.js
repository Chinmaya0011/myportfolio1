"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from './theme.js';

const AboutMe = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Set the initial width after the component mounts
    setWindowWidth(window.innerWidth);

    // Event listener to update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div className={`section1 hero min-h-screen flex flex-col justify-center items-center px-4 ${isDarkMode ? 'dark' : ''}`}>
      <div style={{ width: windowWidth && windowWidth >= 568 ? '60%' : '90%' }} className='justify-center items-center px-4 text-center'>
        <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>CHINMAYA KUMAR MISHRA</h1>
        <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : ''}`}>Full-Stack Web Developer</p>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : ''}`}>imchinu17@gmail.com | 7077835119 | Bhubaneswar, Odisha</p>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : ''}`}>Passionate Full-Stack Web Developer based in Bhubaneswar, Odisha. Experienced in building innovative web solutions using React.js, Next.js, Node.js, and MongoDB. Skilled in developing user-friendly applications that meet the needs of clients and users alike.</p>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : ''}`}>In my journey as a developer, I've had the opportunity to work on various projects ranging from e-commerce platforms to hospital management systems. I thrive in collaborative environments and enjoy bringing creative ideas to life through code.</p>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : ''}`}>I am deeply committed to continuous learning and staying up-to-date with the latest technologies and industry trends. I believe in the power of technology to drive positive change and am passionate about leveraging my skills to create meaningful solutions.</p>
        <p className={`${isDarkMode ? 'text-gray-300' : ''}`}> Outside of coding, I enjoy exploring new technologies, reading tech blogs, and participating in hackathons. I also love to travel, discover new cuisines, and spend time with family and friends.</p>
      </div>
    </div>
  );
};

export default AboutMe;
