import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

import AppURL from '../../api/AppURL';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';


class HomeSlider extends Component {

  render() {
    // slidr settings
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const SliderData = this.props.sliders;

    const sliderView = SliderData && SliderData.map((slider, i)=>{
      return  <div key={i.toString()}>
        <img className="slider-img" src={slider.slider_image} alt=""/>
      </div>
    })

    return (
      <div>
        <Slider {...settings}>
          { sliderView }
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
