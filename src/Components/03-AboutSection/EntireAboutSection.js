import React from 'react'
import AboutSection from './AboutSection'
import AbtHeroSection from '../03-AboutSection/AbtHeroSection'
import TechTicker from './TechThicker'
import TechUsageSection from './TechUsageSection'
import WhyVentora from './WhyVentora'



export default function EntireAboutSection() {
  return (
    <div>
      <AbtHeroSection/>
      <AboutSection/>
      <TechTicker/>
      <TechUsageSection/>
      <WhyVentora/>
    </div>
  )
}
