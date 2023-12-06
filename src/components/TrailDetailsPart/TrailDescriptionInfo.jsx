import React from "react";

const TrailDescriptionInfo = ({ gettingThere, tips }) => {
  return (
    <div className="trail-description-info">
      <h2>Trail Description</h2>
      <h3>Getting There</h3>
      <p>{gettingThere}</p>

      <h3>Tips for the Tour</h3>
      <p>{tips}</p>
    </div>
  );
};

export default TrailDescriptionInfo;
