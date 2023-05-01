import React from 'react'
import { Container,Col,ListGroup,ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  const quick__links= [
    {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
  
  ]
  const quick__links2= [
    {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
  
  ]
const year=new Date().getFullYear()

  return (
    <footer className='footer'>
    <Container>
        <Row>
         <Col lg='3'>
             <div className='logo'>
                 <img src={logo} alt='' />
                 <p>Lorem....</p>
                 <div className='social__links d-flex align-items-center gap-4'>
                     <span>
                         <Link to='#'><i class="ri-youtube-line"></i></Link>
                     </span>
                     <span>
                         <Link to='#'><i class="ri-github-fill"></i></Link>
                     </span>
                     <span>
                         <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                     </span>
                     <span>
                         <Link to='#'><i class="ri-instagram-line"></i></Link>
                     </span>
                 </div>
             </div>
         </Col>
         <Col lg='3'>
             <h5 className='footer__link-title'>Discover</h5>
             <ListGroup className='footer__quick-links'>
             {
                 quick__links.map((item,index)=>(
                     <ListGroup key={index} className='ps-0 border-0'>
                         <Link to={item.path}>{item.display}</Link>
                     </ListGroup>
                 ))
             }
             </ListGroup>
         </Col>
             <Col lg='3'>
              <h5 className='footer__link-title'>Quick Links</h5>
             <ListGroup className='footer__quick-links'>
             {
                 quick__links2.map((item,index)=>(
                     <ListGroup key={index} className='ps-0 border-0'>
                         <Link to={item.path}>{item.display}</Link>
                     </ListGroup>
                 ))
             }
             </ListGroup>
         </Col>
         <Col lg='3'>
         <h5 className='footer__link-title'>Contact</h5>
             <ListGroup className='footer__quick-links'>
             
                     <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3 '>
                        <h6 className='mb-0 f-flex align-items-center gap-3 '>
                            <span><i class="ri-map-pin-line"></i></span>
                            Adress:
                        </h6>
                        <p className='mb-0'>Rades ben arous</p>
                     </ListGroupItem>

                     <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3 '>
                        <h6 className='mb-0 f-flex align-items-center gap-3 '>
                            <span><i class="ri-mail-line"></i></span>
                            Email:
                        </h6>
                        <p className='mb-0'>chiraz26mechi@gmail.com</p>
                     </ListGroupItem>

                     <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3 '>
                        <h6 className='mb-0 f-flex align-items-center gap-3 '>
                            <span><i class="ri-phone-fill"></i></span>
                            Phone:
                        </h6>
                        <p className='mb-0'>+21651543818</p>
                     </ListGroupItem>
             
             </ListGroup>
         </Col>
          <Col lg='12' className='text-center pt-5'>
             <p className='copyright'>copyright {year},design and develop by mechi chiraz</p>
          </Col>
        </Row>
    </Container>
 </footer>
  )
}

export default Footer
