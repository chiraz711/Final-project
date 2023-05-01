import React,{useState,useContext} from 'react'
import './booking.css'
import {Form ,FormGroup, ListGroup, ListGroupItem} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

function Booking({tour,avgRating}) {
    const {price,reviews,title}=tour;
    const navigate=useNavigate()

    const {user}=useContext(AuthContext);
    console.log(user) 
    const [booking,setBooking]=useState({ 
    userId: user.key._id,
    userEmail: user.key.email,
    tourName:title,
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:'',
  })
  console.log(booking)
    const handleChange=e=>{
      setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    
    const serviceFee=10
    const totalAmount=Number(price) * Number (booking.guestSize)+Number(serviceFee);
    
    const handleClick=async (e)=>{
        e.preventDefault()

        // console.log(booking)
        try {
          if(!user || user===undefined || user===null){
            return alert('Please sign in')
          }
          const res=await fetch(`${BASE_URL}/booking/`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(booking)
          })

          const result=await res.json()
          console.log(result)
          if(!res.ok){
            return alert(result.message)
          }
          else{
        navigate("/thank-you")}
          
        } catch (err) {
          alert(err.message)  
        }
        // console.log(credentials)
    }
  return (
    <div className='booking'>
        <div className='booking__top d-flex align-items-center justify-content-between'>
          <h3>${price} <span>/person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
                <i class="ri-star-s-fill"></i>
                 {avgRating ===0 ? null:avgRating} ({reviews?.length})
            </span>
       </div>
      {/* booking form */}
         <div className='booking__form'>
               <h5>Information</h5>
               <Form className='booking__info-form' onSubmit={handleClick}>
                   <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}/>
                   </FormGroup>
                   <FormGroup>
                        <input type='number' placeholder='Phone' id='phone' required onChange={handleChange}/>
                   </FormGroup>
                   <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' id='bookAt' required onChange={handleChange}/>
                        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}/>
                   </FormGroup>
               </Form>
        </div>
       
        <div className='booking__bottom'>
          <ListGroup>
             <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                ${price} <i class="ri-close-line"></i>1 person</h5>
                 <span>${price}</span>
             </ListGroupItem>
             <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                 <span>${serviceFee}</span>
             </ListGroupItem>
             <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                 <span>${totalAmount}</span>
             </ListGroupItem>
          </ListGroup>
      <button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</button>
      </div> 
      
    </div>
  )
}

export default Booking
