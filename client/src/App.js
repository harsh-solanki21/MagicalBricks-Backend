import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Property from './components/property/Property'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='listproperty' element={<Property />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
