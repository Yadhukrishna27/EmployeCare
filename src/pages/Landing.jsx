import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      <div className="container-fluid bg-light d-flex justify-content-center align-items-center" style={{ height: '79vh' }}>
        <Row className="p-4">
          <Col className="d-flex justify-content-center flex-column">
            <h2 className='text-dark '>Employee Care</h2>
            <p style={{ textAlign: 'justify' }} className='text-dark'>A simple tool to manage your projects. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis commodi unde doloribus veritatis vel harum modi odit quia deleniti
              corrupti maiores sed minus, laudantium officia, facilis nemo rem, dolore necessitatibus.</p>
            <Link href="/projects" className="btn btn-primary" to={"/home"}>Start to Explore</Link>
          </Col>
          <Col>
            <img src="https://static.vecteezy.com/system/resources/previews/005/868/094/non_2x/office-work-modern-flat-concept-for-web-banner-design-female-employee-working-on-laptop-doing-paperwork-answering-work-chat-and-completing-tasks-illustration-with-isolated-people-scene-vector.jpg"
              alt="Landing" className='img-fluid rounded' />

          </Col>

        </Row>
      </div>
    </>
  )
}

export default Landing