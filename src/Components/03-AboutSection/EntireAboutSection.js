import React from 'react'
import AboutSection from './AboutSection'
import AbtHeroSection from '../03-AboutSection/AbtHeroSection'
import TechTicker from './TechThicker'
import WhyVentora from './WhyVentora'
import SupportSection from './SupportSection'



export default function EntireAboutSection() {
  return (
    <div>
      <AbtHeroSection/>
      <AboutSection/>
      <TechTicker/>
      <SupportSection/>
      <WhyVentora/>
    </div>
  )
}
