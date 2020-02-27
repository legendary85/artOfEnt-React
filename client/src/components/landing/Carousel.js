import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wed1 from '../../assets/img/wed-1.jpg'
import wed2 from '../../assets/img/wed-2.jpg'
import wed3 from '../../assets/img/wed-3.jpg'
import wed4 from '../../assets/img/wed-4.jpg'


import './Carousel.css'
import { Container } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    touchMove: true,
    className: "slides",
    cssEase: "linear"
  };

  return (
    <section>
      <Container>
        <div className='text-center'>
          <p className='buttonHead'>Know what you want?</p>
          <LinkContainer to='/packages'>
            <button type='button' className='btn btn-warning my-5'>Book Now</button>
          </LinkContainer>
        </div>


        <div>
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
            <div>
              <img width='100%' src={wed2} alt="" srcSet="" />
            </div>
            <div>
              <img width='100%' src={wed1} alt="" srcSet="" />
            </div>
            <div>
              <img width='100%' src={wed4} alt="" srcSet="" />
            </div>
            <div>
              <img width='100%' src={wed3} alt="" srcSet="" />
            </div>
          </Slider>
        </div>
      </Container>
    </section>

  )
}
export default Carousel