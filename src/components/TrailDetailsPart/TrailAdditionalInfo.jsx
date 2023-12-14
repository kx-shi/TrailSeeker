export const TrailAdditionalInfo = ({ additionalInfo }) => {
  return (
    <div className="trail-additional-info">
      <div dangerouslySetInnerHTML={{ __html: additionalInfo }} />
    </div>
  );
};