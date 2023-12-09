import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { TrailPage } from "./components/TrailPage";
import { LikedTrailsContainer } from "./components/LikedTrailsContainer";

export const routes = () => {
  const userLocation = "18.0649,59.3293";
  const favorites = true;
const children= true;
  return (
    <Routes>
      <Route path="/" element={<HomePage userLocation={userLocation} savedTrails={false}/>} />
      <Route path="/trails/:trailId" element={<TrailPage />} />
      <Route path="/trails-page" element={<TrailPage />} />
      <Route path="/liked-trails" element={<LikedTrailsContainer />} />
    </Routes>
  );
};
