import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/nav.css';

function Nav() {
    // console.log('Navbar is working')
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;