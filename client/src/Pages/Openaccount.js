import React from 'react'
import './Openaccount.css'
import Companyname from '../Components/Companyname'
import Menuiconcomonent from '../Components/Menuiconcomonent'
import Usercomponentbtn from '../Components/Usericonbtncomponent'
import openaccntimg from '../Images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footercomponent from '../Components/UI/Footercomponent'
export default function Openaccount() {
  return (
    <div className='overall-open-account' id='open-your-account'>
      <div className='open-account-content'>
        <div className='open-account-intro-image'>
          <img src={openaccntimg} alt='Image of a laptop in dark'/>
          <div className='text-on-img-openaccount'>
            <h3 className='text-light'style={{width:'80vw',textAlign:'center',margin:'10px'}}>Lets start working on your website today.</h3>
            <p style={{color:'#CEBFC0',marginLeft:'10vw',fontSize:'larger'}}>We shall create an account for you for updates and comunication simplicity</p>
          </div>
        </div>
        <div className='openaccount-form-div'>
            <p className='text-success fs-5'style={{textAlign:'center'}}>Please fill the form below</p>
            <form style={{padding:'5px'}}>
                <label>Full Names</label>
                <input type='text'className='form-control bg-secondary text-light'/>
                <label>Email</label>
                <input type='email'className='form-control bg-secondary text-light'/>
                <label>Country/city</label>
                <input type='text'className='form-control bg-secondary text-light'/>
                <label>Contact</label>
                <input type='number'className='form-control bg-secondary text-light'/>
                <label>create password</label>
                <input type='password'className='form-control bg-secondary text-light'/>
                <label>Confirm password</label>
                <input type='password'className='form-control bg-secondary text-light'/>
                <div className='open-account-btn p-2'>
                    <button type='button'className='btn text-light bg-danger'>Submit</button>
                </div>
            </form>
        </div>
      </div>
      <footer>
      </footer>
        </div>
  )
}
