import React from 'react'
import './index.css'


function Contact() {
  return (
    <div className='container'>
      <div>
        <h1 className='heading'>Contact Me</h1>
      </div>

      <div class="parent">
        <div class="div1">
          <h3>Get in touch</h3>
          <br />
          <strong className='Tag'>Phone: 123-456-78</strong>
          <br />
          <strong className='Tag'>Email:</strong>
          <a href="hello" style={{display:"inline"}}>xyz.com</a>
          <br />
          <br />
          <p>Contact me and I respond qucikly!
            "Have a project in mind or just want to connect? I'm always open to discussing MERN stack development, collaboration, or freelance opportunities."
          </p>
        </div>
        <div class="div2">
          <input type="text"  id="name"  placeholder='Name'/>
          <input type="email"  id="email" placeholder='Email' />
          <textarea  id="textarea" placeholder='Message'></textarea>
          <button id='button'>Send</button>
        </div>
      </div>

       
    </div>
  )
}

export default Contact
