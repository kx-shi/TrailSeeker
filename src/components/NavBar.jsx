import { NavLink, useLocation,useNavigate  } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <nav>
    
      <NavLink to="/">Home</NavLink>
      <NavLink to="/trails">All Trails</NavLink>
      <NavLink to="/trails?filter=favorites">Favorite Trails</NavLink>
    
  </nav>
  );
};


