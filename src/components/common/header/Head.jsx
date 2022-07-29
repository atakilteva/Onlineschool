import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1 style={{color:'green', fontFamily:'Times New Roman", Times, serif'}}>Esoftpc</h1>
            <span style={{color:'green'}}>Online School</span>
          </div>

          <div className='social' style={{color:'green'}}>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
