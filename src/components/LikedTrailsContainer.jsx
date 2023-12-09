/**
 * Component that filters on liked trails and sends a filtered trailObjects array to TrailContainer
 * It uses React redux to get:
 *  - All trails from 'trails'
 *  - Liked trails from 'like'
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Action imports from reducers
import { fetchTrails } from '../reducers/trails';
// Component imports
import { TrailContainer } from './TrailContainer';
import { NavBar } from './NavBar';
// Style imports
import '../styles/TrailContainer.css'

export const LikedTrailsContainer = () => {
    const dispatch = useDispatch();
    const [likedTrailObjects, setlikedTrailObjects] = useState([]);
    const likedTrails = useSelector((state) => state.like.likedList);
    const trails = useSelector((state) => state.trails.trailObjects);

    useEffect(() => { // This effect is used once during component mounting
      dispatch(fetchTrails());
      filterLikedTrails()
    }, [])

    useEffect(() => { // This effect is used on changes in liked trails
      filterLikedTrails()
    }, [likedTrails]);

    /**
     * Function that filter the original array based on which trails are liked 
     * */
    const filterLikedTrails = () => {
      const likedTrailObjects = trails.filter((trail) => {
        return likedTrails.some((like) => like.id === trail.id && like.isLiked)
      });
      console.log("Liked trails: ", likedTrailObjects)
      setlikedTrailObjects(likedTrailObjects);
    }

    return (
      <div className="liked-trails">
          <NavBar />
          <TrailContainer trailObjects={likedTrailObjects} />
      </div>
    );
}

