import React from 'react'
import './Contactscreen.css'
import Companyname from '../Components/Companyname'
import Menuiconcomonent from '../Components/Menuiconcomonent'
import Usercomponentbtn from '../Components/Usericonbtncomponent'
import contimg from '../Images/david-marcu-78A265wPiO4-unsplash.jpg'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Navbar from '../Components/UI/Navbar'
import Footercomponent from '../Components/UI/Footercomponent'
export default function Contactscreen() {
  return (
    <div className='overall-contact-container'>
         <header className='Contact-header'>
       <Navbar/>
      </header>
      <div className='contact-pg-content'>
      <img src={contimg} alt='image of hills'/>
      <div className='contact-on-img-txt'>
        <h2 className='text-dark'style={{textAlign:'center'}}>Contact us</h2>
        
        <p className='text-light'>There is nothing we love more than seeing our clients so happy for our work. </p>
      </div>
      </div>
      <div className='contact-components row'>
        <div className='actual-comp col-sm-3'>
            <div className='comp-icon rounded-circle p-2'>< IoIosCall style={{fontSize:'50px',color:'white'}}/></div>
            <div style={{width:'max-content',margin:'auto'}}className='p-3'>
                <p style={{fontWeight:'bold'}}>Call us on<br/>
                +254758420860</p>
            </div>
            </div> 
            
         <div className='actual-comp col-sm-3'>
         <div className='comp-icon rounded-circle p-2'><MdEmail style={{fontSize:'50px',color:'white'}}/></div>
            <div style={{width:'max-content',margin:'auto'}}className='p-3'>
                <p style={{fontWeight:'bold'}}>Email us on<br/>
                winkywebbers
                <br/>@gmail.com</p>
            </div>
         </div>
         <div className='actual-comp col-sm-3'>
         <div className='comp-icon rounded-circle p-2'>< IoLogoWhatsapp style={{fontSize:'50px',color:'white'}}/></div>
            <div style={{width:'max-content',margin:'auto'}}className='p-3'>
                <p style={{fontWeight:'bold'}}>Whatsap us on<br/>
                +254758420860</p>
            </div>
         </div>
      </div>
      <div className='contact-form'id='contact-form-container'>
        <form>
            <label className='text-light'>Name</label>
            <input type='text'className='form-control'/>
            <label className='text-light'>Email</label>
            <input type='email'className='form-control'/>
            <label className='text-light'>Message</label>
            <textarea className='form-control'>
            Type message.....
            </textarea>
           <div className='contact-form-btn p-2'>
         <button type='submit'className='btn btn-lg text-light'style={{backgroundColor:'#293057'}}>Send</button>
           </div>
        </form>
      </div>
      <footer className='bg-dark p-2'>
      </footer>
        </div>
  )
}
