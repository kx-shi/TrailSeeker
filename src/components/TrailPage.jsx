import React from "react";
import { Heart } from "./Heart";
import { CommentContainer } from "./CommentContainer";
import { NavBar } from "./NavBar";
import { useParams } from "react-router-dom";
import TrailDetails from "./TrailDetails";

export const TrailPage = () => {
  const { trailId } = useParams();
  return (
    <div>
      <NavBar />
      <TrailDetails trailId={trailId} />
      <Heart trailID={trailId} />
      <CommentContainer />
    </div>
  );
};
