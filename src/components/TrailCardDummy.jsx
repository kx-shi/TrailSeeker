/* Just a dummy component for styling purposes */
import React from 'react';
import { Heart } from './Heart';
import '../styles/TrailCardDummy.css'

export const TrailCardDummy = ( {trailName} ) => {
    return(
        <div className="trail-card">
            <h3>{trailName}</h3>
            <img src="https://dummyimage.com/300x200/eff1ed/373d20" width="300" height="200" aria-label='trail' />
            <div className="card-overview">
                <p>length: 2km</p>
                <Heart />
            </div>
      </div>
    )
}