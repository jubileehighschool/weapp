import React from 'react'
import "./Page2.css"
import baground from "./images/bg.PNG"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Page2() {
  return (
    <div className='page2'>


    <div className='page2_body' >
    
    
    <div className='page2_left'>
    <h1>WHY CHOOSE US?</h1>
    <h2><span>Inspirng </span>minds,<span> shaping </span></h2>
    <h2 className='textPage2'> future - OUR teachers make it happen.</h2>
    <ul>
      <li className='shadow-effect'> <CheckCircleIcon fontSize="small"/> Intensive Learning</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Audio -visual Learning For Pre-Primary</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Individual Attention</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Remedial Classes for Slow Learners</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Co-Curricular Activities</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> SSC Curriculum</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Teachers Student Ratio 1:20</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Basic Language Skills OF Englsh & Arabic </li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> Strong Arabic Language Curriculum</li>
      <li className='shadow-effect'> <CheckCircleIcon fontSize='small'/> All Round Personality Grooming</li>
      </ul>
      <button className='button' >ENROLL NOW</button>
    </div>
    
    
    <div className='page2_right'>
    <img className='box' src='https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80'
    alt='schools hyderabad' />
    </div>
    
    </div>
    </div>
  )
}

export default Page2;