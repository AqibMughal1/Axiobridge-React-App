import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Threecards from './Threecards'
import Ourclients from './Ourclients'
import Toolcard from './Toolcard'
import Services from './Services'
import Whyus from './Whyus'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Whyus/>
        <Threecards/>
        <Toolcard/>
        <Services/>
        <Ourclients/>


    </div>
  )
}

export default Home