import React from 'react';
import { TrailCard } from "./TrailCard.jsx";
import "../styles/TrailContainer.css";




export const TrailContainer = ({ trailObjects }) => {
  console.log(trailObjects);
  return (
    <div className="trail-container">
        {trailObjects.map((trail) => (
          <div key={trail.id}>
       <TrailCard trailObject={trail} />
        </div>
        ))}
      </div>
    );
  }








  






