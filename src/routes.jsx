import { Route, Routes } from "react-router-dom";
import{ HomePage } from "./components/HomePage";


export const routes = () => {
  const userLocation = "18.0649,59.3293";
  const favorites = true;
const children= true;
  return (
    <Routes>
      <Route path="/" element={<HomePage userLocation ={userLocation} />} />
      <Route path="/favorites" element={<HomePage favorites={favorites} />} />
      <Route path="/children" element={<HomePage children={children} />} />
    </Routes>
  );
};