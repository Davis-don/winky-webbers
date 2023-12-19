import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import Navbar from '../Components/UI/Navbar'
import hmpgimg from '../Images/pexels-oladimeji-ajegbile-2379886.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaCheck,FaWordpress,FaAppStore } from "react-icons/fa6";
import { BiSolidUserAccount } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { BiLogo99Designs } from "react-icons/bi";
import useimg from '../Images/donieimg.jpg'
import Footercomponent from '../Components/UI/Footercomponent'
export default function Homepage() {
  return (
    <div className='overall-homepage-div'>
    <header>
        <Navbar/>
    </header>
    <div className='homepage-body-section'>
        <div className='homepage-start-image-div'>
            <img className='image-of-man' src={hmpgimg}alt='image of a man phone'/>
            <div className='opacity-regulator'></div>
            <div className='hmpg-txt-img'>
                <h3 className='text-light top-img-heading p-1'>WordPress</h3>
                <p className='text-light top-img-paragraph '>WinkyWebbers company designs and builds platforms,portfolios and offers free consultation to entrepreneurs 
                    on matters of type of website or platform to consider to ensure risk is minimised 
                    </p>
            </div>
        </div>
        <div className='why-us-section'>
            <h5  style={{textAlign:'center'}}>Why you should choose us.</h5>
            <ul className='list-unstyled why-us-ul'>
                <li><span><FaCheck className='fs-1'/></span><span className='why'>We prioritize what our clients wants over everything else.</span></li>
                <li><span><FaCheck className='fs-1'/></span><span className='why'>We involve our clients at every stage of our development process.</span></li>
               < li><span><FaCheck className='fs-1'/></span><span className='why'>Every client is required to open an account for regular updates and communication.</span></li>
            </ul>
            <h5 style={{textAlign:'center'}}>Why we prioritise openning an account</h5>
            <div className='why-us-icon'><BiSolidUserAccount className='open-account-icon'/> </div>
             <ol type='numbered'>
                <li className='fs-5'>Facilitates communication with our team on regular basis</li>
                <li className='fs-5'>Allows clients and developers upload files to help in design</li>
                <li className='fs-5'>Clients are able to follow up on how we are progressing</li>
             </ol>

            <div className='get-started-btn'>
                <Link to="/Openaccount"><button className='btn start-btn bg-dark 'type='button'>Get started</button></Link>
            </div>
        </div>
        <div className='our-services'>
            <h5 className='text-light' style={{textAlign:'center'}}>Our Services</h5>
            <div className='hmpg-services-holder-div'>
            <div className='hmpg-service-sub'>
                <div className='service-icon-rep'><BiLogo99Designs className='text-light icon-service'/></div>
                <h5 style={{textAlign:'center'}} className=' service-t'>UI/UX design</h5>
                <p className='text-light container-fluid'>Our team consists of experts who have worked in lots of design projects all across the globe  </p>
            </div>
            <div className='hmpg-service-sub'>
            <div className='service-icon-rep'><CgWebsite className='text-light icon-service' /></div>
            <h5 style={{textAlign:'center'}} className=' service-t'>Web Development</h5>
            <p className='text-light container-fluid'>We develop highly responsive web designs and deliver them in time .</p>
            </div>
            <div className='hmpg-service-sub'>
            <div className='service-icon-rep'><FaWordpress className='text-light icon-service'/></div>
            <h5 style={{textAlign:'center'}} className=' service-t'>WordPress</h5>
            <p className='text-light container-fluid'>Our team is skilled in designing,developing and hosting wordpress build websites. </p>
            </div>
            <div className='hmpg-service-sub'>
            <div className='service-icon-rep'><FaAppStore className='text-light icon-service'/></div>
            <h5 style={{textAlign:'center'}} className=' service-t'>App Development</h5>
            <p className='text-light container-fluid'>We develop interactive applications that enhance communication and distribution for maximum output</p>
            </div>
            </div>
            <div className='see-more-btn-div'>
            <Link to="/Services">  <button className='btn text-light see-more'type='button'>See more</button></Link>
            </div>
        </div>
        <div className='plan p-3'>
                <h4 className='text-dark'style={{textAlign:'center'}}>Our pricing packages</h4>
                <p className='container-fluid'>At winky webbers we understand how a user friendly,interactive and well designed platform facilitates distribution and online transaction operations. 
We allow our clients to choose a plan that best fits their requirements.</p>
<h4 className='text-dark'style={{textAlign:'center'}}>Our plans</h4>
<ul className='list-unstyled plan-ul'>
                <li><span><FaCheck className='fs-1 text-success'/></span><span className=''>I pager landing page.</span></li>
                <li><span><FaCheck className='fs-1 text-success'/></span><span className=''>I pager branding</span></li>
               < li><span><FaCheck className='fs-1 text-success'/></span><span className=''>upto 5 pages</span></li>
               < li><span><FaCheck className='fs-1 text-success'/></span><span className=''>upto 10 pages</span></li>
               < li><span><FaCheck className='fs-1 text-success'/></span><span className=''>upto 25 pages</span></li>
               < li><span><FaCheck className='fs-1 text-success'/></span><span className=''>upto 50 pages</span></li>
            </ul>
            <div className='pricing-btn'>
               <Link to="/Services"> <button type='button'className='btn text-light btn-lg'>Pricing</button></Link>
            </div>
            </div>
            <div className='work-section'>
                <h4 className='text-light'style={{textAlign:'center'}}>Our Work</h4>
                <div className='project-div'>
                    <div className='proj-img'>
                     <img src={hmpgimg}alt='image of a website'/>
                     <h6 style={{textAlign:'center'}}>Personal portfolio website</h6>
                     <p className='container-fluid'>Designed and developed for our client Davis Ikou.</p>
                    </div>
                    
                </div>
            </div>
            <div className='testimonials'>
                <h5 style={{textAlign:'center'}}>What our clients say about us</h5>
                <div className='testimonial-overall-holder'>
                <div className='testimonial-content'>
                    <div className='testimonial-align'>
                    <div className='client-image-div'>
                   <img className='rounded-circle'src={useimg}alt='image of person who comments'/>
                    </div>
                    <div className='testimonial-comment'>
                        <h6>Ikou Davis</h6>
                        <small>CEO Winky Webbers</small>
                        <p>Winky webbers is the best company that I have ever worked with.I really love the company so much</p>
                    </div>
                    </div>
                </div>
                <div className='testimonial-content'>
                    <div className='testimonial-align'>
                    <div className='client-image-div'>
                   <img className='rounded-circle'src={useimg}alt='image of person who comments'/>
                    </div>
                    <div className='testimonial-comment'>
                        <h6>Ikou Davis</h6>
                        <small>CEO Winky Webbers</small>
                        <p>Winky webbers is the best company that I have ever worked with.I really love the company so much</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
        <footer>
            <Footercomponent/>
        </footer>
    </div>
  )
}
