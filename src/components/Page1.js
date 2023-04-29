import React from 'react'
import cover from "./images/cover.png"
import "./Page1.css"
import Carousel from 'react-elastic-carousel';
import Item from './Item';
function Page1() {
  return (
    
    <div className='Home'>
    <Carousel itemsToShow={1}>
    <Item>
    <div className="Carousel">
    <div className='left'>
    <h1>A place to dream, learn and achive.</h1>
    <p> Empowering students through the excellence of our teachers. </p>
    <button className='leftButton'>Know More</button>
    </div>
    <div className='right'>
    <img src={cover} alt= "school" />
    </div>
    </div>
    </Item>
    
    <Item>
    <div className="Carousel">
    <div className='left'>
    <h1>Learning today, leading tomorrow.</h1>
    <p> The future starts here. </p>
    <button className='leftButton'>Know More</button>
    </div>
    <div className='right'>
    <img src={cover} alt= "school" />
    </div>
    </div>
    </Item>
   
   <Item>
    <div className="Carousel">
    <div className='left'>
    <h1>Igniting a passion for learning</h1>
    <p> Discovering the joy of learning. </p>
    <button className='leftButton'>Know More</button>
    </div>
    <div className='right'>
    <img src={cover} alt= "school" />
    </div>
    </div>
    </Item>

    </Carousel>



    

    
    
    
    </div>

  )
}

export default Page1