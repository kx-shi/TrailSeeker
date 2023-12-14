import "../../styles/GeneralInformation.css";

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours > 0 ? `${hours}h ` : ""}${
    remainingMinutes > 0 ? `${remainingMinutes}m` : ""
  }`;
};

export const GeneralInformation = ({
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
          <img
            className="activity-category"
            src={category.iconUrl}
            alt={category.name}
            title={category.name}
          />
          <p>{category.name}</p>
        </div>
      )}
      <div className="general-information-section">
        <img
          src="/DurationIcon.png"
          alt="Duration Icon"
          className="info-icon"
          title="duration"
        />
        <p>{`${formatTime(time.min)}`}</p>
      </div>
      <div className="general-information-section">
        <img
          src="/DistanceIcon.png"
          alt="Distance Icon"
          className="info-icon"
          title="distance"
        />
        <p>{`${(length / 1000).toFixed(1)} km`}</p>
      </div>
      {difficulties && (
        <div className="general-information-section">
          <img
            src="/DifficultyIcon.png"
            alt="Difficulty Icon"
            className="info-icon"
          />
          <p>
            {difficulties.difficulty[0].type} |{" "}
            {difficulties.difficulty[0].value}
          </p>
        </div>
      )}
      <div className="general-information-section">
        <img
          src="/LowestPointIcon.png"
          alt="Min Altitude Icon"
          className="info-icon"
          title="lowest point"
        />
        <p>{`${elevation.minAltitude} m`}</p>
      </div>
      <div className="general-information-section">
        <img
          src="/HighestPointIcon.png"
          alt="Max Altitude Icon"
          className="info-icon"
          title="highest point"
        />
        <p>{`${elevation.maxAltitude} m`}</p>
      </div>
      <div className="general-information-section">
        <img
          src="/AscentIcon.png"
          alt="Ascent Icon"
          className="info-icon"
          title="ascent"
        />
        <p>{`${elevation.ascent} m`}</p>
      </div>
      <div className="general-information-section">
        <img
          src="/DescentIcon.png"
          alt="Descent Icon"
          className="info-icon"
          title="descent"
        />
        <p>{`${elevation.descent} m`}</p>
      </div>
      <div className="general-information-section rating-info">
        <img
          src="/RatingIcon.png"
          alt="Rating Icon"
          className="info-icon"
          title="rating"
        />
        {rating && (
          <div>
            <p>{`${rating.qualityOfExperience}`}</p>
          </div>
        )}
      </div>
      {season && (
        <div className="general-information-section season-info">
          <img
            src="/CalendarIcon.png"
            alt="Season Icon"
            className="info-icon"
            title="best seasons"
          />
          <p>{`${Object.entries(season)
        .filter(([, available]) => available)
        .map(([month]) => month)
        .join(", ")}`}</p>
        </div>
      )}
    </div>
  );
};
