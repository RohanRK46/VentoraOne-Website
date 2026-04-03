import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Navbar from './Components/navbar/Navbar';
import ScrollToTop from './Components/ScrolltoTop';

const EntireAboutSection = lazy(() => import('./Components/03-AboutSection/EntireAboutSection'));
const HeroSection = lazy(() => import('./Components/homepage/HeroSection'));
const Services = lazy(() => import('./Components/services/Services'));
const Service2 = lazy(() => import('./Components/service2/Service2'));
const Whychoseventora = lazy(() => import('./Components/why-chose-ventora/Whychoseventora'));
const Footer = lazy(() => import('./Components/footer/Footer'));
const CloudSecurity = lazy(() => import('./Components/01-CloudAndHybridSecurity/CloudAndHybridSecurity'));
const NetworkDesign = lazy(() => import('./Components/02-Network Design/NetworkDesign'));
const ServiceBookingForm = lazy(() => import('./Components/service-booking-form/ServiceBookingForm'));
const VentoraOneSupport = lazy(() => import('./Components/00-VentoraOneSupport/SupportHero'))
const OurProcess = lazy(() => import('./Components/OurProcessSection/OurProcess'))
const FireWallSecurity = lazy(() => import('./Components/04-FireWallSecurity/FireWallSecurity'))
const BackUpAndRecovery = lazy(() => import('./Components/05-BackUpAndRecovery/BackUpAndRecovery'))

function App() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>}>

      <Navbar />
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Service2 />
              <Whychoseventora />
              <OurProcess/>
            </>
          }
        />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<div>Contact Page</div>} />

        <Route path="/technologies" element={<div>Technologies Page</div>} />

        <Route path="/ServiceBookingForm" element={<ServiceBookingForm />} />

        <Route path="/VentoraOneSupport" element={<VentoraOneSupport/>} />

        <Route path="/AboutSection" element={<EntireAboutSection/>} />

        <Route path="/CloudSecurity" element={<CloudSecurity />} />

        <Route path="/NetworkDesign" element={<NetworkDesign />} />

        <Route path="/FireWallSecurity" element={<FireWallSecurity/>} />

        <Route path="/BackUpAndRecovery" element={<BackUpAndRecovery/>} />

      </Routes>

      <Footer/>

    </Suspense>
  );
}

export default App;