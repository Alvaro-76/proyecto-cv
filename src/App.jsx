import { useState } from 'react'

import './App.css'
import MainLayout from './layouts/MainLayout'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <div className="notebook-page">
      <Header />
      <div className="notebook-content">
        <div className="notebook-circles"></div>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="Experience" element={<Experience />} />
            <Route path="Education" element={<Education />} />
            <Route path="Skills" element={<Skills />} />          
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>  
    </div>
    </>
  )
}

export default App
