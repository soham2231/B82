// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Users from './Components/Users'
import { Receipes } from './Components/Receipes'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/user' element={<Users/>}></Route>
      <Route path='/receipe' element={<Receipes/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
