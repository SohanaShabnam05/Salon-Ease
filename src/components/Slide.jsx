import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css';
import sban from '../assets/customer.jpg'

const Slide = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="slide">
            <img src={sban} alt="" />
              <h3></h3>
            </div>
            <div className="slide">
            <img src="" alt="" />
              <h3>Slide 2</h3>
            </div>
            <div className="slide">
            <img src="" alt="" />
              <h3>Slide 3</h3>
            </div>
            <div className="slide">
            <img src="" alt="" />
              <h3>Slide 4</h3>
            </div>
            <div className="slide">
            <img src="" alt="" />
              <h3>Slide 5</h3>
            </div>
          </Slider>
        </div>
    );
  };
  
  export default Slide;
  