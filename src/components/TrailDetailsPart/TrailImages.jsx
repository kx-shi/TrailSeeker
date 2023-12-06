import React, { useState } from "react";
import "../../styles/TrailImages.css";

const TrailImages = ({ images }) => {
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
    <div className="trail-images-unique">
      <div className="image-container">
        <div className="arrow" onClick={handlePrev}>
          {"<"}
        </div>
        <div className="photo-box">
          <img
            src={`https://img.oastatic.com/img2/${currentImage.id}/default/variant.jpg`}
            alt={currentImage.title}
            className="image"
          />
        </div>
        <div className="arrow" onClick={handleNext}>
          {">"}
        </div>
      </div>
      <div className="information-box">
        <p>Title: {currentImage.title}</p>
        <p>Author: {currentImage.author}</p>
        <p>Source: {currentImage.source}</p>
      </div>
    </div>
  );
};

export default TrailImages;
