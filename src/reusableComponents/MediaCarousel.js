import React, { useState, useEffect } from 'react';
import './MediaCarousel.scss';

const mediaItems = [
  { type: 'image', src: 'https://wallpapercave.com/wp/wp12836275.jpg', alt: 'Cute Kitten' },
  { type: 'image', src: 'https://wallpapercave.com/wp/wp14355340.jpg', alt: 'Grizzly Bear' },
  { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'YouTube Video' },
  { type: 'image', src: 'https://wallpapercave.com/wp/wp11479907.jpg', alt: 'Cool Beard' },
];

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {mediaItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="carousel-media" />
            ) : (
              <iframe
                className="carousel-media"
                src={item.src}
                title={item.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default MediaCarousel;
