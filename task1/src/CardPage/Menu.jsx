import React from 'react'
import{Col,Container,Row} from "react-bootstrap"
import CardPage from './CardPage'
import{useState} from "react"
const Menu = () => {
    const[menu]=useState([1,2,3,4])
  return (
    <section className='bg-light'>
        <Container  className='mt-5'>
            <Row>
                {
                    menu.map((item)=>{
                     return <Col md={6} lg={3} key={item}>
                     <CardPage/>
                     </Col>  
                    })
                }
                
            </Row>
        </Container>

    </section>
  )
}

export default Menu