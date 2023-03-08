import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './ControlledCarousel.css'

function UncontrolledExample() {

  return (
    <div className='Carousel'  >
    <Carousel>
        
        <Carousel.Item>
          <Link to={'/'}>
          <img
            className="d-block w-100" 
            src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="First slide"
            style={{ objectFit: "cover", maxHeight: "500px" }}
          />
          </Link>
        
          <Carousel.Caption>
            <h3>Types of coffee Roasts</h3>
            <p>Coffee is a beloved beverage known for its ability to fine-tune your focus and boost your energy levels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
        <Link to={'/'}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
            style={{ objectFit: "cover", maxHeight: "500px" }}
          />
          </Link>
          <Carousel.Caption>
            <h3>Health Benefits Of Coffee</h3>
            <p>Here’s what you need to know about the popular drink.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1490395957191-b50e5cc253fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
            alt="Third slide"
            style={{ objectFit: "cover", maxHeight: "500px" }}
          />
          <Carousel.Caption>
            <h3>Best Coffee Mugs for Your Daily Coffee</h3>
            <p>
            The Ember Mug is our top pick.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
    

  )
}


export default UncontrolledExample;