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
    <div>
     <NavLink to="/" onClick={goToHomePage} activeClassName="active-link">
        Go to Home
      </NavLink>
      <NavLink to="/trails-page" activeClassName="active-link" >TrailPage</NavLink>
    </div>
  );
};
