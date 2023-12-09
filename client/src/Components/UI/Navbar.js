import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Usercomponentbtn from '../Usericonbtncomponent';
import './Navbar.css';
import Companyname from '../Companyname';
import Menuiconcomonent from '../Menuiconcomonent';
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    var [mount,Setmount]=useState(false);
    var [active,Isactive]=useState();
    var activehome=false;
    var activeservice=false;
    var activeabout=false;
    var activecontact=false;
    const handleevent=(element)=>{
    Setmount(mount=>!mount)
    let statusarray=[true,false,false,false];
    if(element=='home'){
    //  isactive(active=>statusarray[0]);
     activehome=true;
     activeservice=false;
    activeabout=false;
     activecontact=false;
    }
    else if(element=='services'){
    // var activeservice=isactive(active=>statusarray[1]);
         activehome=false;
      activeservice=true;
     activeabout=false;
     activecontact=false;
    }
    else if(element=='about'){
    // var activeabout=isactive(active=>statusarray[2]);
         activehome=false;
      activeservice=false;
     activeabout=true;
     activecontact=false;
    }
    else if(element=='contact'){
    // var activecontact=isactive(active=>statusarray[3]);
         activehome=false;
      activeservice=false;
     activeabout=false;
     activecontact=true;
    }
    }
   
  return (
    <div className='navbar-ui-component-overall'>
        
        <div className='callnow-top-section'>
            CALL NOW +254758420860
        </div>


        <div className='logo-menulinks-icons-section'>
            <div className='company-name'>
             <Companyname/>
            </div>
            <div className='menu-user-icon-container'>
            <nav>
           <Link  to='/login'> 
           <div className='home-user-icon'>
           <Usercomponentbtn />
            </div>
            </Link>
            </nav>
            <div className='home-menu-icon'onClick={()=>Setmount(!mount)}>
                <Menuiconcomonent/>
            </div>
            </div>
        </div>

        

        { mount &&  <div className='side-bar-homepage-section'>
        <div className='close-hmpg-btn ' onClick={()=>Setmount(!mount)}><IoMdClose className='fs-4' /></div>
        <ul className='list-unstyled hmpg-side-links'>
            <li className={activehome?'hmpg-active':''} onClick={()=>handleevent('home')}><Link className='text-decoration-none text-dark fs-6 ' to='/'>Home</Link></li>
            <li className={activeservice?'hmpg-active':''} onClick={()=>handleevent('services')}><Link className='text-decoration-none text-dark fs-6'to='/services'>Services</Link></li>
            <li className={activeabout?'hmpg-active':''}onClick={()=>handleevent('about')}><Link className='text-decoration-none text-dark fs-6' to='/about'>About</Link></li>
            <li className={activecontact?'hmpg-active':''}onClick={()=>handleevent('contact')}><Link className='text-decoration-none text-dark fs-6'to='/contact'>Contact</Link></li>
            
        </ul>
    </div>
}
</div>

        
  )
}
