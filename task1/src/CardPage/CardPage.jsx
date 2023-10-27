import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Card from 'react-bootstrap/Card';
import img1 from "../assets/card.jpg"

const CardPage = () => {
  return (
    <Card  className="m-3">
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title className='text-uppercase text-success'>dominos
      
       </Card.Title>
      <Card.Text className= 'text-capitalize fw-bold text-tark'>
    Lorem ipsum dolor sit
      </Card.Text>
      <div className="text-strat d-flex">
        <h1 className='h6 text-dark'> info</h1>
        <i className="bi bi-caret-down-square-fill text-success"></i>
      </div>
     
    </Card.Body>
  </Card>
  )
}

export default CardPage