import React from "react";

const TrailElevationProfile = ({ elevationData }) => {
  return (
    <div className="trail-elevation-profile">
      <img src={elevationData.url} alt="Elevation Profile" />
      {/* Display other elevation information */}
    </div>
  );
};

export default TrailElevationProfile;