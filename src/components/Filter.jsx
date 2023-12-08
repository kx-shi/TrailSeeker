import { useState, useEffect } from "react";
import './../styles/Filter.css';
export const Filter = ({ 
  trailObjects,
  setTrailObjects,
  backupTrailObjects,
  setBackupTrailObjects,
}) => {
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    handleFilter();
  }, [difficultyFilter, ratingFilter, categoryFilter]);

  let filteredTrails = {};
  const handleFilter = () => {
    if (!Array.isArray(trailObjects)) {
        return;
      }
    setBackupTrailObjects([...trailObjects]);
    if (difficultyFilter !== null && difficultyFilter.length > 0) {
      const difficulties = trailObjects.filter((trail) => trail.difficulties);
      filteredTrails = difficulties.filter(
        (d) => d.difficulties.difficulty[0].value === difficultyFilter
      );
    }

    if (ratingFilter !== null && ratingFilter.length > 0) {
      filteredTrails = trailObjects.filter(
        (trail) => trail.rating.qualityOfExperience.toString() === ratingFilter
      );
    }
    
    if (categoryFilter!==null && categoryFilter.length > 0) {
        filteredTrails= trailObjects.filter(
           (trail) => trail.category.id === categoryFilter
        );
    }

    if (typeof filteredTrails!== 'undefined' && filteredTrails !== null && filteredTrails.length >0 ){
       setTrailObjects(filteredTrails); 
    }else{
        setTrailObjects(backupTrailObjects)
    }
    
  };

  return (
    <div className="filter-container">
      <select className="filter-selects"
        value={difficultyFilter || ""}
        onChange={(e) => {
          setRatingFilter('');
          setCategoryFilter('');
          setDifficultyFilter(e.target.value === "" ? null : e.target.value.toString());
        }}
     
      >
        <option value="">All Difficulties</option>
        <option value="1">Super easy</option>
        <option value="2">Easy</option>
        <option value="3">Medium</option>
        <option value="4">Hard</option>
        <option value="5">Super hard</option>
      </select>
      <select className="filter-selects"
        value={ratingFilter || ""}
        onChange={(e) => {
          setDifficultyFilter('');
          setCategoryFilter('');
          setRatingFilter(e.target.value === "" ? null : e.target.value.toString());
        }}
        multiple={false}
      >
        <option value="">All Ratings</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <select className="filter-selects"
        value={categoryFilter || ""}
        onChange={(e) => {
          setDifficultyFilter('');
          setRatingFilter('');
          setCategoryFilter(e.target.value === "" ? null : e.target.value.toString());
        }}
        multiple={false}
      >
        <option value="">All Category</option>
        <option value="8982351">Racing Bike</option>
        <option value="8982343">Hiking Tour Trail</option>
        <option value="8982344">Long Distance Hiking Trail</option>
      </select>
    </div>
  );
};
