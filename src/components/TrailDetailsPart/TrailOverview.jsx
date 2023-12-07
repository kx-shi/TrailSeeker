import React from "react";

const TrailOverview = ({ data }) => {
  return (
    <div className="trail-overview">
      <h1>{data.title}</h1>
      {/* Display other general information */}
    </div>
  );
};

export default TrailOverview;