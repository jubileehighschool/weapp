import React from 'react'
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='Home'>
    <div className='left'>
    <h1>A place to dream,learn and achive.</h1>
    <h4> Empowering students through the excellence of our teachers. </h4>
    <button className='leftButton'>Know More</button>
    </div>
    <div className='right'>

    </div>
    </div>

    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page6/>
    <Page7/>
    <Page8/>
    <div className='footer'>
    <Page5/>
    </div>
    
    </>
    
  )
}

export default Home;