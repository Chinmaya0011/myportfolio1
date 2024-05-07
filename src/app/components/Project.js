"use client"
import React, { useState } from 'react';
import projectData from '../projectData/projectdata.js';
import "../style/project.css";
import Image from 'next/image.js';

const Project = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(Array(projectData.length).fill(0));
  const [enlarged, setEnlarged] = useState(false); // State to track if the image is enlarged

  const nextSlide = (index) => {
    const lastIndex = projectData[index].images.length - 1;
    const shouldResetIndex = currentImageIndexes[index] === lastIndex;
    const newIndex = shouldResetIndex ? 0 : currentImageIndexes[index] + 1;
    
    setCurrentImageIndexes(prevIndexes => [
      ...prevIndexes.slice(0, index),
      newIndex,
      ...prevIndexes.slice(index + 1)
    ]);
  };

  const prevSlide = (index) => {
    const lastIndex = projectData[index].images.length - 1;
    const shouldResetIndex = currentImageIndexes[index] === 0;
    const newIndex = shouldResetIndex ? lastIndex : currentImageIndexes[index] - 1;
    
    setCurrentImageIndexes(prevIndexes => [
      ...prevIndexes.slice(0, index),
      newIndex,
      ...prevIndexes.slice(index + 1)
    ]);
  };

  const toggleEnlarge = () => {
    setEnlarged(!enlarged);
  };

  return (
    <div className="container">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <h2 className="project-card-title">{project.title}</h2>
          <div className="image-carousel">
            <button className="prev-button" onClick={() => prevSlide(index)}>Previous</button>
            {/* Wrap the image within a container with a toggleable class */}
            <div className={`image-container ${enlarged ? 'enlarged' : ''}`} onClick={toggleEnlarge}>
              <Image className="carousel-image" src={project.images[currentImageIndexes[index]]} alt={`Project ${index + 1} Image ${currentImageIndexes[index] + 1}`} />
            </div>
            <button className="next-button" onClick={() => nextSlide(index)}>Next</button>
          </div>
          <p className="project-description">{project.description.split(' ').slice(0, 10).join(' ')}</p>
          <p className="project-links">
            <a className="project-link" href={project.github}>GitHub</a> | <a className="project-link" href={project.liveDemo}>Live Demo</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Project;
