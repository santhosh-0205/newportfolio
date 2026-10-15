import React from 'react'
import './styles/contact.css'
import Nav from '../components/nav'

function contact() {
  return (
    <>
    <Nav/>
    <section className='contact-container'>

        <div className='contact-info'>

                <h1>Say Hello.</h1>

            <div className="info-block">
                <h4>TECHVEDHU</h4>
                <p>
                    Bhommi Flims<br></br>
                    near NexusMall<br></br>
                    Koramangala
                </p>
            </div>

            <div className="info-block">
                <h4>EMAIL</h4>
                <p>SanthoshPeriyasamy@gmail.com</p>
            </div>

            <div className="info-block">
                <h4>PHONE</h4>
                <p> 6380110420</p>
            </div>
        </div>

        <div  className='contact-form'>
            <form action="">

                <input
                    type="text"
                    placeholder="Name"
                    required
                ></input>

                 <input
                    type="email"
                    placeholder="Email"
                    required
                ></input>

                 <input
                    type="text"
                    placeholder="Subject"
                    required
                ></input>

                  <textarea
                    placeholder="Message"
                    required
                ></textarea>

                <button type="submit">
                    SEND MESSAGE
                </button>


            </form>

             
        </div>
    </section>
    
    
    </>
  )
}

export default contact