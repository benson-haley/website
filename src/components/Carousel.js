import { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />

      <div className="carousel-caption">
        {images[currentIndex].caption}
      </div>

      <button
        onClick={prevImage}
        className="carousel-arrow carousel-arrow-left"
        aria-label="Previous"
      >
        ◂
      </button>

      <button
        onClick={nextImage}
        className="carousel-arrow carousel-arrow-right"
        aria-label="Next"
      >
        ▸
      </button>
    </div>
  );
};

export default Carousel;