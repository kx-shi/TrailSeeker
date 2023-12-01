import React, { useState } from "react";

export const Heart = () => {
  const [liked, setLiked] = useState(false);

  const setHeartSymbol = () => {
    if (liked === false) {
      setLiked(true);
      console.log("if liked", liked);
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
