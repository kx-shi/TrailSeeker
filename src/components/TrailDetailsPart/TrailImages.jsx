import { useState } from "react";
import "../../styles/TrailImages.css";

export const TrailImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.image.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.image.length) % images.image.length
    );
  };

  const currentImage = images.image[currentIndex];

  return (
    <div className="trail-image-container">
      <div className="trail-images-unique">
        <div className="image-container">
          <div className="photo-box">
            <img
              src={`https://img.oastatic.com/img2/${currentImage.id}/default/variant.jpg`}
              alt={currentImage.title}
              className="image"
            />
          </div>
          <span className="vignette"></span>
          <div className="arrow left" onClick={handlePrev}>
            {"<"}
          </div>
          <div className="arrow right" onClick={handleNext}>
            {">"}
          </div>
        </div>
        <div className="image-description">
          <span className="image-title">
            <p>{currentImage.title}</p>
          </span>
          <div className="information-box">
            {currentImage.author ? <p>Author: {currentImage.author}</p> : null}
            {currentImage.source ? <p>Source: {currentImage.source}</p> : null}
          </div>
        </div>
      </div>
    </div>

  );
};