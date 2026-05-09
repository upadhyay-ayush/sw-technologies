import AboutPage from '@/components/about/about'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  )
}

export default page
