import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function Login({setToken}) {
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    // const [successMessage,setSuccessMessage] = useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(user);
      // // dont forget to take off console pw
      // console.log(password);
      
      try { 
        const response = await axios.post(`https://fakestoreapi.com/auth/login`, {
          username: user,
          password: password
        });
        
        const result = response.data;
        setToken(result.token);
        console.log(result);
        
        // setSuccessMessage('Logged in successfully');
        

        navigate('/');
        
        
      } catch (error) {
        console.error('could not login', error);
        // setSuccessMessage('');
      }
    }
    

    
    return (
      <>

  <div className="form-container">
    <h3>Login to account</h3>
    <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='Your Username' id='user' name='username' /> <br/>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/> <br/>
        <button type='submit' >Log me in!</button>
    </form>
    {/* {successMessage && <p className="success-message"> {successMessage} </p>} */}
    <Link to='/signup' className="link-btn">No account? Sign-up here</Link>
  </div>

</>
  )
}


export default Login