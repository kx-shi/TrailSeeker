import React from "react";

const TrailDescriptionInfo = ({ gettingThere, tips }) => {
  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(gettingThere);

  return (
    <div className="trail-description-info">
      <h3>Getting There</h3>
      {hasHtmlTags ? (
        <div dangerouslySetInnerHTML={{ __html: gettingThere }} />
      ) : (
        <p>{(gettingThere !== undefined) ? gettingThere : "No information available"}</p>
      )}
      <h3>Tips for the Tour</h3>
      <p>{(tips !== undefined) ? tips : "No tips available"}</p>
    </div>
  );
};

export default TrailDescriptionInfo;