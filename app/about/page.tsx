import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/TestimonialSection'
import { Separator } from '@base-ui/react'
import CTA from "@/components/CTASection"

const page = () => {
  return (
    <div>
        <Navbar/>
        <Separator/>
        <Testimonials/>
        <Separator/>
        <CTA/>
        <Separator/>
        <Footer/>
    </div>
  )
}

export default page