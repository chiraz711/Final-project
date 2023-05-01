import React from 'react'
import './newletter.css'
import { Container,Row,Col } from 'reactstrap'
import  maletourist from '../assets/images/male-tourist.png'
function Newsletter() {
  return (
    <section className='newsletter'>
    <Container>
     <Row>
         <Col lg='6'>
            <div className='newsletter__content'>
               <h2>Subscribe now to get useful traveling information.</h2>
                <div className='newsletter__input'>
                  <input type='email' placeholder='Enter your email' />
                  <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>At TRAVEL WORLD, we pride ourselves on our team of passionate and knowledgeable professionals.

 

Each of our staff members is selected for their skills, expertise and ability to provide exceptional customer service.

 

We are convinced that it is thanks to our dedicated team that we can offer superior quality services to our customers.

 

Our team is made up of tourism specialists with in-depth knowledge of the Tunisia destination and international destinations.

 

We have ticketing experts, outgoing advisors and local service specialists. Each of our staff members is committed to providing honest advice and relevant recommendations to our clients, taking into account their needs and expectations.

 

Our staff is also known for their professionalism, dedication and commitment to our customers.

 

We are pleased to work together to provide superior services to our customers and to maintain the highest standards of customer service.

 

 </p>
            </div>
         </Col>
         <Col lg='6'>
           <div className='newsletter__img'>
               <img  src={maletourist} alt=''/>
           </div>
         </Col>
     </Row>
    </Container>

    
   
 </section>
  )
}

export default Newsletter
