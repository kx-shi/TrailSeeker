export const TrailDescription = ({ description }) => {
  return (
    <div className="trail-description">
      {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : <p>No description available</p>}
    </div>
  );
};
