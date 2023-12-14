import { CommentContainer } from "./CommentContainer";
import { NavBar } from "./NavBar";
import { useParams } from "react-router-dom";
import TrailDetails from "./TrailDetails";
import '../styles/TrailPage.css'

export const TrailPage = () => {
  const { trailId } = useParams();
  return (
    <div className="trail-page-container">
      <NavBar />
      <TrailDetails trailId={trailId} />
      <CommentContainer trailID={trailId} />
    </div>
  );
};