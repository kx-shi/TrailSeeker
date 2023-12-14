import { useState, useEffect } from "react";
import Select from "react-select";
import "./../styles/Filter.css";

/* Filter options */
const difficultyOptions = [
  { value: "", label: "All Difficulties"},
  { value: "1", label: "Super easy"},
  { value: "2", label: "Easy"},
  { value: "3", label: "Medium"},
  { value: "4", label: "Hard"},
]
const ratingOptions = [
  { value: "", label: "All Ratings"},
  { value: "1", label: "1"},
  { value: "2", label: "2"},
  { value: "3", label: "3"},
  { value: "4", label: "4"},
  { value: "5", label: "5"},
  { value: "6", label: "6"},
]
const categoryOptions = [
  { value: "", label: "All Categories"},
  { value: "8982351", label: "Racing Bike"},
  { value: "8982343", label: "Hiking Tour Trail"},
  { value: "8982344", label: "Long Distance Hiking Trail"},
]

/* Styling for Select-components */
const filterStyles = (open) => ({
  singleValue: (baseStyles) => ({ ...baseStyles, color: "#000" }),
  container: ((baseStyles) => ({
    ...baseStyles,
    margin: "0 auto",
    width: "152px",
    height: "20px",
    fontSize: "13px"
  })),
  control: ((baseStyles) => ({
    ...baseStyles,
    marginTop: "25px",
  })),
  menu: (baseStyles) => ({
    ...baseStyles,
    transition: "all 0.2s ease-in-out"
  }),
  option: (baseStyles, {isFocused}) => ({
    ...baseStyles,
    backgroundColor: isFocused ? "#DADBA3" : null,
    color: "black"
  })
});

export const Filter = ({ 
  trailObjects,
  setTrailObjects,
  backupTrailObjects,
  setBackupTrailObjects,
}) => {
  const [difficultyFilter, setDifficultyFilter] = useState(difficultyOptions[0]);
  const [ratingFilter, setRatingFilter] = useState(ratingOptions[0]);
  const [categoryFilter, setCategoryFilter] = useState(categoryOptions[0]);
  const [difficultyFilterOpen, setDifficultyFilterOpen] = useState(false)
  const [ratingFilterOpen, setRatingFilterOpen] = useState(false)
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false)

  /* Filtering logic */
  useEffect(() => {
    handleFilter();
  }, [difficultyFilter, ratingFilter, categoryFilter]);

  const handleFilter = () => {
    if (!Array.isArray(trailObjects)) {
      return;
    }
  
    setBackupTrailObjects([...trailObjects]);
  
    let filteredTrails = trailObjects;
  
    if (difficultyFilter !== null && difficultyFilter.value.length > 0) {
      const difficulties = trailObjects.filter((trail) => trail.difficulties);
      filteredTrails = difficulties.filter(
        (d) => d.difficulties.difficulty[0].value === difficultyFilter.value
      );
    }
  
    if (ratingFilter !== null && ratingFilter.value.length > 0) {
      filteredTrails = filteredTrails.filter(
        (trail) => trail.rating.qualityOfExperience.toString() === ratingFilter.value
      );
    }
  
    if (categoryFilter !== null && categoryFilter.value.length > 0) {
      filteredTrails = filteredTrails.filter(
        (trail) => trail.category.id === categoryFilter.value
      );
    }
  
    setTrailObjects(filteredTrails);
  };


  return (
    <div className="filter-container">
      <div className="filter-select-click"
        onClick={() =>{
          setDifficultyFilterOpen(!difficultyFilterOpen)
          setRatingFilterOpen(false)
          setCategoryFilterOpen(false)
        }}>
        <Select
          aria-label="difficulty-filter"
          className="filter-selects"
          options={difficultyOptions}
          placeholder="Select difficulty"
          defaultValue={{label: "All Difficulties", value: ""}}
          value={difficultyFilter}
          onChange={(difficulty) => {
            setRatingFilter(ratingOptions[0]);
            setCategoryFilter(categoryOptions[0]);
            setDifficultyFilter(difficulty === "" ? null : difficulty);
          }}
          isSearchable={false}
          styles={filterStyles(difficultyFilterOpen)}
        />
      </div>
      <div className="filter-select-click"
        onClick={() =>{
          setDifficultyFilterOpen(false)
          setRatingFilterOpen(!ratingFilterOpen)
          setCategoryFilterOpen(false)
        }}>
        <Select
          aria-label="rating-filter"
          className="filter-selects"
          options={ratingOptions}
          placeholder="Select rating"
          defaultValue={{label: "All Ratings", value: ""}}
          value={ratingFilter}
          onChange={(rating) => {
            setDifficultyFilter(difficultyOptions[0]);
            setCategoryFilter(categoryOptions[0]);
            setRatingFilter(rating === "" ? null : rating);
          }}
          isSearchable={false}
          styles={filterStyles(ratingFilterOpen)}
        />
      </div>
      <div className="filter-select-click"
        onClick={() =>{
          setRatingFilterOpen(false)
          setDifficultyFilterOpen(false)
          setCategoryFilterOpen(!categoryFilterOpen)
        }}>
        <Select
          aria-label="category-filter"
          className="filter-selects"
          options={categoryOptions}
          placeholder="Select category"
          defaultValue={{label: "All Categories", value: ""}}
          value={categoryFilter}
          onChange={(category) => {
            setDifficultyFilter(difficultyOptions[0]);
            setRatingFilter(ratingOptions[0]);
            setCategoryFilter(category.value === "" ? null : category);
          }}
          isSearchable={false}
          styles={filterStyles(categoryFilterOpen)}
        />
      </div>
    </div>
  );
};