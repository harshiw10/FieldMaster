import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/HomeComponents/navbar/Navbar';
import Hero from './components/HomeComponents/Hero/Hero';
import About from './components/HomeComponents/About';
import Footer from './components/HomeComponents/Footer';
import Pricing from './components/HomeComponents/Pricing';
import Setup from './components/HomeComponents/SetupCard';
import ContactForm from './components/HomeComponents/contact/contact';
import './index.css';
import { Carousel } from 'bootstrap';
import plantation from './pages/plantation';
import Home from "./pages/Home";
import EmailVerified from "./pages/EmailVerified"
import Managemap from "./pages/Managemap";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main content */}
        <Route path='/' element={<MainContent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/emailVerification" element={<EmailVerified />} />
        <Route path="/managemap" element={<Managemap />} />
      </Routes>
    </Router>
  );
}

// MainContent component
const MainContent = () => (
  <>
    <Navbar />
    <div className='container'>
      <Hero />
      <About />
      <Setup />
      <Pricing />
    </div>
    <div className='ContactContainer'>
      <ContactForm />
    </div>
  </>
);