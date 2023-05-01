import React from 'react'
import Newsletter from '../shared/Newsletter'
import heroVideo from '../assets/images/hero-video.mp4'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import WorldImg from '../assets/images/world.png'
import '../styles/home.css'
function About() {
  return (

    <div>
    <section>
      <Row>

      <Col lg='6'>
             <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                   <img src={WorldImg} alt=''/>
                </div>
                <h1>You are Ready for   <span className='highlight'>Adventure</span></h1>
                <p style={{ color: 'var(--heading-color)' ,fontSize:' 1.1rem;'}}>   Your feet hit the ground. The anticipation of what lies ahead has occupied your thoughts long before your arrival or you knew about The Blue Walk.
        It seems life’s obligations have controlled the steps you’ve been taking lately. You yearn for a shift in perspective, something different. The world is ready to be explored, and you can discover it.
        You have earned this. It’s time to look up, look ahead and trust your footing for the adventure to come. Setting your own pace allows you to see so much more along the way.
        Our wholehearted belief is that everyone benefits from “traveling at the speed of you.” You are officially ready to travel, and so is The Blue Walk!</p>
             </div>
         </Col>
         
         <Col lg='2'>
             <div className='hero__img-box'>
                <img src={heroImg} alt=''/>
             </div>
         </Col>

         <Col lg='2'>
             <div className='hero__img-box hero__video-box mt-4'>
                <video src={heroVideo} alt='' controls/>
             </div>
         </Col>

         <Col lg='2'>
             <div className='hero__img-box mt-5'>
                <img src={heroImg2} alt=''/>
             </div>
         </Col>
        <Col>
       
  

       

        </Col>
      </Row>
    </section>

    
   <Newsletter />
   </div>
  )
}

export default About
