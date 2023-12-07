import React, { useEffect, useState } from "react";
import GeneralInformation from "./TrailDetailsPart/GeneralInformation";
import TrailOverview from "./TrailDetailsPart/TrailOverview";
import TrailElevationProfile from "./TrailDetailsPart/TrailElevationProfile";
import TrailDescription from "./TrailDetailsPart/TrailDescription";
import TrailDescriptionInfo from "./TrailDetailsPart/TrailDescriptionInfo";
import TrailImages from "./TrailDetailsPart/TrailImages";
import TrailAdditionalInfo from "./TrailDetailsPart/TrailAdditionalInfo";
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
      <div className="trail-details-flex">
        <TrailImages images={trailData.images} />
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
      <TrailOverview data={trailData} />
      <TrailElevationProfile elevationData={trailData.elevationProfile} trailId={trailId} />
      <TrailDescription description={trailData.longText} />
      <TrailDescriptionInfo
        gettingThere={trailData.gettingThere}
        tips={trailData.tips}
      />
      <TrailAdditionalInfo additionalInfo={trailData.additionalInformation} />
    </div>
  );
};

export default TrailDetails;
