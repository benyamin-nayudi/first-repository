import React from 'react';
import './Layout.css'; // Import CSS file for styling
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <nav className="no-bullets">
      <ul className="Vertical-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/Grid">Contact</Link>

        </li>
        <li>
          <Link to="/email">Email</Link>
        </li>
      </ul>
    </nav>
  
    <Outlet />
  </>
  )
};

export default Layout;