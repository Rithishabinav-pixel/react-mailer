import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://react-mailer-rithish.netlify.app//send-email', formData);
      console.log(response)
      alert('Email sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send email');
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Recipient Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
