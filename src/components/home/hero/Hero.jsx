import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row' style={{color:"green"}}>
            <Heading subtitle='WELCOME TO Esoftpc' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries.</p>
            <div className='button'>
              <button className='primary-btn'>
                Get Started Now <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                View Course <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
