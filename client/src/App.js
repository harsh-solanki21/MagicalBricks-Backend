import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/auth/Profile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Property from './components/property/Property'
import AllProperties from './components/property/propTypes/AllProperties'
import Rental from './components/property/propTypes/Rental'
import Buy from './components/property/propTypes/Buy'
import ReadyToMoveIn from './components/property/propTypes/ReadyToMoveIn'
import TopProjects from './components/property/propTypes/TopProjects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='listproperty' element={<Property />} />
          <Route path='allproperties' element={<AllProperties />} />
          <Route path='rental' element={<Rental />} />
          <Route path='buy' element={<Buy />} />
          <Route path='readytomovein' element={<ReadyToMoveIn />} />
          <Route path='topprojects' element={<TopProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
