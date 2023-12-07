import React, { useEffect, useState } from "react";
import "../styles/Heart.css";
import { useSelector, useDispatch } from "react-redux";
import { like } from "../reducers/heart";

export const Heart = ({ trailID }) => {
  const [liked, setLiked] = useState(false);
  const likes = useSelector((state) => state.like.likedList);
  const dispatch = useDispatch();

  const setHeartSymbol = () => {
    dispatch(like.actions.toggleHeart({ id: trailID }));
  };

  useEffect(() => {
    const likeObject = likes.find((el) => el.id === trailID);
    if (likeObject != undefined) {
      setLiked(likeObject.isLiked);
    } else {
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