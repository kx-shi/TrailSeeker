import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrails } from "../reducers/trails";
import { IntermediatePage } from "./IntermediatePage";
import { TrailContainer } from "./TrailContainer";
import { NavBar } from "./NavBar";
import "../styles/TrailContainer.css";

export const LikedTrailsContainer = () => {
  const dispatch = useDispatch();
  const [likedTrailObjects, setlikedTrailObjects] = useState([]);
  const likedTrails = useSelector((state) => state.like.likedList);
  const trails = useSelector((state) => state.trails);
  const stableDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    const filterLikedTrails = () => {
      // Function that filters the original array based on which trails are liked
      const likedTrailObjects = trails.trailObjects.filter((trail) => {
        return likedTrails.some((like) => like.id === trail.id && like.isLiked);
      });
      setlikedTrailObjects(likedTrailObjects);
    };

    // This effect is used once during component mounting
    if (trails.trailObjects.length === 0) {
      stableDispatch(fetchTrails());
    }
    filterLikedTrails();
  }, [trails, stableDispatch, likedTrails]);

  return (
    <div className="liked-trails">
      <NavBar />
      {trails.loading && <IntermediatePage message="Loading..." />}
      {!trails.loading && trails.error ? (
        <IntermediatePage message="Error, something went wrong. Try refreshing the page" />
      ) : null}
      {!trails.loading && likedTrailObjects.length ? (
        <TrailContainer trailObjects={likedTrailObjects} />
      ) : (
        <IntermediatePage message="No liked trails..." />
      )}
    </div>
  );
};
