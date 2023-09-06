import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Generate from './Generate'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Generate/>
    </div>
  )
}

export default Home