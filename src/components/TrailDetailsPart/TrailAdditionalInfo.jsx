import React from "react";

const TrailAdditionalInfo = ({ additionalInfo }) => {
  return (
    <div className="trail-additional-info">
      <div dangerouslySetInnerHTML={{ __html: additionalInfo }} />
    </div>
  );
};

export default TrailAdditionalInfo;