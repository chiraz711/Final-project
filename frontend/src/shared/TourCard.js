import React,{useContext} from 'react'
import { Card,CardBody,Button, Modal } from 'reactstrap'
import {Link} from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'
import { AuthContext } from '../context/AuthContext'
import {BASE_URL} from './../utils/config'
import Tourupdate from './Tourupdate'

function TourCard({tour}) {
    const {_id, title, city, photo, price, featured, reviews} = tour;
    const {totalRating, avgRating} = calculateAvgRating(reviews);
    const {user}=useContext(AuthContext)

    const handleDelete = async (e) => {
      e.preventDefault();
      const res = await fetch(`${BASE_URL}/tours/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(res)
    };
console.log(user)
  return (
    
    <div className='tour__card' >
      <Card >
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
          {featured &&<span>Featured</span>}
        </div>
        </Card>
        <CardBody>
          <div className='card__top d-flex align-items-center justify-content-between '>
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
            
            <span className='tour__rating d-flex align-items-center gap-1'>
              <i className="ri-star-s-fill"></i> 
              {avgRating === 0 ? null : avgRating} 
              {totalRating === 0 ? ('Not rated')  : 
              <span> ({reviews.length})</span> }
            </span>
          </div>
          
          <h5 className='tour__title'>
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          
          <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>${price} <span>/per person</span></h5>
            <button className='btn booking__btn'>
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
         
        
             {user?.key2 === 'Admin' ? (
             <>
            <Tourupdate id={_id} />
            <button onClick={handleDelete}><span className='d-flex align-items-center'><i class="ri-delete-bin-line"></i></span></button>
            </>
            ):null}
          </div>
        </CardBody>


     
    </div>
  )
}

export default TourCard
