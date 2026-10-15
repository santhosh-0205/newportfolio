import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/login.jsx'
import Signup from './pages/signup'
import Home from './home.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>


     </Routes>
    </BrowserRouter>
  )
}

export default App
