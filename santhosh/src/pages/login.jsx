import React from 'react'
import './styles/login.css'

import { NavLink } from 'react-router-dom'

function login() {
  return (
   
    <>
    <div className='box'>
        <h1>Login</h1>
        <input type="email" placeholder='Enter email id' className='email' />

        <div>
            <input type="password" placeholder='Enter your password' className='pass' />
        </div>
        <p className='para'>you don't have an account? <NavLink to ="/signup" target='blank'>create an account</NavLink></p>

        <a href="" id='login-btn'><button className='login-btn' >Login</button></a>

    </div>
    
         
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default login