import React from 'react';
import '../styles/TrailContainer.css'
import { TrailCard } from './TrailCard';

export const TrailContainer = ({trailObjects}) => {
  return (
    <div className="trail-container">
      <div className="card-container">
        {trailObjects.map((trail) => (
          <div key={trail.id}>
              <TrailCard trailObject={trail} />
          </div>
        ))}
      </div>
    </div>
  );
}

