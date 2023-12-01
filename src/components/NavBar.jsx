import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/trails">All Trails</NavLink>
      <NavLink to="/trails?filter=favorites">Favorite Trails</NavLink>
      <NavLink to="/trails-page">TrailPage</NavLink>
    </nav>
  );
};

// The names are just examples
//Link to trailpage added for test purposes
