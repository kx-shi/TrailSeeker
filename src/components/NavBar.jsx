import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import '../styles/NavBar.css';

export const NavBar = ({
    trailObjects,
    setTrailObjects,
    backupTrailObjects, 
    setBackupTrailObjects 
  }) => {
  
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [rankingFilter, setRankingFilter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let filteredTrails = {};

  const handleFilter = () => {
    setBackupTrailObjects([...trailObjects]);
    if (difficultyFilter.length > 0) {
      console.log("trailObjects", trailObjects);
      const difficulties = trailObjects.filter((trail) => trail.difficulties);
      filteredTrails = difficulties.filter(
        (d) => d.difficulties.difficulty[0].value === difficultyFilter
      );
    }
    console.log("filtered", filteredTrails);
    setTrailObjects(filteredTrails);
  };
  const handleRestoreOriginal = () => {
    if (backupTrailObjects) {
      setTrailObjects([...backupTrailObjects]);
      setBackupTrailObjects(null);
    }
  };
  const goToHomePage = () => {
    navigate("/", { state: { userLocation: "18.0649,59.3293" } });
  };

  const handleApplyFilter = () => {
    handleRestoreOriginal();
    handleFilter();
  };

  return (
    <div className="filter-container">
      <select
        value={difficultyFilter || []}
        onChange={(e) =>
          setDifficultyFilter(e.target.value === "" ? null : e.target.value)
        }
      >
        <option value="">All Difficulties</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select
        value={ratingFilter || ""}
        onChange={(e) =>
          setRatingFilter(
            e.target.value === "" ? null : parseInt(e.target.value)
          )
        }
      >
        <option value="">All Ratings</option>
        {/*add options for rating */}
      </select>
      <input
        type="number"
        placeholder="Enter Ranking"
        value={rankingFilter || ""}
        onChange={(e) =>
          setRankingFilter(
            e.target.value === "" ? null : parseInt(e.target.value)
          )
        }
      />
      <button className="navbar-btn" onClick={handleApplyFilter}>Apply Filters</button>
      <button className="navbar-btn" onClick={goToHomePage}>Go to Home</button>
      <NavLink to="/trails-page">TrailPage</NavLink>
    </div>
      
      
  );
};
