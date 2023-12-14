import { useEffect, useState } from "react";
import {GeneralInformation} from "./TrailDetailsPart/GeneralInformation";
import { Heart } from "./Heart";
import {TrailOverview} from "./TrailDetailsPart/TrailOverview";
import {TrailElevationProfile} from "./TrailDetailsPart/TrailElevationProfile";
import {TrailDescription} from "./TrailDetailsPart/TrailDescription";
import {TrailDescriptionInfo} from "./TrailDetailsPart/TrailDescriptionInfo";
import {TrailImages} from "./TrailDetailsPart/TrailImages";
import {TrailAdditionalInfo} from "./TrailDetailsPart/TrailAdditionalInfo";
import "../styles/TrailDetails.css";

const TrailDetails = ({ trailId }) => {
  const [trailData, setTrailData] = useState(null);

  useEffect(() => {
    const fetchTrailData = async () => {
      const trailUrl = `https://www.outdooractive.com/api/project/api-dev-oa/oois/${trailId}?key=yourtest-outdoora-ctiveapi&lang=en`;

      const headers = new Headers({
        Accept: "application/json",
      });

      try {
        const response = await fetch(trailUrl, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.tour && data.tour.length > 0) {
          setTrailData(data.tour[0]);
        } else {
          console.error("Invalid trail data:", data);
          setTrailData(null);
        }
      } catch (error) {
        console.error("Error fetching trail data:", error);
        setTrailData(null);
      }
    };

    fetchTrailData();
  }, [trailId]);

  if (!trailData) {
    return <p>Loading trail data...</p>;
  }

  return (
    <div className="trail-details">
      <TrailImages images={trailData.images} />
      <div className="trail-details-grid">
        <div className="text-left">
          <div className="trail-details-flex">
            <h1>{trailData.title}</h1>
            <Heart trailID={trailId}/>
          </div>
          <TrailDescription description={trailData.longText} />
          <TrailAdditionalInfo additionalInfo={trailData.additionalInformation} />
          <TrailDescriptionInfo
            gettingThere={trailData.gettingThere}
            tips={trailData.tip}
          />
        </div>
        <GeneralInformation
          category={trailData.category}
          difficulty={trailData.difficulties}
          elevation={trailData.elevation}
          time={trailData.time}
          rating={trailData.rating}
          season={trailData.season}
          length={trailData.length}
        />
      </div>
      <TrailElevationProfile elevationData={trailData.elevationProfile} trailId={trailId} />
    </div>
  );
};

export default TrailDetails;
