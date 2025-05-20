import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2F13-scaled.jpg?alt=media&token=8de55d80-e451-4f33-a54b-88fe6f04d4b1',
    'https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2F14.jpg?alt=media&token=2cbed420-008d-4962-9dfd-75bf48b08eff',
    'https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2F16-scaled.jpg?alt=media&token=87022dd8-ff43-496a-94d3-40f8ba58a2c5',
    'https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2F17-scaled.jpg?alt=media&token=56f0a574-2fe3-4cbe-ba44-6a80c4b999e0',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle indicator click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto h-[600px] overflow-hidden shadow-2xl">
      {/* Static Heading and Subheading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-2xl md:text-5xl font-bold drop-shadow-lg">
          Jagdev Engineering Works Pvt. Ltd.
        </p>
        <p className="text-2xl md:text-3xl font-bold drop-shadow-lg">
          Pre - Engineering Building Solution
        </p>
      </div>

      {/* Sliding Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Shadow Overlay Div */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-white scale-125'
                : 'bg-gray-400 hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;