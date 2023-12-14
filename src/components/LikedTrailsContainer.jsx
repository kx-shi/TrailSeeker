import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTrails } from '../reducers/trails';
import { IntermediatePage } from './IntermediatePage';
import { TrailContainer } from './TrailContainer';
import { NavBar } from './NavBar';
import '../styles/TrailContainer.css'

export const LikedTrailsContainer = () => {
    const dispatch = useDispatch();
    const [likedTrailObjects, setlikedTrailObjects] = useState([]);
    const likedTrails = useSelector((state) => state.like.likedList);
    const trails = useSelector((state) => state.trails);
    const stableDispatch = useCallback(dispatch, []);

    useEffect(() => { // This effect is used once during component mounting
      if(trails.trailObjects.length == 0) {
        console.log("No trailobjects: ", trails)
        stableDispatch(fetchTrails());
      }
      filterLikedTrails()
    }, [trails, stableDispatch, likedTrails])

    const filterLikedTrails = () => {//Function that filter the original array based on which trails are liked 
      const likedTrailObjects = trails.trailObjects.filter((trail) => {
        return likedTrails.some((like) => like.id === trail.id && like.isLiked)
      });
      setlikedTrailObjects(likedTrailObjects);
    }

    return (
      <div className="liked-trails">
          <NavBar />
          {(trails.loading && <IntermediatePage message="Loading..." />)}
          {(!trails.loading && trails.error ? <IntermediatePage message="Error, something went wrong. Try refreshing the page" /> : null)}
          {(!trails.loading && likedTrailObjects.length ? <TrailContainer trailObjects={likedTrailObjects} /> : <IntermediatePage message="No liked trails..." />)}
      </div>
    );
}

