import React from 'react'
import './Footercomponent.css'
import Companyname from '../Companyname'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaYoutube, FaTiktok,FaCopyright  } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Footercomponent() {
  return (
    <div className='overall-footer-component'style={{backgroundColor:'black'}}>
                <h4 className='text-light brand-footer-name'><Companyname className='footer-brand h2'/></h4>
            <h6 className='text-light'style={{textAlign:'center',textDecoration:'underline'}}>Hire us Today</h6>

            <div className='overall-footer-links-section'>
                <ul className='list-unstyled site-links'>
                    <li ><Link to='/'className='text-light text-decoration-none'>Home</Link></li>
                    <li><Link to='about'className='text-light text-decoration-none'>About</Link></li>
                    <li><Link to='services'className='text-light text-decoration-none'>Services</Link></li>
                    <li><Link to='about'className='text-light text-decoration-none'>About</Link></li>
                </ul>
                <ul className='bottom-ul-icon-holder list-unstyled'>
                    <li> <a href='https://www.youtube.com/@winkywebbers'><FaYoutube className='bottom-icon'/></a></li>
                    <li><a href='https://www.tiktok.com/@Winky.Webbers?_t=8h5a3megmYP&_1'> <FaTiktok className='bottom-icon'/></a></li>
                </ul>
                <div style={{borderTop:'1px solid white'}}>
                    <p style={{fontSize:'small'}} className='text-light container'>copyright <span><FaCopyright/></span> winky webbers 2023.All rights reserved.Created by winky webbers. </p>
                </div>
                
            </div>
    </div>
  )
}
