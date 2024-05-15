import React from 'react';
import "../style/Certificate.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving (Basic)",
      organization: "HackerRank",
      dateIssued: "April 2024",
      credentialID: "68ab86ada210",
      skills: "JavaScript",
      verificationLink: "https://example.com/verification1"
    },
    {
      title: "Frontend Developer (React) Certificate",
      organization: "HackerRank",
      dateIssued: "March 2024",
      credentialID: "67dfe30c2ffb",
      skills: "React.js, JavaScript",
      verificationLink: "https://example.com/verification2"
    },
    {
      title: "CSS Certification Test - Youtube Course",
      organization: "KGCoding by Prashant Sir",
      dateIssued: "December 2023",
      credentialID: "SBXI16IC",
      skills: "Cascading Style Sheets (CSS)",
      verificationLink: "https://example.com/verification3"
    },
    {
      title: "HTML Certification Test - Youtube Course",
      organization: "KGCoding by Prashant Sir",
      dateIssued: "December 2023",
      credentialID: "MDP90CDU",
      skills: "HTML",
      verificationLink: "https://example.com/verification4"
    },
    {
      title: "JavaScript Certification Test - Youtube Course",
      organization: "KGCoding by Prashant Sir",
      dateIssued: "December 2023",
      credentialID: "HYMMK8P7",
      skills: "JavaScript",
      verificationLink: "https://example.com/verification5"
    },
    {
      title: "React and Redux Certification Test - Youtube Course",
      organization: "KGCoding by Prashant Sir",
      dateIssued: "December 2023",
      credentialID: "QZ7OLBZ0",
      skills: "React, Redux",
      verificationLink: "https://example.com/verification6"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      organization: "freeCodeCamp",
      dateIssued: "September 2023",
      skills: "JavaScript",
      verificationLink: "https://example.com/verification7"
    },
    {
      title: "Web Development",
      organization: "Internshala",
      dateIssued: "March 2023",
      credentialID: "zn9gbkaym5_",
      skills: "React.js, Problem Solving, HTML5, CSS, Web Application Development, MongoDB, Front-End Development, JavaScript, Web Development, Bootstrap",
      verificationLink: "https://example.com/verification8"
    },
    // Add more certifications here...
  ];

  return (
    <div className="certifications-container">
      {certifications.map((certification, index) => (
        <div className="certification-card" key={index}>
          <div className="certification-header">
            {/* Logo will be added here */}
            <div className="certification-title">{certification.title}</div>
          </div>
          <div className="certification-details">
            <div className="certification-detail"><strong>Organization:</strong> {certification.organization}</div>
            <div className="certification-detail"><strong>Date Issued:</strong> {certification.dateIssued}</div>
            <div className="certification-detail"><strong>Credential ID:</strong> {certification.credentialID}</div>
            <div className="certification-detail"><strong>Skills:</strong> {certification.skills}</div>
            {certification.verificationLink && (
              <div className="certification-detail">
                <a href={certification.verificationLink} target="_blank" rel="noopener noreferrer">Show credential</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
