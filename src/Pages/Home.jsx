import React from 'react'
import Delivery from '../Components/Delivery/Delivery'
import Footer from '../Components/Footer/Footer'
import MainSection from '../Components/MainSection/MainSection'
import Service from '../Components/Services/Service'

function Home() {
  return (
    <>
      <MainSection/>
      <Delivery/>
      <Service/>
      <Footer/>
    </>
  )
}

export default Home