import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default Main;
