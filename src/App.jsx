import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/css/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
 

  return (
    <>
    <h1>Capstone</h1>
    <NavBar/>
    
    <Routes>
      

      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
      
    </>
  )
}

export default App
