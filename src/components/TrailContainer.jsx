import React from 'react';
import '../styles/TrailContainer.css'
import { TrailCardDummy } from './TrailCardDummy';

export const TrailContainer = ({ trailObjects }) => {
  console.log(trailObjects);
  return (
    <div className="trail-container">
        <div className="card-container">
          { 
            // TODO: Replace below dummy content with <TrailCard /> component
          }
          <TrailCardDummy trailName="Some cool trail"/>
          <TrailCardDummy trailName="Another trail"/>
          <TrailCardDummy trailName="A third trail"/>
          <TrailCardDummy trailName="Dummy trail"/>
          <TrailCardDummy trailName="Maybe very hard trail"/>
          <TrailCardDummy trailName="Looking trail"/>
          <TrailCardDummy trailName="Styling trail"/>
        </div>
    </div>
  );
};

