import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Threecards from './Threecards'
import Ourclients from './Ourclients'
import Toolcard from './Toolcard'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Threecards/>
        <Toolcard/>
        <Ourclients/>
    </div>
  )
}

export default Home