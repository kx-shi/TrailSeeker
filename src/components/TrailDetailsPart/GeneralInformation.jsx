import React from "react";

const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    return `${hours > 0 ? `${hours}h ` : ''}${remainingMinutes > 0 ? `${remainingMinutes}m` : ''}`;
  };

const GeneralInformation = ({
  category,
  difficulties,
  elevation,
  time,
  rating,
  season,
  length,
}) => {
  return (
    <div className="general-information">
      <h2>General Information</h2>
      {category && <p>Category: {category.name}</p>}
      {difficulties && (
        <p>
          Difficulty: {difficulties.difficulty[0].type} |{" "}
          {difficulties.difficulty[0].value}
        </p>
      )}

      <h3>Elevation</h3>
      <p>Min Altitude: {elevation.minAltitude} m</p>
      <p>Max Altitude: {elevation.maxAltitude} m</p>
      <p>Total Ascent: {elevation.ascent} m</p>
      <p>Total Descent: {elevation.descent} m</p>
      <p>Tour Length: {(length / 1000).toFixed(1)} km</p>
      {time && <p>Tour Time: {formatTime(time.min)}</p>}

      <h3>Rating</h3>
      {rating && (
        <div>
          <p>Condition: {rating.condition}</p>
          <p>Difficulty: {rating.difficulty}</p>
          <p>Technique: {rating.technique}</p>
          <p>Quality of Experience: {rating.qualityOfExperience}</p>
          <p>Landscape: {rating.landscape}</p>
        </div>
      )}

      <h3>Season</h3>
      {season && (
        <div>
          <p>
            Best Seasons:{" "}
            {Object.entries(season)
              .filter(([_month, available]) => available)
              .map(([month]) => month)
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;
