import React from 'react';
import LinearWithValueLabel from './bar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'
// import { colors } from '@mui/material';
import { useEffect } from 'react';




function About() {
  
  return (
    <div>
      <div className='container'>
        <div className="container1">
          <h1 className='heading'>About</h1>
          <div className='aboutMe'>
            <h3 className='' >About Myself</h3>
            <p className='paragraph'>I am a passionate developer with a love for creating dynamic web applications in React , MongoDb and Node Js.My journey in web development has been exciting and never ending.</p>
          </div>

          
          <div className="skills">
            <h3>Skills</h3>
            <div>
              <Box sx={{ width: '100%', p: 2 }}>
                <Typography variant="h6" className='progressHeading'>JavaScript</Typography>
                <div className='bars'>

                <LinearWithValueLabel target={60} />
                </div>

                <Typography variant="h6" className='progressHeading'>React</Typography>
                <LinearWithValueLabel target={70}  />

                <Typography variant="h6" className='progressHeading' >CSS</Typography>
                <LinearWithValueLabel target={80} />
                <Typography variant="h6" className='progressHeading'>Html</Typography>
                <LinearWithValueLabel target={90} />
                <Typography variant="h6" className='progressHeading'>Git & Github</Typography>
                <LinearWithValueLabel target={75} />
              </Box>
            </div>


          </div>
          <div className="services">
            <h3>Services</h3>
            <div className='servicesContainer'>
              <div className="serviceCont">
                <h4>Website</h4>
                <p className='paragraph'>I build full-stack web applications using MongoDB, Express, React, and Node.js.
                  I create responsive, user-friendly websites that are fast, scalable, and tailored to client needs.
                  From frontend design to backend development, I handle every step of the web development process..</p>
              </div>
              <div className="serviceCont">
                <h4>Application</h4>
                <p className='paragraph'>I design and develop custom applications that solve real-world problems efficiently.
                  Each app is built with performance, scalability, and user needs in mind.
                  From planning to deployment, I ensure a smooth and reliable application experience.</p>
              </div>
              <div className="serivceCont">
                <h4>UI & UX Design</h4>
                <p className='paragraph'>
                  I create clean, intuitive interfaces that prioritize user experience and accessibility.
                  Using wireframes, prototypes, and user feedback, I refine every interaction.
                  My goal is to make digital experiences simple, engaging, and visually appealing.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About
