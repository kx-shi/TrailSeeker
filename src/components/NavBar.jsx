import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBar = ({ trailObjects, setTrailObjects,setBackupTrailObjects,backupTrailObjects }) => {
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [rankingFilter, setRankingFilter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let filteredTrails ={};
  const handleFilter = () => {
    handleRestoreOriginal()
    setBackupTrailObjects([...trailObjects]);
if (difficultyFilter.length>0 ){
  const difficulties = trailObjects.filter((trail) => trail.difficulties);
 filteredTrails = difficulties.filter((d)=>d.difficulties.difficulty[0].value===difficultyFilter)
}
  console.log("filtereed", filteredTrails)
  setTrailObjects(filteredTrails);
  };
  const handleRestoreOriginal = () => {
    if (backupTrailObjects) {
      setTrailObjects(backupTrailObjects);
      setBackupTrailObjects(null);
    }
  }
  const goToHomePage = () => {
    navigate("/", { state: { userLocation: "18.0649,59.3293" } });
  };
  return (
    <div>
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
      <button onClick={handleFilter}>Apply Filters</button>
      <button onClick={goToHomePage}>Go to Home</button>
    </div>
    //   <nav>

    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/trails">All Trails</NavLink>
    //     <NavLink to="/trails?filter=favorites">Favorite Trails</NavLink>

    // </nav>
  );
};
