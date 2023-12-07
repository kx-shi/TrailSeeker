import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { TrailCard } from './TrailCard';
import '../styles/TrailContainer.css'

export const LikedTrailsContainer = ({ trailObjects }) => {
    const [likedTrailObjects, setlikedTrailObjects] = useState([]);
    const likedTrails = useSelector((state) => state.like.likedList);

    useEffect(() => {
        const likedTrailObjects = trailObjects.filter((trail) => {
            return likedTrails.some((like) => like.id === trail.id && like.isLiked)
        });
        setlikedTrailObjects(likedTrailObjects);
    }, [likedTrails]);

    return (
        <div className="trail-container">
        <div className="card-container">
          {likedTrailObjects.map((trail) => (
            <div key={trail.id}>
                <TrailCard trailObject={trail} />
            </div>
          ))}
        </div>
      </div>
    );
}

