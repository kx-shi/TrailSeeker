import React from "react";
import { useParams } from "react-router-dom";
import { Heart } from "./Heart";
import { CommentContainer } from "./CommentContainer";
import { NavBar } from "./NavBar";

export const TrailPage = () => {
  const params = useParams(); // will return the trail ID
  console.log(`TrailPage: params -> ${params.id}`)
  return (
    <div>
      <div>TrailPage</div>
      <NavBar/>
      <Heart />
      <CommentContainer trailID={params.id} />
    </div>
  );
};
// save comment to global state
// save like to global state
