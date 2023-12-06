import React, { useEffect, useState } from "react";
import "../styles/Heart.css";
import { useSelector, useDispatch } from "react-redux";
import { like } from "../reducers/heart";

export const Heart = ( {trailID} ) => {
  const [liked, setLiked] = useState(false); /**get state from store */
  const likes = useSelector((state) => state.like.likedList);
  const dispatch = useDispatch();

  const setHeartSymbol = () => {
    dispatch(like.actions.toggleHeart( { id: trailID } ));
    // if (liked === false) {
    //   setLiked(true);
    // } else if (liked === true) {
    //   setLiked(false);
    // }
  };

  useEffect(() => {
    const likeObject = likes.find((el) => el.id === trailID);
    if (likeObject != undefined) {
      setLiked(likeObject.isLiked);
    }else {
      setLiked(false);
    }
  });

  return (
    <div>
      <button className="heart" onClick={() => setHeartSymbol()}>
        <div>{liked === true && "♥"}</div>
        <div>{liked === false && "♡"}</div>
      </button>
    </div>
  );
};

// useEffect(() => {
//   // Update the document title using the browser API
//   document.title = `You clicked ${count} times`;
// });
