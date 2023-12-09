import React from 'react'
import './Login.css'
import loginbg from '../Images/milad-fakurian-JTKKRK05NAM-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Login() {
  return (
    <div className='login-overall'>
        <img className='login-img'src={loginbg}alt='dark background'/>
        <div className='actual-login-section'>
            <form className='container-fluid'>
            <label className='text-light fs-5'>Username</label>
                <input style={{width:'100%'}} type='text'className=' bg-secondary text-light' form-control required/>
                <label className='text-light fs-5'>Password</label>
                <input style={{width:'100%'}}type='password'className=' bg-secondary text-light' form-control required/>
                <button style={{marginTop:'10px'}} type='submit'className='btn text-light btn-outline-info'>Login</button>
            </form>
        </div>
        </div>
  )
}
