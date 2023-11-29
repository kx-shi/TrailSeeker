import { Route, Routes } from "react-router-dom";
import{ HomePage } from "./components/HomePage";


export const routes = () => {
  const userLocation = "18.0649,59.3293";
  return (
    <Routes>
      <Route path="/" element={<HomePage userLocation ={userLocation} />} />
      <Route path="/trail" element={<HomePage />} />
      <Route path="/trails/:id" element={<HomePage />} />
    </Routes>
  );
};