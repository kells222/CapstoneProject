import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // dont forget to take off console pw
        console.log(password)
    }

  

  return (
<>

<div className="form-container">
    <h3>Login to account</h3>
    <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email' id='email' name='email' /> <br/>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/> <br/>
        <button type='submit'>Log me in!</button>
    </form>
    <Link to='/signup' className="link-btn">No account? Sign-up here</Link>
</div>
</>
  )
}

export default Login