import { NavLink, useLocation, useNavigate } from "react-router-dom";
import '../styles/NavBar.css';

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to="/"><p>Home</p></NavLink>
      <NavLink to="/trails"><p>All Trails</p></NavLink>
      <NavLink to="/trails?filter=favorites"><p>Favorite Trails</p></NavLink>
      <NavLink to="/trails-page"><p>TrailPage</p></NavLink>
    </nav>
  );
};

// The names are just examples
//Link to trailpage added for test purposes
