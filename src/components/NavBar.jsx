import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

export const NavBar = ({
  
}) => {
  const location = useLocation();
  const navigate = useNavigate();
 

  const goToHomePage = () => {
    navigate("/", { state: { userLocation: "18.0649,59.3293" } });
  };

  return (
   <div className="navbar">
    <NavLink  className="navbar-btn" to="/" onClick={goToHomePage}>
      Go to Home
    </NavLink>
    <NavLink  className="navbar-btn" to="/liked-trails" >
      My Liked Trails
    </NavLink>
  </div>
  );
};
