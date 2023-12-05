import React from "react";
import { Heart } from "./Heart";
import { CommentContainer } from "./CommentContainer";
import { NavBar } from "./NavBar";

export const TrailPage = () => {
  return (
    <div>
      <div>TrailPage</div>
      <NavBar/>
      <Heart />
      <CommentContainer />
    </div>
  );
};
// save comment to global state
// save like to global state
