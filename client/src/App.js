import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Aboutscreen from './Pages/Aboutscreen';
import Servicesscreen from './Pages/Servicesscreen';
import Contactscreen from './Pages/Contactscreen';
import Openaccount from './Pages/Openaccount';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Navbar from './Components/UI/Navbar';
import Footercomponent from './Components/UI/Footercomponent';
import Homepage from './Pages/Homepage';

import { useState,useEffect } from 'react';

function App() {
  return (
<div className="App">
 <Routes>
  <Route path='login' element={<Login/>}/>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/client-winkywebbers' element={<Homepage/>}/>
  <Route path='/services' element={<Servicesscreen/>}/>
  <Route path='/about' element={<Aboutscreen/>}/>
  <Route path='contact' element={<Contactscreen/>}/>
  <Route path='openaccount'element={<Openaccount/>}/>
  <Route path='/personalaccount'element={<Dashboard/>}/>
 </Routes>
</div>
     
  );

}

export default App;
