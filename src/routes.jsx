import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { TrailPage } from "./components/TrailPage";

export const routes = () => {
  const userLocation = "18.0649,59.3293";
  const favorites = true;
const children= true;
  return (
    <Routes>
      <Route path="/" element={<HomePage userLocation={userLocation} />} />
      <Route path="/trail" element={<HomePage />} />
      <Route path="/trails/:trailId" element={<TrailPage />} />
      <Route path="/trails-page" element={<TrailPage />} />
    </Routes>
  );
};
