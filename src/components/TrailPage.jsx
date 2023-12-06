import React from "react";
import { Heart } from "./Heart";
import { CommentContainer } from "./CommentContainer";
import { NavBar } from "./NavBar";
import { useParams } from "react-router-dom";

export const TrailPage = () => {
  const { trailId } = useParams();
  return (
    <div>
      <div>TrailPage</div>
      <NavBar/>
      <h1>Trail ID: {trailId}</h1>
      <Heart />
      <CommentContainer />
    </div>
  );
};