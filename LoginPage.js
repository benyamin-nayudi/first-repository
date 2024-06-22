import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './LoginPage.css';



const LoginPage = () => {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),

        
      });
      

      if (response.ok) {
        setSuccess('Login successful');
        return <Navigate to="/" />;
        window.location.reload(); // Reload the page
      }else {
        const data = await response.json();
        setError(data.error || 'Something went wrong');
        console.log(data);
      }
    } catch (error) {
      setError('Something went wrong');
      console.error('Error during login:', error);
    }
  };
   

  return (

   

   
    
        <div style={{ 
          margin: 0, 
         padding:0,
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/161227-businessman-stock-business-man.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          width: '100%',
          height: '100vh',
         
          
        }} className="login-page">
           <div className="menu">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="/content">Contact</a>
            </div>

          <div className="login-container">
            <div className="login-box">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button type="submit" className="login-button">Login</button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default LoginPage;