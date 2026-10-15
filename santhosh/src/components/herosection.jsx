import React from 'react'

import './herosection.css'
import pic1 from './image.png'

function herosection() {
  return (
    <>

    <section className='hero' id='about'>
      <h1 className='hero-head'>
        SanthoshPeriyasamy<br></br>
        Web<br></br>
        Developer
      </h1>

      <div className="experience">
        <p>Currently Pursing Mean Stack<br></br>
          Experiences at Tech Vedhu
        </p>
      
      </div>


    </section>


      <section className="projects" id="work">

      <h2 className="name1">SANTHOSH</h2>

      <div className="photo-stack">
        <img
          className="photo photo-one"
          src={pic1}
          alt="Portrait of a image"
        ></img>
      </div>

      <h2 className="name2">PERIYASAMY</h2>

    </section>
    
    
    
    
    </>
  )
}

export default herosection