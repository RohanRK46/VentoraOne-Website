import React from 'react'
import BookingForm from './Sections/BookingForm'
import HeroSection from './Sections/HeroSection'
import CheckOutOtherServices from "../CheckOutOtherServices/CheckOutOtherServices";

export default function ServiceBookingForm() {
  return (
    <div>
      <HeroSection/>
      <BookingForm/>
      <CheckOutOtherServices/>
    </div>
  )
}
