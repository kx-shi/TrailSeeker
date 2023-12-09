import React from "react";
import "../../styles/GeneralInformation.css";

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours > 0 ? `${hours}h ` : ""}${
    remainingMinutes > 0 ? `${remainingMinutes}m` : ""
  }`;
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
      {category && (
        <div className="general-information-section">
          <img src="/vite.svg" alt="Category Icon" className="info-icon" />
          <p>{category.name}</p>
        </div>
      )}
      <div className="general-information-section">
        <img src="/DurationIcon.png" alt="Duration Icon" className="info-icon" />
        <p>{`${formatTime(time.min)}`}</p>
      </div>
      <div className="general-information-section">
        <img src="/DistanceIcon.jpg" alt="Distance Icon" className="info-icon" />
        <p>{`${(length / 1000).toFixed(1)} km`}</p>
      </div>
      {difficulties && (
        <div className="general-information-section">
          <img src="/DifficultyIcon.png" alt="Difficulty Icon" className="info-icon" />
          <p>
            {difficulties.difficulty[0].type} | {difficulties.difficulty[0].value}
          </p>
        </div>
      )}
      <div className="general-information-section">
        <img src="/LowestPointIcon.png" alt="Min Altitude Icon" className="info-icon" />
        <p>{`${elevation.minAltitude} m`}</p>
      </div>
      <div className="general-information-section">
        <img src="/HighestPointIcon.png" alt="Max Altitude Icon" className="info-icon" />
        <p>{`${elevation.maxAltitude} m`}</p>
      </div>
      <div className="general-information-section">
        <img src="/AscentIcon.png" alt="Ascent Icon" className="info-icon" />
        <p>{`${elevation.ascent} m`}</p>
      </div>
      <div className="general-information-section">
        <img src="/DescentIcon.png" alt="Descent Icon" className="info-icon" />
        <p>{`${elevation.descent} m`}</p>
      </div>
      <div className="general-information-section rating-info">
        <img src="/RatingIcon.png" alt="Rating Icon" className="info-icon" />
        {rating && (
          <div>
            <p>{`Cond: ${rating.condition} Dif: ${rating.difficulty} Teq: ${rating.technique} Exp: ${rating.qualityOfExperience} Lndscp: ${rating.landscape}`}</p>
          </div>
        )}
      </div>
      {season && (
        <div className="general-information-section season-info">
          <img src="/CalendarIcon.png" alt="Season Icon" className="info-icon" />
          <p>{`: ${Object.entries(season)
            .filter(([_month, available]) => available)
            .map(([month]) => month)
            .join(", ")}`}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;