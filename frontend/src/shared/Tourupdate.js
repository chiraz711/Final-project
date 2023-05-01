import { useState,useParams, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../context/AuthContext'
import {BASE_URL} from './../utils/config'

function Tourupdate({id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

console.log(id)

const [title,setTitle]=useState('')
const [price,setPrice]=useState('')
const [city,setCity]=useState('')
const [adress,setAdress]=useState('')
const [desc,setDesc]=useState('')
const [maxGroupSize,setMaxGroupSize]=useState('')



  const handleSubmit = async e => {
    e.preventDefault();
    const updatedTour = {
      title: title,
      adress:adress,
      city:city,
      price:price,
      desc:desc,
      maxGroupSize:maxGroupSize,
    };
    
        const res = await fetch(`${BASE_URL}/tours/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTour),
      });
      
      const data = await res.json();
      console.log(data)
  };

  return (
    <>
      <Button  variant="primary" onClick={handleShow}>
       Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>title</Modal.Body>
        <input onChange={(e)=>setTitle(e.target.value)}></input>

        <Modal.Body>city</Modal.Body>
        <input onChange={(e)=>setCity(e.target.value)}></input>

        <Modal.Body>address</Modal.Body>
        <input onChange={(e)=>setAdress(e.target.value)}></input>


        <Modal.Body>distance</Modal.Body>
        <input onChange={(e)=>setAdress(e.target.value)}></input>

        <Modal.Body>price</Modal.Body>
        <input onChange={(e)=>setPrice(e.target.value)}></input>
        
        <Modal.Body>maxGroupSize</Modal.Body>
        <input onChange={(e)=>setPrice(e.target.value)}></input>

        <Modal.Body>desc</Modal.Body>
        <input onChange={(e)=>setDesc(e.target.value)}></input>

      
        
        <Modal.Body>maxGroupSize</Modal.Body>
        <input onChange={(e)=>setMaxGroupSize(e.target.value)}></input>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Tourupdate;