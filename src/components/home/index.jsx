import React from 'react'
import './index.css';
import 'animate.css';

import Footer from '../footer';


function Home() {
  return (
    <div>

      <div className='Container'>
        <div className='headingContainer'>
          <h1 className='animate__animated animate__backInDown animate__delay-0.6s'>Hello, I AM ABDUL AHAD</h1>
          <h3 className='animate__animated animate__backInRight animate__delay-0.6s'>A MERN STACK DEVELOPER AND DESIGNER</h3>
        </div>
        <div className='imgContainer'>
          <img src="https://plus.unsplash.com/premium_vector-1734127305687-4440bad6d7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt="img" />
        </div>
        <div className='buttonContainer'>
          <button id='btn'>Contact ME</button>
          <button id='btn'>About ME</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home
