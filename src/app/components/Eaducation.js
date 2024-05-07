"use client"
import React from 'react';
import '../style/Eaducation.css'; // Import CSS for hover effect
import { useTheme } from './theme.js'; // Adjust the path as needed

const Education = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`education ${isDarkMode ? 'dark' : ''} mt-4`}>
      <h1 className={`education-title`}>Education</h1>
      <div className="education-container">
        <div className={`education-card ${isDarkMode ? 'dark' : ''}`}>
          <h2 className={`education-card-title ${isDarkMode ? 'text-white' : ''}`}>Parala Maharaja Engineering College</h2>
          <p className={`education-card-info ${isDarkMode ? 'text-gray-300' : ''}`}>Berhampur, Odisha</p>
          <p className={`education-card-info ${isDarkMode ? 'text-gray-300' : ''}`}>Degree in B.Tech | July 2018 - July 2021</p>
        </div>
        <div className={`education-card ${isDarkMode ? 'dark' : ''}`}>
          <h2 className={`education-card-title ${isDarkMode ? 'text-white' : ''}`}>Govt. Polytechnic</h2>
          <p className={`education-card-info ${isDarkMode ? 'text-gray-300' : ''}`}>Berhampur, Odisha</p>
          <p className={`education-card-info ${isDarkMode ? 'text-gray-300' : ''}`}>Degree in Diploma | August 2014 - August 2017</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

