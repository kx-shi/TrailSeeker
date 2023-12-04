import React, { useState } from "react";

export const Heart = (isLiked) => {
  const [liked, setLiked] = useState(false); /**get state from store */

  const setHeartSymbol = () => {
    if (liked === false) {
      setLiked(true);
    } else if (liked === true) {
      setLiked(false);
    }
  };

  return (
    <div>
      <button className="heart" onClick={() => setHeartSymbol()}>
        <div>{liked === true && "❤️"}</div>
        <div>{liked === false && "🤍"}</div>
      </button>
    </div>
  );
};
