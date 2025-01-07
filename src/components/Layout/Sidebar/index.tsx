import React, { useState } from 'react';
import { Home, Calendar, BookOpen, Phone, GraduationCap, Microscope, Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import CourseSection from './CourseSection';

const JEE_COURSES = [
  { name: 'Physics', href: '/jee/physics' },
  { name: 'Chemistry', href: '/jee/chemistry' },
  { name: 'Mathematics', href: '/jee/maths' },
];

const NEET_COURSES = [
  { name: 'Physics', href: '/neet/physics' },
  { name: 'Chemistry', href: '/neet/chemistry' },
  { name: 'Biology', href: '/neet/biology' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          <NavLink href="/" icon={Home}>Home</NavLink>
          <NavLink href="/schedule" icon={Calendar}>Scheduled Classes</NavLink>
          <NavLink href="/courses" icon={BookOpen}>Registered Courses</NavLink>
          <NavLink href="/contact" icon={Phone}>Contact Us</NavLink>

          <CourseSection
            title="JEE Preparation"
            icon={GraduationCap}
            courses={JEE_COURSES}
          />

          <CourseSection
            title="NEET Preparation"
            icon={Microscope}
            courses={NEET_COURSES}
          />
        </nav>
      </aside>
      
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;