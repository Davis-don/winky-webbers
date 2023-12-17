import React from 'react'
import './Aboutscreen.css'
import Aboutintroimg from '../Images/beier-c-7-G72Kt6QDA-unsplash.jpg'
import Usercomponentbtn from '../Components/Usericonbtncomponent'
import Menuiconcomonent from '../Components/Menuiconcomonent'
import 'bootstrap/dist/css/bootstrap.min.css'
import Companyname from '../Components/Companyname'
import donimg from '../Images/donieimg.jpg'
import Navbar from '../Components/UI/Navbar'
import Footercomponent from '../Components/UI/Footercomponent'

export default function Aboutscreen() {
  return (
    <div className='overall-aboutscreen-page'>
        <header>
          <Navbar/>
        </header>
   <div className='about-top-image'>
      <img src={Aboutintroimg}alt='image showing snow with hills'/>
      
      <div className='about-txt'>ABOUT US</div>
   </div>
   <div className='About-section-content'>
    <p className='container-fluid'>Winky webbers company was started by our CEO Ikou Davis in the year 2023.By then he was a student at Murang’a University of Technology pursuing bachelors degree in <b> Mathematics and Computer Science.</b>
     He was always looking forward to finding and solving problems with different levels of complexities.He later discovered that the only way he would solve as much problems as possible is by creating a platform where different people would share their ideas and he would try solving them to the very best.</p>
<p className='container-fluid'>Winky webbers platform allows you to interact with our team and allows you to view progress.By creating an account you are able to follow up and suggest modifications to fit your standards before the process is complete.</p>
    <div className='Ceo-img-section'>
        <div className='ceo-image-holder'>
        <img src={donimg}alt='image of the CEO'/>
        </div>
        <p style={{textAlign:'center'}}>Davis ikou<br/>
CEO/Founder Winky webbers</p>
    </div>
   </div>
   <footer className='about-footer'>
    <Footercomponent/>
   </footer>
    </div>
  )
}
