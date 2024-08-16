import React from 'react'
import Home from './home/home';
import { Route, Routes } from "react-router-dom"
import Courses from './courses/courses';
import Signup from './comonent/Signup';
function App() {
  return (
    <>
    <Routes >
      <Route path='/' element={<Home/>}/>      
      <Route path='/course' element={<Courses/>}/> 
      <Route path='/signup' element={<Signup/>}/>      
    </Routes>

    </>
  )
}

export default App