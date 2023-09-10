import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';


function Signup() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
<div className="form-container">
    <h3>Sign-up for account</h3>
    <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email' id='email' name='email' /> <br/>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/> <br/>
        <button type='submit'>Sign me up!</button>
    </form>
    <Link to='/login' className="link-btn">Already have an account? Login here.</Link>
</div>  
  )
}

export default Signup