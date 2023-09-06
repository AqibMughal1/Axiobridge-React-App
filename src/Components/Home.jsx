import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Threecards from './Threecards'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Threecards/>
    </div>
  )
}

export default Home