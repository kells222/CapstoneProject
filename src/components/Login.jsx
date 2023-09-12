import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";



function Login() {
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // dont forget to take off console pw
        console.log(password)
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
        <button type='submit'>Log me in!</button>
    </form>
    <Link to='/signup' className="link-btn">No account? Sign-up here</Link>
</div>
</>
  )
}

export default Login