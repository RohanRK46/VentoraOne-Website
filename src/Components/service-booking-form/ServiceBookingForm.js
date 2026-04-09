import React from 'react'
import BookingForm from './Sections/BookingForm'
import HeroSection from './Sections/HeroSection'
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";
import SupportBF from './Sections/SupportBF';

export default function ServiceBookingForm() {
  return (
    <div>
      <HeroSection/>
      <SupportBF/>
      <BookingForm/>
      <CheckOutOtherServices/>
    </div>
  )
}
