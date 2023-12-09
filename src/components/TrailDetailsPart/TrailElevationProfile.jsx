import React from "react";

const TrailElevationProfile = ({ elevationData, trailId }) => {
  return (
    <div className="trail-elevation-container">
      <h3 className="text-left">Visual Information</h3>
      <div className="trail-elevation-profile">
        {elevationData.url && (
          <img src={elevationData.url} alt="Elevation Profile" />
        )}
        <img
          src={`https://www.outdooractive.com/api/staticmap?i=${trailId}&size=medium&project=outdooractive`}
          alt="Trail Map"
        />
      </div>
    </div>
  );
};

export default TrailElevationProfile;
