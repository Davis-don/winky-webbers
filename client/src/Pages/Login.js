import React from 'react'
import { useState, useEffect } from 'react'
import {json, useNavigate} from "react-router-dom"
import './Login.css'
import loginbg from '../Images/milad-fakurian-JTKKRK05NAM-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Alertsuccess(){
  return(
<div className='overall-alert'>
<div class="alert alert-success alert-dismissible fade show">
    <strong>Success!</strong> You are successfully logged in.
  </div>
</div>
  )
}
function Alertfailed(){
  return(
<div className='overall-alert'>
<div class="alert alert-danger alert-dismissible fade show">
    <strong></strong> Incorrect username or password
  </div>
</div>
  )
}
export default function Login() {
  let navigate=useNavigate();
  let [success,setSuccess]=useState(false)
  let [fail,setFail]=useState(false);
  let [mount,setmount]=useState(true);
 const [userName,setUsername]=useState('');
 const [password,setPassword]=useState('');
 let userdata={
  userName:userName,
  password:password
 }
 let handlelogin=async (e)=>{ 
  e.preventDefault();
 try{
  const response=await fetch("http://localhost:4000/login",{
   method:'post',
   headers:{
     'content-type':'application/json'
   },
   body:JSON.stringify(userdata)
  })
   
  if(response){
    //console.log(JSON.stringify(userdata))
   const data=await response.json();
   if(data.message==true){
    setSuccess(true);
    setmount(false);
    setFail(false)
    setTimeout(() => {
      navigate('/personalaccount')
    }, 2000);
    
   }
   else{
    e.preventDefault()
  setFail(true);
   }
 }
}
 catch (error) {
   console.log(error)
 
 }
   
}
  return (
    <div className='login-overall'>
        <img className='login-img'src={loginbg}alt='dark background'/>
        <div className='actual-login-section'>
          {
            success && <Alertsuccess/>
          }
          {
            fail && <Alertfailed/>
          }
             {mount && <form className='container-fluid'onSubmit={handlelogin}>
            <label className='text-light fs-5'>Username</label>
                <input onChange={(e)=>setUsername(e.target.value)} name='username'  style={{width:'100%'}} type='text'className=' bg-secondary text-light' form-control required/>
                <label  className='text-light fs-5'>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} name='password' style={{width:'100%'}}type='password'className=' bg-secondary text-light' form-control required/>
                <button style={{marginTop:'10px'}} type='submit'className='btn text-light btn-outline-info'>Login</button>
                 <li> <Link to='/openaccount'>Create new account</Link></li>
            </form>}
        </div>
        </div>
  )
  }
