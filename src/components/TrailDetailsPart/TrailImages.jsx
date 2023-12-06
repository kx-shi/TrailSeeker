import React from "react";

const TrailImages = ({ images }) => {
  return (
    <div className="trail-images">
      {images.image.map((image) => (
        <div key={image.id} className="image-container">
          <img src={`https://img.oastatic.com/img2/${image.id}/default/variant.jpg`} alt={image.title} />
          <div className="image-info">
            <p>Title: {image.title}</p>
            <p>Author: {image.author}</p>
            <p>Source: {image.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrailImages;
