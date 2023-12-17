import React from 'react'
import './Openaccount.css'
import { useState } from 'react'
import Companyname from '../Components/Companyname'
import Menuiconcomonent from '../Components/Menuiconcomonent'
import Usercomponentbtn from '../Components/Usericonbtncomponent'
import openaccntimg from '../Images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/UI/Navbar'
import {useNavigate} from "react-router-dom"
export default function Openaccount() {


let returnmessage;

let [data,setdata]=useState({
  userName:'',
  Email:'',
  country:'',
  contact:'',
  password:'',
  confirmpassword:''
})
  const updatevalue = (e) => {
    setdata(data => {
      return { ...data, [e.target.name]:e.target.value }
    });
    
  }
  let [mount,Setmount]=useState(true);
  let [successful,Setsuccessful]=useState(false)
  let[passalert,setPassalert]=useState(false)
  let navigate=useNavigate();



  let handlepost=async (e)=>{ 
    
    e.preventDefault();
   
   try{
    const response=await fetch("http://localhost:4000/createaccount",{
     method:'post',
     headers:{
       'content-type':'application/json'
     },
     body:JSON.stringify(data)
    })
   
    if(response){
     const data=await response.json();
       
      
      if(data.message==true){
        Setmount(!mount);
        Setsuccessful(!successful)
        setPassalert(false)
       setTimeout(() => {
        navigate("/personalaccount")
      }, 2000);
      }
      else{
    setPassalert(!passalert)
      }
    }
    else{
     const errordata=await response.json();
     console.error(errordata.message);
     alert('failed')
    }
   }catch (error) {
     console.error('Error during login:', error);
     alert('failed again')
   
   }
     
    }


  return (
    <div className='overall-open-account' id='open-your-account'>
      <header>
        <Navbar/>
      </header>
      <div className='open-account-content'>
        <div className='open-account-intro-image'>
          <img src={openaccntimg} alt='Image of a laptop in dark'/>
          <div className='text-on-img-openaccount'>
            <h3 className='text-light'style={{width:'80vw',textAlign:'center',margin:'10px'}}>Lets start working on your website today.</h3>
            <p style={{color:'#CEBFC0',marginLeft:'10vw',fontSize:'larger'}}>We shall create an account for you for updates and comunication simplicity</p>
          </div>
        </div>
        <div className='openaccount-form-div'>
          {successful && 
          <>
        <div class="alert alert-success alert-dismissible fade show">
    <strong>Success!</strong>Your details as been received
  </div>
  <div class="alert alert-info alert-dismissible fade show">
    <strong>please wait!!</strong> As we get your account ready
  </div>
  </>
  }
            { passalert && <div class="alert alert-danger alert-dismissible fade show">
    <strong>Password</strong> your password did not match
  </div>}
          { mount && <>
            <p className='text-success fs-5'style={{textAlign:'center'}}>Please fill the form below</p>
            <form onSubmit={handlepost} style={{padding:'5px'}}>
                <label>User Name</label>
                <input required name='userName' onChange={updatevalue} type='text'className='form-control bg-secondary text-light'/>
                <label>Email</label>
                <input required name='Email' onChange={updatevalue} type='email'className='form-control bg-secondary text-light'/>
                <label>Country/city</label>
                <input required name='country' onChange={updatevalue} type='text'className='form-control bg-secondary text-light'/>
                <label>Contact</label>
                <input required name='contact' onChange={updatevalue} type='number'className='form-control bg-secondary text-light'/>
                <label>create password</label>
                <input required name='password' onChange={updatevalue} type='password'className='form-control bg-secondary text-light'/>
                <label>Confirm password</label>
                <input required name='confirmpassword' onChange={updatevalue} type='password'className='form-control bg-secondary text-light'/>
                <div className='open-account-btn p-2'>
                    <button  type='submit'className='btn text-light bg-danger'>Submit</button>
                </div>
            </form>
            </>}
        </div>
      </div>
      <footer>
      </footer>
        </div>
  )
}
