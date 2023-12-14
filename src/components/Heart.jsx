import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { like } from "../reducers/heart";
import "../styles/Heart.css";

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
  }, [likes, trailID]);

  return (
    <div>
      <button className="heart" onClick={() => setHeartSymbol()}>
        <span title="Remove trail from likes">{liked === true && "♥"}</span>
        <span title="Add trail to likes">{liked === false && "♡"}</span>
      </button>
    </div>
  );
};
