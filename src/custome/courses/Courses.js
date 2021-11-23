import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './courses.css'
import { Card, Row, Col } from 'react-bootstrap';
import { Star } from 'react-feather'

const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  const head = {
    position: "absolute",
    top: "450px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main style={{ backgroundColor: '#1F2235' }}>
      <div className="p">
        <img className='w-100' src={a} alt="" />
        <h1 style={head}>Our Courses</h1>
      </div>
      <div className="p-5">
        <Row xs={1} md={3} className="g-4">
          {courses.map(course => (
            <Col>
              <Card style={{ backgroundColor: '#313552', border:'1px solid #FFC576' }}>
                <Card.Img style={{height: '250px'}} variant="top" src={course.picture} />
                <Card.Body>
                  <Card.Title style={{ color:'white', fontWeight: "bold" }}>{course.name}</Card.Title>
                  <Card.Text style={{ color:'#FFC576', fontWeight: "bold" }}>
                    Price: {course.hadiya}
                  </Card.Text>
                  <Card.Text className='d-flex' style={{ color:'#FFC576', fontWeight: "bold" }}>
                    Ratings:  {course.ratings}
                    <Star style={{marginLeft:'5px', width:'17px'}} fill='#FFC576'></Star>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Courses;