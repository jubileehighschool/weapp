import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page6 from './components/Page6';


function App() {
  return (
    <Router>    
    <div className= 'App' >
    
    <Routes>
      <Route path='/' element={<div className='home'><Page6/></div>}/>
      
    </Routes>
    
    
    </div>
    </Router>
  );
}

export default App;
