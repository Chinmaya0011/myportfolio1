"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing phone and envelope icons
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'; // Importing Twitter, Facebook, and Instagram icons
import "../style/Contact.css";
import { BiCheck } from 'react-icons/bi'; // Importing the BiCheck icon

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: sendCopy ? email : '', // Send a copy to user's email if sendCopy is true
    };

    // Sending email
    emailjs.send('service_ja1a96o', 'template_rrdbaix', templateParams, 'Eds3xbebkcXNOC9SB')
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Email sent successfully!');
        setSuccessMsg(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setSendCopy(false); // Reset sendCopy state
  };

  return (
    <div className="contact-section flex">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p ><FaPhone /></p> 
        <p> +91 7077835119</p>{/* Phone icon */}
        <p ><FaEnvelope /> </p> 
        <p>imchinu17@gmail.com</p>{/* Envelope icon */}
        <div className="socialIcon flex">
          <FiTwitter className="mr-4 text-blue-500 text-2xl" /> {/* Twitter icon */}
          <FiFacebook className="mr-4 text-blue-500 text-2xl" /> {/* Facebook icon */}
          <FiInstagram className="text-purple-500 text-2xl" /> {/* Instagram icon */}
        </div>
      </div>
      <div className="contact-form">
        {successMsg ? (
          <div className="message-sent justify-center text-center min-h-full">
            <BiCheck className="right-mark-logo text-green-500 text-5xl mb-4 justify-center text-center" /> {/* Using BiCheck icon as the right logo */}
            <p className="message">Message sent successfully. Thank you!</p>
          </div>
        ) : (
            <>
              <h2>Contact Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" required></textarea>
                </div>
                <div className="form-group flex">
                  <input type="checkbox" id="sendCopy" name="sendCopy" checked={sendCopy} onChange={(e) => setSendCopy(e.target.checked)} />
                  <label htmlFor="sendCopy">Send me a copy</label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </>
          )}
      </div>
    </div>
  );
};

export default Contact;
