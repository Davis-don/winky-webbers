import React, { useState } from 'react'
import './Dashboard.css'
import { IoIosMenu,IoIosClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'
import userimg from '../Images/donieimg.jpg'
import { FaHome,FaFileContract } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa6";
import { AiTwotoneMessage } from "react-icons/ai";
// import bgimg from '../Images/pexels-codioful-(formerly-gradienta)-6985260.jpg'

function Clientdisplay(){
    const [sidebar,Setsidebar]=useState(false);
    function Headersection(){
        //const [clients,Setclients]=useState(false);
  
    return(
        <div className='overall-header-section'>
       <div className='left-header-section p-3' onClick={()=>Setsidebar(true)}>
       <IoIosMenu className='fs-1 text-light'/>
       </div>
       <div className='right-header-section p-1'>
       <div className='user-name-holder'>
          <p className='p-2 text-light fs-6'>Ikou Davis</p>
        </div>
        <div className='profile-picture'>
         <img src={userimg}alt='image of account owner'className='rounded-circle'/>
        </div>
       </div>
        </div>
    )
    }

     function FirstLinkContent(){
        return(
            <div className='first-link-overall'style={{backgroundImage:'url(bgimg)'}}>
                
                <h4 style={{marginLeft:'20px'}}className='text-light'>Dashboard</h4>
                <div className='welcome-screen p-2'>
                    <h6 className='text-light'style={{textAlign:'center'}}>Welcome back Davis</h6>
                <p className='text-light'style={{textAlign:'center'}}>The current status of your service is  <span className='status-sec p-1 text-light'>Inactive</span></p>
               <p style={{textAlign:'center'}} className='text-light'> Please finish the registration process below.</p>
               <div className='progress-status'>
                <p className='text-light'>Progress metric</p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'40%'}}>40%</div>
                   </div>
               </div>
              </div>
              <div className='service-reg-container p-3'>
               <p className='text-light' style={{textAlign:'center'}}>Provide us with detailed information about your website.It will enable us understand your 
               requirements in depth.</p>
               <div style={{width:'max-content',margin:'auto'}}>
               <button className='btn btn-large proj-reg-btn text-light'type='button'>Tell us more</button>
               </div>
              </div>
              <div className='financials'>
                   <p className='text-light'style={{textAlign:'center'}}>Phase 0/0</p>
                   <p style={{textAlign:'center'}} className='text-light'>Fee balance</p>
                   <div className='overall-pay-div'>
                    <div>
                   <h6 style={{textAlign:'center'}} className='text-light'>Paid:</h6>
                   <h4 style={{textAlign:'center'}} className='text-danger'><sup><small>KES</small></sup>20,000</h4>
                   </div>
                   <div>
                   <h6 style={{textAlign:'center'}} className='text-light'>Balance</h6>
                   <h4 style={{textAlign:'center'}} className='text-danger'><sup><small>KES</small></sup>10,000</h4>
                   </div>
                   </div>
                   <div className='pay-btn'>
                    <button type='button' className='btn bg-success btn-large text-light'>Pay now</button>
                   </div>
              </div>
              <div className='a-o-b'>
               <p className='text-light'>Say something about our services,upgrade we should make on our system or improvent on our services</p>

               <label for="browser" class="form-label text-light">Choose your category</label>
    <input class="form-control" list="browsers" name="browser" id="browser"/>
    <datalist id="browsers">
      <option value="Teastimonial"/>
      <option value="System upgrade"/>
      <option value="Service improvement"/>
      <option value="Others"/>
    </datalist> 



               <div class="mb-3 mt-3">
      <label className='text-light'for="comment">Comments:</label>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              
            </div>
        )
     }
      
     function Serviceslink(){
        


        return(
            <div className='overall-service-link'>
                <h4 style={{marginLeft:'20px'}}className='text-light'>Services</h4>
                <div className='services-display-table'>
                <table>
  <tr>
    <th className='text-light'>Name</th>
    <th className='text-light'>Phase</th>
    <th className='text-light'>Status</th>
    <th className='text-light'>Time</th>
  </tr>
  <tr>
    <td className='text-light'>Personal portfolio</td>
    <td className='text-light'>1/2</td>
    <td className='text-light'>active</td>
    <td className='text-light'>2 months</td>
  </tr>
</table>
    </div>
    </div>
        )
     }
     function Financial(){
        const [pay,setPay]=useState(false);
        let displaypay=(value)=>{
           setPay(!pay);
        }
        return(
            <div className='overall-financial-component'>
            <h4 style={{marginLeft:'20px'}}className='text-light'>Finances</h4>

            <div className='financials-table'onClick={()=>setPay(false)}>
            <table>
  <tr>
    <th className='text-light'>project name</th>
    <th className='text-light'>Paid(kes)</th>
    <th className='text-light'>Balance</th>
    <th className='text-light'>Date</th>
  </tr>
  <tr>
    <td className='text-light'>Portfolio</td>
    <td className='text-light'>10,000</td>
    <td className='text-light'>5,000</td>
    <td className='text-light'>12/12/2023</td>
  </tr>
</table>
            </div>
            <div className='financials-balance-display'>
           <p onClick={()=>setPay(false)} style={{textAlign:'center'}}className='text-light'>How do you want to pay</p>
           <p onClick={()=>setPay(false)} className='text-light' style={{textAlign:'center'}}>Total amount<br/>KES 40,000</p>
           <div className='payment-categories'>
            <div className='phase 1'>
              <button onClick={()=>displaypay('phase')} className='btn btn-lg text-light bg-primary'>Phases pay</button>
            </div>
            <div className='phase 2'>
           <button onClick={()=>displaypay('pay all')} className='btn btn-lg text-light btn-primary'>Pay all</button>
            </div>
           </div>
            </div>  
            <div className='payment-method'>
               {pay &&  <form>
                    <label className='text-light'>Select paymeny method</label>
            <select class="form-select mt-3">
     <option>MPESA</option>
     <option>Paypal</option>
   </select>
   <button style={{marginTop:'10px'}} type='submit'className='btn btn-success btn-sm'>Submit</button>
   </form>}
            </div>
            </div>
        )
        }
     
        function Registration(){
            return(
                <div className='reg-overall-container'>
                     <h4 style={{marginLeft:'20px'}}className='text-light'>Register project</h4>
                     <form>
                        <label className='text-light'>Project category</label>
                     <select  class="form-select form-select-sm mt-3 form-control">
     <option>1 pager landing</option>
     <option>1 pager branding</option>
     <option>Upto 5 pages </option>
     <option>upto 10 pages</option>
     <option>upto 25 pages</option>
     <option>upto 50 pages</option>
     <option>Other</option>
   </select>
   <label className='text-light'>if others specify</label>
   <textarea className='form-control'>optional</textarea>
   <label className='text-light'>What is the main goal of your website</label>
   <textarea className='form-control'>...</textarea>
   <label className='text-light'>Any other information to add </label>
   <textarea className='form-control'>optional</textarea>
   <label className='text-light'>If you have any files eg images to help us in design upload them below </label>
   <input className='form-control' type="file" name="filename"></input>
   <button style={{marginTop:'20px'}} type='submit'className='btn btn-primary btn-lg'>Submit</button>

                     </form>

                </div>
            )
        }
     
    let component;
    let [dash,setDash]=useState(true)
    let [service,setService]=useState(false)
    let [finance,setFinance]=useState(false)
    let [register,setRegister]=useState(false)
    let [message,setMessage]=useState(false)
      if(dash==true){
    component=<FirstLinkContent/>
      }
      else if (service==true){
        component=<Serviceslink/>
      }
      else if(finance==true){
        component=<Financial/>
      }
      else if(register==true){
        component=<Registration/>
      }

    return(
        <div className='overall-client-dashboard'>
            <header>
                <Headersection/>
            </header>
            
            <div className='sidebar'>
          {  sidebar && <div className='client-dashboard-sidebar'>
            <div className='close-btn rounded-circle'onClick={()=>Setsidebar(!sidebar)}>
                <IoIosClose className='text-dark fs-1'/>
            </div>
            <div className='dashboard-links'>

                <ul className='list-unstyled client-list-div-ul'>
                    <li onClick={()=>{setDash(true);setService(false);setFinance(false);setRegister(false);setMessage(false);Setsidebar(!sidebar)}}style={{color:'white'}} className={dash?'active':''}><span><FaHome className='fs-4'/></span><span className='p-1'>Dashboard</span></li>
                    <li style={{color:'white'}} onClick={()=>{setService(true);setDash(false);setFinance(false);setRegister(false);setMessage(false);Setsidebar(!sidebar)}} className={service?'active':''}><span><CgWebsite className='fs-4'/></span><span className='p-1'>Services</span></li>
                    <li onClick={()=>{setDash(false);setService(false);setFinance(true);setRegister(false);setMessage(false);Setsidebar(!sidebar)}} style={{color:'white'}}className={finance?'active':''} ><span><FaMoneyCheck className='fs-4'/></span><span className='p-1'>Finances</span></li>
                    <li onClick={()=>{setDash(false);setService(false);setFinance(false);setRegister(true);setMessage(false);Setsidebar(!sidebar)}} style={{color:'white'}} className={register?'active':''}><span><FaFileContract className='fs-4'/></span><span className='p-1'>Registration</span></li>
                    <li onClick={()=>{setDash(false);setService(false);setFinance(false);setRegister(false);setMessage(true);Setsidebar(!sidebar)}} style={{color:'white'}} className={message?'active':''}><span><AiTwotoneMessage className='fs-4'/></span><span className='p-1'>Message</span></li>
                </ul>
            </div>
           </div>
}
</div>
          <div className='links-content-display'>
            {component}
          
           
          
          
            
          </div>
        </div>
    )
}

export default function Dashboard() {
  return (
    <div className='overall-Dashboard-container'>
        {/* <img className='bg-img' src={bgimg}alt='background color combination'/> */}
            <div className='clients-dashboard-render'>
                <Clientdisplay/>
            </div>
    </div>
  )
}

