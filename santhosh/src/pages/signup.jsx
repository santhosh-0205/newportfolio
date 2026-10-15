import React from 'react'
import './styles/signup.css'
import { NavLink } from 'react-router-dom'

function signup() {
  return (
    <>

     <div className='box'>
        <h1>Signup</h1>

        <input type="text" placeholder='Enter your name' className='name'/>



        <div>
            <input type="email" placeholder='Enter email id' className='email' />
        </div>

        <div>
            <input type="password" placeholder='Enter your password' className='pass' />
        </div>
        <p className='para'>you don't have an account? <NavLink to = "/Login">login</NavLink></p>

        <a href="" id='btn-a'><button className='signup-btn'>Signup</button></a>




    </div>
    
    
    
    
    
    </>




  )
}

export default signup