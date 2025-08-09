import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App