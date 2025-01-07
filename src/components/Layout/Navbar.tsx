import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <GraduationCap size={28} />
          <span>Vivek Institute</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;