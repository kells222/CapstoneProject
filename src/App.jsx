import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/css/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import Filter from './components/Filter';


function App() {
 const [token,setToken] = useState('')

  return (
    <>
    <h1>Lovelyfy</h1>
    <NavBar/>
    {/* <CardHandle/> */}
    <Routes>
      <Route path='/filter' element={<Filter/>}/>
      <Route path='/' element={<Posts/>}/>
      <Route path='/home' element={<Posts/>}/>
      <Route path='/login' element={<Login setToken={setToken}/>} />
      <Route path='/signup' element={<Signup token={token} setToken={setToken}/>} />

    </Routes>
      
    </>
  )
}

export default App
