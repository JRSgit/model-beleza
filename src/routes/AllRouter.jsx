import React from 'react'
import { Routes, Route } from 'react-router-dom'


import { About } from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import { Home } from '../pages/home/Home'
import { Primary } from '../pages/primary/Primary'
import Swipers from '../components/swiper/Swiper'


function AllRouter() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/primary' element={<Primary />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/swiper' element={<Swipers />} />
    </Routes>
  )
}

export { AllRouter }
