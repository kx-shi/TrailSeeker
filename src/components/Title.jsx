import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export const Title = () => {
  return (
    <Link to="/">
      <h1 className="app-name">TrailSeeker</h1>
    </Link>
  );
};