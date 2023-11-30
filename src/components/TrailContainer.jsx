import React from 'react';
import '../styles/TrailContainer.css'
//import TrailCard from './TrailCard';

export const TrailContainer = ({ trailObjects }) => {
  return (
    <div className="trail-container">
      <h2>Trails Near Stockholm</h2>
        <div className="card-container">
          <p>One trail</p>
          <p>Another trail</p>
        </div>
    </div>
  );
};

