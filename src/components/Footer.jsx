import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-primary">
                <Row>
                    <Col className='p-3'>
                        <h3 style={{color:"white"}}>Employee Mangement 24</h3>
                        <p style={{ textAlign: "justify", color: "white" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis corrupti nobis nostrum possimus voluptas ab harum quidem vel pariatur consectetur consequatur quaerat modi ratione, totam ipsum aliquid. Corporis, exercitationem! </p>
                    </Col>
                    <Col className='p-3'>
                    <h3 style={{color:"white"}}>Links</h3>
                    <div className="d-flex flex-column">
                        <Link to={'/'} className="text-light"> Landing</Link>
                        <Link to={'/home'} className="text-light"> Home</Link>
                        
                    </div>
                    </Col>
                    <Col>
                        <h4>Feedbacks</h4>
                        <textarea name='' id="" className='form-control mt-3'></textarea>
                        <button className='btn btn-dark mt-3'>Submit</button>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Footer