import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from './Heart';
import '../styles/TrailCard.css';

export const TrailCard = ({ trailObject }) => {
  return (
    <div className="trail-card">
      <Link key={trailObject.id} to={`/trails/${trailObject.id}`}>
        <img className="card-img" src={`https://img.oastatic.com/img/${trailObject.primaryImage.id}/.jpg`} alt={trailObject.title} />
        <h2>{trailObject.title}</h2>
      </Link>
      <p className="duration">
        Duration: {Math.floor(trailObject.time.min / 60)} h{" "}
        {trailObject.time.min % 60} min
      </p>
      <div className="trail-card-flex">
        <img
          className="activity-category"
          src={trailObject.category.iconUrl}
          alt={trailObject.category.name}
          title={trailObject.category.name}
        ></img>
        <Heart trailID={trailObject.id}/>
      </div>
    </div>
  );
};