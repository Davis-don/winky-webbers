import React from 'react'
import './Servicesscreen.css'
import { Link } from 'react-router-dom'
import Companyname from '../Components/Companyname'
import Menuiconcomonent from '../Components/Menuiconcomonent'
import Usercomponentbtn from '../Components/Usericonbtncomponent'
import uximg from '../Images/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TiTick } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import Navbar from '../Components/UI/Navbar'
import Footercomponent from '../Components/UI/Footercomponent'
export default function Servicesscreen() {
  return (
    <div className='overall-servive-container'id='top-service-id'>
      <header className='service-header'>
       <Navbar/>
      </header>
      <div className='service-content'>
        <div className='Service-page-introduction'>
        <div>
          <h5>Our Company Services</h5>
          </div>
        <div>
          <p>We are a Web design and development company.We build websites of all kinds including E-commerce platfoms.</p>
        </div>
        </div>
        <div className='service-introduction-image'>
        <img src={uximg} alt="image showing design"/>
        </div>
        <h3 style={{textAlign:'center',marginTop:'20px'}}>Pricing of our services</h3>
        <div className='specific-services-overall'id='id-pricing'>
          <div className='specific-service'>
            <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 1</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>5,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>1 pager landing page</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
          <div className='specific-service'>
          <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 2</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>15,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>1 pager branding.</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Contain many page sections</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Menu links scrolling to same 
page when clicked</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
          <div className='specific-service'>
          <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 3</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>25,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Up to 5 pages.</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Static website pages</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Mobile responsive</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Social links</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Google analytics</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
          <div className='specific-service'>
          <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 4</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>35,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Up to 10 pages.</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Dynamic pages</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Mobile responsive</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Social links</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Google analytics</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>1 online form</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>unlimited email adresses</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
          <div className='specific-service'>
          <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 5</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>55,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Up to 25 pages.</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Dynamic pages</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Mobile responsive</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Social links</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Google analytics</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>2 online form</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>unlimited email adresses</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
          <div className='specific-service'>
          <div className='service-label'>
               <h4 className='text-light'style={{textAlign:'center'}}>Service 6</h4>
            </div>
            <div className='service-price'>
              <p><sup className='h5'>Ksh</sup><span style={{fontSize:'40px'}}>85,000</span></p>
            </div>
            <ul className='list-unstyled'>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Up to 50 pages.</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Dynamic pages</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Mobile responsive</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Social links</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>Google analytics</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>3 online form</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>unlimited email adresses</span></li>
              <li><TiTick className='text-success h1' /><span className='text-dark h5'>free trainning</span></li>
              </ul>
              <div className='sign-up-btn-container'>
              <Link to='/openaccount'>
                <button className='btn btn-lg bg-success text-light'type='button'>
                  Sign up now
                </button>
                </Link>
              </div>
          </div>
        </div>
        <div className='getintouch'>
        <ul>
            <li><SiGmail className='get-icon'/> <span style={{color:'#8685EF',fontSize:'large'}}>winkywebbers@gmail.com</span></li>
            <li><IoLogoWhatsapp className='get-icon'/><span style={{color:'#8685EF'}}>+254758420860</span></li>
            <li><IoCallSharp className='get-icon' /><span style={{color:'#8685EF'}}>+254758420860</span></li>
        </ul>
        </div>
      </div>
      <footer style={{backgroundColor:'black',padding:'20px'}}>
        <Footercomponent/>
      </footer>
      </div>
  )
}
