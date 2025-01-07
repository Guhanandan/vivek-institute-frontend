import React from 'react';
import CourseCard from './CourseCard';
import { JEE_COURSES, NEET_COURSES } from '../Layout/Sidebar/constants';

const CourseGrid: React.FC = () => {
  const allCourses = [...JEE_COURSES, ...NEET_COURSES];

  return (
    <div className="course-grid">
      <h2 className="section-title">Our Courses</h2>
      <div className="courses-container">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;