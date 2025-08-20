import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router'
import Events from './components/Events'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import EventDetailsPage from './components/EventDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/eventdetails' element={<EventDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App