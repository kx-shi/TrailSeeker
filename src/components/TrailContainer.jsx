import "../styles/TrailContainer.css";
import { TrailCard } from "./TrailCard";

export const TrailContainer = ({ trailObjects }) => {
  return (
    <div className="trail-container">
      {trailObjects && trailObjects.length > 0 ? (
        // Display TrailCards if there are trails
        <div className="card-container">
          {trailObjects.map((trail) => (
            <div key={trail.id}>
              <TrailCard trailObject={trail} />
            </div>
          ))}
        </div>
      ) : (
        // Display message when no trails are available
        <div className="no-trails-message">
          <h3>No Trail Is Available</h3>
          <p>Sorry, we couldn`&apos`t find any trails for your filter.</p>
        </div>
      )}
    </div>
  );
};
