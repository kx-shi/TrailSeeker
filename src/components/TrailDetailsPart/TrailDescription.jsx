import React from "react";

const TrailDescription = ({ description }) => {
  return (
    <div className="trail-description">
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default TrailDescription;