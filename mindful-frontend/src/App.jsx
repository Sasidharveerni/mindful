import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router'
import Events from './components/Events'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App