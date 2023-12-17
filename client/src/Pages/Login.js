import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import './Login.css'
import loginbg from '../Images/milad-fakurian-JTKKRK05NAM-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
export default function Login() {
 
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
    <strong>Danger</strong> Incorrect username or password
  </div>
</div>
  )
}








  let navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  var [alerted,setsuccess]=useState(false);
  var [alerteddanger,setdanger]=useState(false);
  var [display,Setdisplay]=useState(true)
  //const [backendresponse, setBackendresponse] = useState(null);
 
   let handlelogin=async (e)=>{ 
    
   e.preventDefault();

   let userInputs={
    username:username,
    password:password
  }
  try{
   const response=await fetch("http://localhost:4000/login",{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(userInputs)
   })
  
   if(response.ok){
    const data=await response.json();
    setdanger(false);
    Setdisplay(false);
    setsuccess(true);
    
    setTimeout(() => {
      navigate("/personalaccount")
    }, 2000);
     
   }
   else{
    setdanger(true);
    const errordata=await response.json();
    console.error(errordata.message);
   }
  }catch (error) {
    console.error('Error during login:', error);
  
  }
  
    
   }
  return (
    <div className='login-overall'>
        <img className='login-img'src={loginbg}alt='dark background'/>
        <div className='actual-login-section'>
        {alerted && <Alertsuccess/>}
        { alerteddanger && <Alertfailed/>}
            { display && <form className='container-fluid'onSubmit={handlelogin}>
            <label className='text-light fs-5'>Username</label>
                <input name='username' onChange={(e)=>setUsername(e.target.value)} style={{width:'100%'}} type='text'className=' bg-secondary text-light' form-control required/>
                <label className='text-light fs-5'>Password</label>
                <input name='password' onChange={(e)=>setPassword(e.target.value)}style={{width:'100%'}}type='password'className=' bg-secondary text-light' form-control required/>
                <button style={{marginTop:'10px'}} type='submit'className='btn text-light btn-outline-info'>Login</button>
                 <li> <Link to='/openaccount'>Create new account</Link></li>
            </form>}
        </div>
        </div>
  )
  }
