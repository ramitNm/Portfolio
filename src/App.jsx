import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './portfolio/portfolio'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './portfolio/about'
import Contact from './portfolio/contact'
import Services from './portfolio/services'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className='port_1'>
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
