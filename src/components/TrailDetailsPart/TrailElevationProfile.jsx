import React from "react";

const TrailElevationProfile = ({ elevationData, trailId }) => {
  return (
    <div className="trail-elevation-profile">
      {elevationData.url && (
        <img src={elevationData.url} alt="Elevation Profile" />
      )}
      <img
        src={`https://www.outdooractive.com/api/staticmap?i=${trailId}&size=medium&project=outdooractive`}
        alt="Trail Map"
      />
    </div>
  );
};

export default TrailElevationProfile;
