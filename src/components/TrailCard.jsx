import React from 'react';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "../styles/TrailCard.css";



export const TrailCard = ({ trailObject}) => {
  return (
    <div className="trail-card">
    <Link key={trailObject.id} to={"/"}>
    <img src={`https://img.oastatic.com/img/${trailObject.primaryImage.id}/.jpg`}></img> 
        <h2>{trailObject.title}</h2> 
        <p>Duration: ({trailObject.time.min})</p>
     </Link>
     </div>
  );
};