import React from 'react'
import { Link } from 'react-router-dom'
import Footercomponent from '../Components/UI/Footercomponent'
import work1 from'../Images/eftakher-alam-i1VQZsU86ok-unsplash.jpg'
import work2 from '../Images/austin-distel-tLZhFRLj6nY-unsplash.jpg'
import { useEffect, useState } from 'react'
import './Homescreen.css'
import Navbar from '../Components/UI/Navbar'
import introimg from'../Images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosPeople } from "react-icons/io";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { TiSocialYoutube } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc"
import { MdOutlinePermDataSetting ,MdOutlineRocketLaunch } from "react-icons/md"
import { IoMdClose } from "react-icons/io";
function Introtxt(){
    return(
        <div className=''>
            <h2 style={{color:'#4E14AE',textAlign:'center'}}>Website design and Development for Enterpreneurs</h2>
                <p className='container-fluid intro-image-text text-light'>
                    We are a Website Development Company where we work with researchers and experts in fields of sales and marketing together with technologists to 
                    ensure your website attains its full potential maximizing your output. 
                </p>
                <div className='introduction-button'>
                <button className='btn text-light'>Get served now!!</button>
            </div>
        </div>
    )
}
function Servicesdisplay(){
    return(
        <div className='homescreen-servicesdisplay-overall'>
           <marquee className='h2'style={{color:'#4E14AE',textAlign:'center',backgroundColor:'yellow',width:'100vw',padding:'10px'}}>Get one of these services now</marquee>
           <div className='services-ul-container'>
      <ul className='list-unstyled'>
        <li><TiTick className='tick-icon' /><span className='text-light h5'>1 pager landing page</span></li>
        <li><TiTick className='tick-icon'/><span className='text-light h5' >1 pager Branding</span></li>
        <li><TiTick className='tick-icon'/><span className='text-light h5'>upto 5 pages website</span></li>
        <li><TiTick className='tick-icon'/><span className='text-light h5'>upto 10 pages website</span></li>
        <li><TiTick className='tick-icon'/><span className='text-light h5'>upto 25 pages website</span></li>
        <li><TiTick className='tick-icon'/><span className='text-light h5'>upto 50 pages website</span></li>
      </ul>
      </div>
      <div className='introduction-service-button'>
             <Link to='/services#id-pricing'>
                <button className='btn text-light bg-danger btn-lg'>Pricing
                </button>
                </Link>
            </div>
        </div>
    )
}

export default function Homescreen() {
var [mount,Setmount]=useState(false);
  return (
    <div className='overall-homescreen'>
        <header>
        </header>
    <div className='homepage-content-section'>
        <div className='introduction-image-section'>
            <img src={introimg} alt='image of a laptop showing analytics'/>
            <div className='intro-img-opacity-controller'></div>
            <div className='text-on-image'>
            
        <Servicesdisplay/>
            
            </div>
            
        </div>
        <div className='statistical-description-section'>
            <h3  className="container-fluid text-light"style={{textAlign:'center'}}>Why should your business be online?</h3>
            <p className='container-fluid' style={{color:'#F33535'}}>We are in a technology era where everything is becoming automated.Social media is now one of the places where most people almost entirely spend their time in.</p>
            <div className='statistical-image'>
            <IoIosPeople className='statistical-icon text-light' />
            </div>
            <h5 style={{textAlign:'center',color:'#8685EF'}}>59% of the Total world population is accessing the internet.</h5>
            <p className='container-fluid text-light'>This shows that the best way to reach a lot of people easily and all at once is by use of online platfoms.</p>
            <div className='statistical-image'>
            <IoBusiness className='statistical-icon text-light' />
            </div>
            <h5 style={{textAlign:'center',color:'#8685EF'}}>over 25% of businesses are conducted online.</h5>
            <p className='container-fluid text-light'>This is because doing activities online is one of the best way to reach your target audience with minimal input.</p>
            <div className='statistical-image'>
            <TiSocialYoutube className='statistical-icon text-light'/>
            </div>
            <h5 style={{textAlign:'center',color:'#8685EF'}}>Over 4.48 billion people worldwide are using social media.</h5>
            <p className='container-fluid text-light'>billions of people have been found to be spending over 50% of their time each day just interacting on social media platfoms.</p>
            <div className='statistical-image'>
            <MdOutlineSmartphone className='statistical-icon'/>
            </div>
            <h5 style={{textAlign:'center',color:'#8685EF'}}>85.74% of the world population owns a smartphone.</h5>
            <p className='container-fluid text-light'>This is a clear indication that as technology advances,almost every person will own a smartphone.</p>
        <div className='homepage-services-section'></div>
        <div className='company-introductory-desctiptions'></div>
        <div className='sample-projects'></div>
        <div className='get-in-touch-section'></div>
    </div>
    <h3 style={{textAlign:'center',color:'#4E14AE'}}>Our services</h3>
    <p className='container-fluid text-light'>We offer high quality services ranging from free consultation to design and development of simple to more complicated websites and systems</p>
    <div className='Homepage-services-container'>
        <div className='service-div'>
            <h5 style={{textAlign:'center',fontWeight:'bolder'}}>Consultation</h5>
            <p className='container-fluid'>We offer free consultation to our clients based on type of website to use for their businesses on any other regarding the field.</p>
            <div style={{width:'max-content',margin:'auto'}}>
                <Link to='/contact#contact-form-container'>
            <button style={{backgroundColor:'#4E14AE'}}className='text-light btn' type='button'>Get started</button>
            </Link>
            </div>
        </div>
        <div className='service-div'>
        <h5 style={{textAlign:'center',fontWeight:'bolder'}}>UI/UX Design</h5>
            <p className='container-fluid'>We design interactive and fast user interfaces for your website for maximum productivity.</p>
            <div style={{width:'max-content',margin:'auto'}}>
                <Link to='/openaccount#open-your-account'>
            <button style={{backgroundColor:'#4E14AE'}}className='text-light btn' type='button'>Get started</button>
            </Link>
            </div>
        </div>
        <div className='service-div'>
        <h5 style={{textAlign:'center',fontWeight:'bolder'}}>Website Development</h5>
            <p className='container-fluid'>We develop a fully operational business websites which are scalable and can handle any traffic they encounter.</p>
            <div style={{width:'max-content',margin:'auto'}}>
            <Link to='/openaccount#open-your-account'>
            <button style={{backgroundColor:'#4E14AE'}}className='text-light btn' type='button'>Get started</button>
            </Link>
            </div>
        </div>
    </div>
    <div className=''>
        <h3 style={{textAlign:'center',color:'#4E14AE'}}>Why  are we the best web development company</h3>
        <h4 style={{textAlign:'center',color:'#8685EF'}}>Our company is well managed and organised</h4>
        <div className='why-we-best-image'><VscOrganization style={{fontSize:'60px',color:'white'}}/></div>
        <p className='container-fluid text-light'>We are organised into departments and each department has its own role and expertise such as the UI/UX department has experts in user interface designs. </p>
        <h4 style={{textAlign:'center',color:'#8685EF'}}>Involvement of client in our design and development process.</h4>
        <div className='why-we-best-image'><MdOutlinePermDataSetting style={{fontSize:'60px',color:'white'}}/></div>
        <p className='container-fluid text-light'>We fully involve our clients in helping design their dream website where every client is opened an account where we upload our progress at every stage and wait for client feedback before proceeding to next. </p>
        <h3 style={{textAlign:'center',color:'#4E14AE'}}>Why  are we the best web development company</h3>
        <h4 style={{textAlign:'center',color:'#8685EF'}}>Standardised process from design to deployment. </h4>
        <div className='why-we-best-image'><MdOutlineRocketLaunch style={{fontSize:'60px'}}/></div>
        <p className='container-fluid text-light'>We use a well defined and standardised approach when designing and developing our applications.  </p>
        <h2 style={{textAlign:'center',color:'#4E14AE'}}>Process we use</h2>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>1:Research</h5>
        <p className='container-fluid text-light'>We analyse the main goal of the website and define the target audience.We also gather as much information as possible to help in the process.</p>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>2:Design</h5>
        <p className='container-fluid text-light'>This is where we bring together the gathered information and design on a piece of paper where we later design it on UI/UX tools such as Figma and deliver our first deliverable to our clirent.</p>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>3:Development</h5>
        <p className='container-fluid text-light'>In this stage we start building the project where we divide it into modules and work on it independently to save time and later integrate it to form a fully operational system.We deliver a prototype to our client.</p>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>4:Testing</h5>
        <p className='container-fluid text-light'>We perform a thorough testing on the application where we test each functionality independently and later on test the whole system to ensure it performs the intended tasks. </p>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>5:deployment</h5>
        <p className='container-fluid text-light'>We later deploy it and host it and push traffic to it to see how it can handle it.</p>
        <h5 style={{textAlign:'center',color:'#EB2424'}}>6:Maintainance</h5>
        <p className='container-fluid text-light'>We now maintain it to ensure it balances load and is scalable.</p>
        <div className='our-work'>
            <div className='work-div'>
                <img alt='laptop image'src={work1}/>
            </div>
            <div className='work-div'>
            <img alt='laptop image'src={work2}/>
            </div>
        </div>
        <h2 style={{textAlign:'center',color:'#4E14AE'}}>Get in Touch</h2>
        <div className='getintouch'>
        <ul>
            <li><SiGmail className='get-icon'/> <span style={{color:'#8685EF',fontSize:'large'}}>winkywebbers@gmail.com</span></li>
            <li><IoLogoWhatsapp className='get-icon'/><span style={{color:'#8685EF'}}>+254758420860</span></li>
            <li><IoCallSharp className='get-icon' /><span style={{color:'#8685EF'}}>+254758420860</span></li>
        </ul>
        </div>
    </div>
    </div>
    <footer className='footer-section'>
   
    </footer>
    </div>
)
}

