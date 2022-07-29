import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' >
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)} >
            <li >
              <Link to='/' style={{color:'green'}}>Home</Link>
            </li>
            <li>
              <Link to='/courses'style={{color:'green'}}>All Courses</Link>
            </li>
            <li>
              <Link to='/about'style={{color:'green'}}>About</Link>
            </li>
            <li>
              <Link to='/team'style={{color:'green'}}>Team</Link>
            </li>
            <li>
              <Link to='/pricing'style={{color:'green'}}>Pricing</Link>
            </li>
            <li>
              <Link to='/journal' style={{color:'green'}}>Journal</Link>
            </li>
            <li>
              <Link to='/contact'style={{color:'green'}}>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'style={{color:'green'}}>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
