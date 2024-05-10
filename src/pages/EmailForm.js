
 import React, { useState } from 'react';



const EmailForm = () => {
  // State variables to store email data
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email
    console.log('Sending email...');
    console.log('To:', toEmail);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // Reset form fields
    setToEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="email"
          id="to"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};




export default EmailForm;

