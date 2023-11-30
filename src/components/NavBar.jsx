import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBar = ({ trailObjects, setFilteredTrails }) => {
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [rankingFilter, setRankingFilter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilter = () => {
    const filteredTrails = trailObjects.filter((trail) => {
      const meetsDifficulty =
      difficultyFilter === null ||
      (trail.difficulties &&
        Array.isArray(trail.difficulties) &&
        trail.difficulties.some(difficulty => difficulty && difficulty.value.toString() === difficultyFilter.toString()));
   
      const meetsRating =
        ratingFilter === null || trail.rating.condition >= ratingFilter;
      const meetsRanking =
        rankingFilter === null || trail.ranking >= rankingFilter;
        console.log("difficultyFilter", difficultyFilter);
        console.log("trail.difficulties", trail.difficulties);
        console.log("meetsDifficulty", meetsDifficulty);
      return meetsDifficulty && meetsRating && meetsRanking;
    });

    setFilteredTrails(filteredTrails);
  };

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
