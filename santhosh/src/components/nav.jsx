import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.css'

function nav() {
  return (
    <div className='navbar-main'>

      <div className='navbar-locked'>

        <nav id='navbar'>

        <h2 className='head'>SanthoshPeriyasamy</h2>

        <ul id='nav-content'>
            <li><NavLink to ="/">Home</NavLink></li>
          <li><NavLink to ="/About" className=''>About</NavLink></li>
          <li><a href=''> Project</a></li>
          <li> <NavLink to ="/Contact" className=''>Contact</NavLink></li>
          
        </ul>
       <NavLink to="/login" className='nav-btn'>Login</NavLink>



      </nav>
      </div>
    </div>
  )
}

export default nav