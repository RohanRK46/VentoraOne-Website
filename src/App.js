import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Navbar from './Components/navbar/Navbar';
import ScrollToTop from './Components/ScrolltoTop';

const HeroSection = lazy(() => import('./Components/homepage/HeroSection'));
const Services = lazy(() => import('./Components/services/Services'));
const Service2 = lazy(() => import('./Components/service2/Service2'));
const Whychoseventora = lazy(() => import('./Components/why-chose-ventora/Whychoseventora'));
const Footer = lazy(() => import('./Components/footer/Footer'));
const CloudSecurity = lazy(() => import('./Components/01-CloudSecurty/CloudSecurity'));
const NetworkDesign = lazy(() => import('./Components/02-Network Design/NetworkDesign'));
const ServiceBookingForm = lazy(() => import('./Components/service-booking-form/ServiceBookingForm'))

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>}>

        <Routes>

          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <Services />
                <Service2 />
                <Whychoseventora />
              </>
            } 
          />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<div>Contact Page</div>} />

          <Route path="/technologies" element={<div>Technologies Page</div>} />

          <Route path="/CloudSecurity" element={ <CloudSecurity /> } />

          <Route path="/NetworkDesign" element={ <NetworkDesign/> } />

          <Route path="/ServiceBookingForm" element = { <ServiceBookingForm/> } />

        </Routes>

        <Footer
          ContactNo="8128183840"
          Email="blablabla@gmail.com"
          Address="Sunmilan Complex flat number 403 bla bla bla bla"
        />

      </Suspense>
    </>
  );
}

export default App;