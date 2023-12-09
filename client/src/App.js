import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Homescreen from './Pages/Homescreen';
import Aboutscreen from './Pages/Aboutscreen';
import Servicesscreen from './Pages/Servicesscreen';
import Contactscreen from './Pages/Contactscreen';
import Openaccount from './Pages/Openaccount';
import Clientdashboard from './Pages/Clientdashboard';
import Login from './Pages/Login';
import Navbar from './Components/UI/Navbar';
import Footercomponent from './Components/UI/Footercomponent';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={<Homescreen/>}/>
      <Route path='/services' element={<Servicesscreen/>}/>
      <Route path='/about' element={<Aboutscreen/>}/>
      <Route path='contact' element={<Contactscreen/>}/>
      <Route path='openaccount'element={<Openaccount/>}/>
     </Routes>
     <Footercomponent/>
    </div>
     
  );
}

export default App;
