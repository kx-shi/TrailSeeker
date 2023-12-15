export const TrailDescriptionInfo = ({ gettingThere, tips }) => {
  return (
    <div className="trail-description-info">
      <h2>Getting There</h2>
      {gettingThere ? (
        <p dangerouslySetInnerHTML={{ __html: gettingThere }} />
      ) : (
        <p>No information available</p>
      )}
      <h3>Tips for the Tour</h3>
      {tips ? (
        <p dangerouslySetInnerHTML={{ __html: tips }} />
      ) : (
        <p>No tips available</p>
      )}
    </div>
  );
};