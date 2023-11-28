import { Route, Routes } from "react-router-dom";


export const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<trails />} />
      <Route path="/trail" element={<trails />} />
      <Route path="/trails/:id" element={<trails />} />
    </Routes>
  );
};


// This names are just examples