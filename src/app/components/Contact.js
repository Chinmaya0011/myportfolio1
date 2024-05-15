"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { BiCheck } from 'react-icons/bi';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: sendCopy ? email : '',
    };

    try {
      await emailjs.send('service_ja1a96o', 'template_rrdbaix', templateParams, 'Eds3xbebkcXNOC9SB');
      console.log('Email sent successfully!');
      alert('Email sent successfully!');
      setSuccessMsg(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }

    setName('');
    setEmail('');
    setMessage('');
    setSendCopy(false);
  };

  return (
    <div className="contact-section flex">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p><FaPhone /></p>
        <p>+91 7077835119</p>
        <p><FaEnvelope /></p>
        <p>imchinu17@gmail.com</p>
        <div className="socialIcon flex">
          <FiTwitter className="mr-4 text-blue-500 text-2xl" />
          <FiFacebook className="mr-4 text-blue-500 text-2xl" />
          <FiInstagram className="text-purple-500 text-2xl" />
        </div>
      </div>
      <div className="contact-form">
        {successMsg ? (
          <div className="message-sent justify-center text-center min-h-full">
            <BiCheck className="right-mark-logo text-green-500 text-5xl mb-4 justify-center text-center" />
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
