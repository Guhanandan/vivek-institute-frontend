import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import CourseGrid from './components/Courses/CourseGrid';
import CourseDetail from './components/Courses/CourseDetail';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import SearchBar from './components/Home/SearchBar';
import Testimonials from './components/Home/Testimonials';
import WhyChooseUs from './components/Home/WhyChooseUs';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="container mx-auto px-4">
            <div className="flex">
              <Sidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={
                    <>
                      <div className="welcome-section">
                        <h1>Welcome to Vivek Institute</h1>
                        <p>Your gateway to JEE and NEET success</p>
                      </div>
                      <SearchBar />
                      <CourseGrid />
                      <WhyChooseUs />
                      <Testimonials />
                    </>
                  } />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                  <Route path="/courses" element={<CourseGrid />} />
                  <Route path="/course/:courseId" element={<CourseDetail />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;