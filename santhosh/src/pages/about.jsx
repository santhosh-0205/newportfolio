import React from 'react'
import './styles/about.css'
import Nav from '../components/nav'
import Resume from '../pages/resume.pdf'
import Aboutpic from './techvedhu.webp'


function about() {
    return (
        <>
           <Nav/>
            <section className="about-header" >

              
  

                <div className="header-left">
                   

                    <h1 className='about-head-content'>
                        Empower Your Business’s<br></br>
                        Financial Future Effortlessly
                    </h1>

                    <a href={Resume} download={Resume} ><button className="about-btn">Get Started</button></a>
                </div>

                <div className="header-right">
                    <p>
                        Take control of your business's financial future
                        with effortless strategies that ensure stability
                        and growth. Empower your decisions with expert
                        insights, streamlining your path to long-term
                        success. Focus on what matters most—growing
                        your business.
                    </p>
                </div>

                <div>


                    <div className="story-card">
                        <img src={Aboutpic}alt=" about-pic"  className='story-card-pic'/>
                       

                        <div className="story-overlay">
                            <h3>Our Story</h3>
                            <p>
                                Techninnovate, a leading IT company,
                                revolutionizes the industry with cutting-edge
                                AI solutions, driving innovation and
                                connectivity for businesses worldwide.
                            </p>
                        </div>


                    </div>
                    
                </div>
                

                        
                            <div class=" mission">
                                <h3>Our Mission</h3>
                                <p>
                                    To deliver innovative IT solutions
                                    that empower businesses.
                                </p>
                            </div>

                            <div class=" vision">
                                <h3>Our Vision</h3>
                                <p>
                                    To lead in technology and shape a smarter,
                                    more connected future.
                                </p>
                            </div>
                        
            </section>
        </>
    )
}

export default about