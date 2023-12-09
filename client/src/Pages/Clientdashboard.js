import React from 'react'
import './Clientdashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Menuiconcomonent from '../Components/Menuiconcomonent';
import userimg from '../Images/donieimg.jpg'
import { RxDashboard } from "react-icons/rx";
import { FaInfoCircle } from "react-icons/fa";
import { MdPayment,MdDriveFolderUpload } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { GrVirtualMachine } from "react-icons/gr";
function Clientdashboad(){
  return(
    <div className='client-dashboard-overall'>
    
      <h5 className='text-info container-fluid'>Dashboard</h5>
 
      <div className='container-fluid '>
    {/* this is reg information */}
      </div>
      <div className='container-fluid dashboad-welcome-div'>
        <p className='fs-5 text-success'>Welcome back Davis</p>
        <p>The current status of your project is <span className='bg-danger p-1 text-light'>Active</span> </p>
        <p>Current phase progress</p>
        <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'84%'}}>84%</div>
  </div>
      </div>
      <div className='money-display-container'>
        <div className='bg-warning p-2 text-light'style={{width:'max-content',margin:'auto'}}>First pay</div>
        <p className='fs-1'style={{textAlign:'center'}}>Balance</p>
        <p className='fs-3'style={{textAlign:'center'}}>Kes 20,000.00</p>
        <div className='pay-now-btn-div'>
          <button className='btn text-light bg-danger'type='button'>Pay now</button>
        </div>
      </div>
    </div>
  )
}



export default function Clientdashboard() {

 const [condition,Setcondition]=useState(false);
   return (
   <div className='overal-client-dashboard'>
        <header className='dashboard-header'>
        <div className='menu-icon-div'onClick={()=>Setcondition(!condition)}>   
             <Menuiconcomonent />
        </div>
        <div className='user-image-name'>
            <div className='user-dashboad-image '>        
            <img src={userimg} alt='image of user'className='rounded-circle'/>
            </div>
            <div className='user-name-dashboad'>
                <p className='h5'>Hi Ikou</p>
            </div>
        </div>
       </header>
       {
    condition && <div className='side-bar-section'>
       <div className='x-icon' onClick={()=>Setcondition(!condition)}>
     <IoClose className='fs-1'/>   
        </div>
      <div className='navigation-links'>  
           <ul className='list-unstyled nav-links-ul'>
         <li className='p-1'><span className='text-light'><RxDashboard className='fs-3'/></span><span className='text-light fs-6 p-2'>Dashboard</span></li>
         <li className='p-1'><span className='text-light'><FaInfoCircle className='fs-3'/></span><span className='text-light fs-6 p-2'>Personal info</span></li>
         <li className='p-1'><span className='text-light'><MdPayment className='fs-3'/></span><span className='text-light fs-6 p-2'>Payments</span></li>
         <li className='p-1'><span className='text-light'><MdDriveFolderUpload className='fs-3'/></span><span className='text-light fs-6 p-2'>Uploads</span></li>
         <li className='p-1'><span className='text-light'><TiMessages className='fs-3'/></span><span className='text-light fs-6 p-2'>Messages</span></li>
         <li className='p-1'><span className='text-light'><GrVirtualMachine className='fs-3'/></span><span className='text-light fs-6 p-2'>Virtual assistant</span></li>    
            <li></li>
        <li></li>
       <li></li>
         <li></li>
        <li></li>
      </ul>
      </div>
      </div>
       }
       <div className='dashboard-content'>
      <Clientdashboad/>
      </div>
             <footer>
       </footer> 
        </div>
   )
  
}
