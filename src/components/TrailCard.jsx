import React from 'react';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "../styles/TrailCard.css";

export const TrailCard = ({ trailObject }) => {

  return (
    <div className="trail-card">
      <Link key={trailObject.id} to={"/"}>
        <img className="card-img" src={`https://img.oastatic.com/img/${trailObject.primaryImage.id}/.jpg`} alt={trailObject.title}></img> 
        <h2>{trailObject.title}</h2> 
      </Link>
      <p className="duration">Duration: {Math.floor(trailObject.time.min / 60)} h {trailObject.time.min % 60} min</p>
      <img className="activity-category" src={trailObject.category.iconUrl} alt={trailObject.category.name} title={trailObject.category.name}></img> 
     </div>
  );
};

  /* Change the link to: <Link key={trailObject.id} to={`/trails/${trailObject.id}`}> */ 


