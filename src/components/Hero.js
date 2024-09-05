// src/components/Hero.js
import React from 'react';
import Slider from 'react-slick';

// Import the slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Array of image URLs for the slider
  const images = [
    'https://images.unsplash.com/photo-1554941426-a965fb2b9258?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URLs
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
