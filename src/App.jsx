import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/css/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import Filter from './components/Filter';
// import { CartContext, CartProvider } from './components/Cart';
import Checkout from './components/Checkout';



function App() {
 const [token,setToken] = useState('')
 let imageStyle = {
  height: '200px',
  width: '1210px',
  backgroundImage:'url("./Image 9-17-23 at 6.59 PM.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  
 }

  return (
    <>
    <div className='headerImg' style={imageStyle}>
    <h1>Lovelyfy</h1> 
    </div>
    
    <NavBar/>
    {/* <CardHandle/> */}
    <Routes>
      <Route path='/filter' element={<Filter/>}/>
      <Route path='/' element={<Posts/>}/>
      <Route path='/home' element={<Posts/>}/>
      {/* <Route path='/checkout' element={<CartProvider/>} cartContext={<CartContext/>} /> */}
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login setToken={setToken}/>} />
      <Route path='/signup' element={<Signup token={token} setToken={setToken}/>} />

    </Routes>
      
    </>
  )
}

export default App
