import React from 'react';
import './HomePage.css'; // Import a separate CSS file for styling
import { Link } from "react-router-dom";
import MyGrid from './Grid';


const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Blog</h1>

                
                {/* Button to navigate to Contact page */}
                <Link to="/contact">
                    <button className="cta-button">Get Started</button>
                </Link>
            </header>

            {/* Main content */}
            <section className="home-content">
                <div className="home-feature">
                   {/* Navigation links */}
                   <h2>Feature One</h2>  
               
                    <MyGrid/>
                </div>
                <div className="home-feature">
                    <h2>Feature Two</h2>
                    <p>Discover the benefits of our second feature.</p>
                </div>
                <div className="home-feature">
                    <h2>Feature Three</h2>
                    <p>Explore the possibilities with our third feature.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </footer>
           
        </div>
    );
};

export default Home;