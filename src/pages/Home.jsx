import React from 'react'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Stats from '../components/Stats'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <Section1/>
        <Section2/>
        <Stats />
        <Section3/>
        <Section4/>
        <Footer />
    </div>
  )
}

export default Home