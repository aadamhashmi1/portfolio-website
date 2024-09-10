import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7" />
      </svg>
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  // Array of image URLs for the slider
  const images = [
    'https://images.unsplash.com/photo-1554941426-a965fb2b9258?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554941071-8ec75d5379b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1534840641466-b1cdb8fb155e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensures image covers the container
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Aadam</h1>
          <p className="text-xl">A Passionate Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
