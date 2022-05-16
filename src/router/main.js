import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ProfilDosen from "../views/ProfilDosen";
import ProfilDosenDetail from "../views/ProfilDosenDetail";
import ProfilStaff from "../views/ProfilStaff";
import ProfilStaffDetail from "../views/ProfilStaffDetail";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dosen" element={<ProfilDosen />} />
      <Route path="/dosen-detail" element={<ProfilDosenDetail />} />
      <Route path="/staff" element={<ProfilStaff />} />
      <Route path="/staff-detail" element={<ProfilStaffDetail />} />
    </Routes>
  );
};

export default Main;
