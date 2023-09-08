import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Threecards from './Threecards'
import Ourclients from './Ourclients'
import Toolcard from './Toolcard'
import Services from './Services'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Threecards/>
        <Toolcard/>
        <Services/>
        <Ourclients/>

    </div>
  )
}

export default Home