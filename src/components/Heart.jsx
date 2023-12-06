import React, { useEffect, useState } from "react";
import "../styles/Heart.css";
import { useSelector } from "react-redux";

export const Heart = (trailID) => {
  const [liked, setLiked] = useState(false); /**get state from store */

  const likes = useSelector((state) => state.like.likedList);

  const setHeartSymbol = () => {
    // if (liked === false) {
    //   setLiked(true);
    // } else if (liked === true) {
    //   setLiked(false);
    // }
  };
  useEffect(() => {
    console.log("likes", likes);
    console.log("trailID", typeof trailID);
    const likeObject = likes.filter((el) => el.id === trailID);
    // console.log("likeObject", likeObject);
    if (likeObject != undefined) {
      console.log("LikeObject", likeObject);
      setLiked(likeObject.isLiked);
      console.log("found");
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
