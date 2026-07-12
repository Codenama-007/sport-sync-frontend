import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from '@/components/HeroSection'
import { Separator } from '@base-ui/react'
import Features from '@/components/FeatureSection'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Separator/>
      <Features/>
      <Separator/>
      <Footer/>
    </div>
  )
}

export default page