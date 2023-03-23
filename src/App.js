import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Page3 from './components/Page3';
import Page4 from './components/Page4';


function App() {
  return (
    <Router>    
    <div className= 'App' >
    
    <Routes>
      <Route path='/' element={<div className='home'><Page4/></div>}/>
      
    </Routes>
    
    
    </div>
    </Router>
  );
}

export default App;
