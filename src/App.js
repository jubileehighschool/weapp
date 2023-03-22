import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
function App() {
  return (
    <Router>    
    <div className= 'App' >
    
    <Routes>
      <Route path='/' element={<div className='home'><Navbar/><Home/></div>}/>
      
    </Routes>
    
    
    </div>
    </Router>
  );
}

export default App;
