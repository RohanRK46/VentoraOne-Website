import React, { useRef } from 'react'
import AboutSection from './AboutSection'
import AbtHeroSection from '../03-AboutSection/AbtHeroSection'
import TechTicker from './TechThicker'
import WhyVentora from './WhyVentora'
import SupportSection from './SupportSection'
import CheckOutOtherServices from '../CheckOutOtherServices/CheckOutOtherServices'

export default function EntireAboutSection() {
  const servicesRef = useRef(null)

  return (
    <div>
      <AbtHeroSection onExploreServices={() => servicesRef.current?.open()} />
      <AboutSection/>
      <TechTicker/>
      <SupportSection/>
      <WhyVentora/>
      <CheckOutOtherServices ref={servicesRef} currentRoute="/about" />
    </div>
  )
}