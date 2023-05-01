import React from 'react'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'
import useFetch from '../../hooks/useFetch'
import {BASE_URL} from './../../utils/config'
function FeaturedTourList() {

  const {data:featuredTours,loading,error}=useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  )

  console.log(featuredTours)

  return (
    <div style={{display:'flex',gap:'10px',width:'100%',flexWrap:'wrap'}}>
      {loading && <h4>Loading...</h4> }
      {error && <h4>{error}</h4>}
      {!loading && !error &&
      featuredTours?.map(tour=>(
            <Col lg='3' md='4' sm='6'  className='mb-4'  key={tour._id}>
            <TourCard  tour={tour} /></Col>
        ))
     }
      
    </div>
  )
}

export default FeaturedTourList
