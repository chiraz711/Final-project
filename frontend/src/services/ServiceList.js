import React from 'react'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Calculate Weather',
        desc:"Lorem.."
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:"Lorem.."
    },
    {
        imgUrl:customizationImg,
        title:'Calculate Weather',
        desc:"Lorem.."
    }

]
function ServiceList() {
  return (
    <>
       { servicesData.map((item,index)=> <Col lg='3' sm='12' md='6' className='mb-4' key={index}><ServiceCard item={item} /></Col>)}
    </>
  )
}

export default ServiceList

