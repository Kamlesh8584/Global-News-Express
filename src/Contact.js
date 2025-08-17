import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { MdEmail, MdSubject, MdMessage, MdPerson } from 'react-icons/md';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message. Please try again.');
    }
  };

  // Styles
  const wrapperStyle = {
    background: 'linear-gradient(to right, #dbeafe, #f0f9ff)',
    minHeight: '100vh',
    padding: '4rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  };

  const containerStyle = {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    maxWidth: '1000px',
    width: '100%',
  };

  const infoStyle = {
    flex: 1,
    minWidth: '300px',
    padding: '1rem',
  };

  const formStyle = {
    flex: 1,
    minWidth: '300px',
    padding: '1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: '1.5rem',
  };

  const inputGroupStyle = {
    position: 'relative',
    marginBottom: '1.25rem',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: '#1e3a8a',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    width: '100%',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  const buttonHover = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <h2 style={headingStyle}>Let's Get in Touch</h2>
          <p style={{ fontSize: '1rem', color: '#444' }}>
            We'd love to hear from you! Whether you have a question about our platform, need help, or just want to give feedback—feel free to reach out.
          </p>
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="Contact illustration"
            style={{ marginTop: '2rem', width: '100%', borderRadius: '10px' }}
          />
        </div>

        <form style={formStyle} onSubmit={handleSubmit}>
          <h2 style={headingStyle}>Contact Form</h2>

          <div style={inputGroupStyle}>
            <MdPerson style={iconStyle} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <MdEmail style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <MdSubject style={iconStyle} />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <MdMessage style={iconStyle} />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
            ></textarea>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#3b82f6')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#1e3a8a')}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
