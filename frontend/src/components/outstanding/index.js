import React from 'react'
import { Container } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/img/banner/jewel.png'
import banner2 from '../../assets/img/banner/shoes.png'
import banner3 from '../../assets/img/banner/glasses.png'
import banner4 from '../../assets/img/banner/wallet.png'
import './outstanding.css'

function Outstanding() {
  return (
          <Container className='pt-3 pb-3'>
              <Carousel className="carouselBanner">
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Four slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
          </Container>
  );
}

export default Outstanding;

