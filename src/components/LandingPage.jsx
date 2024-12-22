import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profileImage from'../assets/images/profile.png'
export default function LandingPage() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center my-5'>
      <Row className='w-100 my-5 d-flex ' >
        <Col className='d-flex flex-column justify-content-center align-items-center text-start gap-1'>
        <h1 className='fw-bolder'>Hello,I'm full-stack <br />Developer 👋</h1>
        <p>I am passionate about coding,<br />experienced in web development,<br /> and always seeking opportunities to grow my skills.</p>

        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <img src={profileImage} alt="profile" />
        </Col>
      </Row>
       
    </Container>
  )
}
