import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
  return (
    <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/trails">All Trails</NavLink></li>
      <li><NavLink to="/trails?filter=favorites">Favorite Trails</NavLink></li>
    </ul>
  </nav>
  );
};


// The names are just examples