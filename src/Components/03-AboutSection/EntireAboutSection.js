import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from '../homepage/HeroSection'
import ServicesSection from './ServiceSection'
import TechTicker from './TechThicker'
import TechUsageSection from './TechUsageSection'
import WhyVentora from './WhyVentora'



export default function EntireAboutSection() {
  return (
    <div>
      <AboutSection/>
      <HeroSection/>
      <ServicesSection/>
      <TechTicker/>
      <TechUsageSection/>
      <WhyVentora/>
    </div>
  )
}
