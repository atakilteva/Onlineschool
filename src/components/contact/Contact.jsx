import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://maps.google.com/maps?q=addis%20ababa%20laphto&t=&z=15&ie=UTF8&iwloc=&output=embed '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          
            <iframe style={{width:"100%",height:"550px"}} src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>Address:</h4>
                <p>Bole, Addis Ababa</p>
              </div>
              <div className='box'>
                <h4>Email:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>Phone:</h4>
                <p> +2519-----</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>Send Message</button>
            </form>

            <h3>Follow us here</h3>
            <span>Facebook,Twitter, Instagram</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
