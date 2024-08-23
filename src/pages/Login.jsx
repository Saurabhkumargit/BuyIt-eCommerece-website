import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    navigate('/');
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center mx-10 my-5'>
       <div className='items-center'>
        <p>{currentState}</p>
       </div>
       {currentState === 'Login' ? '' : <input className='' type="text" placeholder='Name' required/>}
       <input className='' type="email" placeholder='Email' required/>
       <input className='' type="password" placeholder='Password' required/>

       <div>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
       </div>
       <button type="submit">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login;
