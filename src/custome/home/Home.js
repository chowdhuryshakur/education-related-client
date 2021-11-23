import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { Star } from 'react-feather'

const Home = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <main style={{ backgroundColor: '#1F2235' }}>
      <Carousel>
        {courses.map(course => <Carousel.Item>
          <img
            className="d-block w-100"
            style ={{height:'550px'}}
            src={course.picture}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{course.name}</h3>
            <p>Discount Price: {course.hadiya}</p>
          </Carousel.Caption>
        </Carousel.Item>)}
      </Carousel>
      <div className="p-5">
        <h1>Our Courses</h1>
        <p style={{ color: '#FFC576' }}>The best in our institute</p>
        <Row xs={1} md={4} className="g-4">
          {courses.slice(0, 4).map(course => (
            <Col>
              <Card style={{ backgroundColor: '#313552', border: '1px solid #FFC576' }}>
                <Card.Img style={{ height: '250px' }} variant="top" src={course.picture} />
                <Card.Body>
                  <Card.Title style={{ color: 'white', fontWeight: "bold" }}>{course.name}</Card.Title>
                  <Card.Text style={{ color: '#FFC576', fontWeight: "bold" }}>
                    Price: {course.hadiya}
                  </Card.Text>
                  <Card.Text className='d-flex' style={{ color: '#FFC576', fontWeight: "bold" }}>
                    Ratings:  {course.ratings}
                    <Star style={{ marginLeft: '5px', width: '17px' }} fill='#FFC576'></Star>
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

export default Home;