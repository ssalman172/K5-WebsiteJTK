import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ProfilD3 from "../views/ProfilD3";
import ProfilD4 from "../views/ProfilD4";
import ProfilDosen from "../views/ProfilDosen";
import ProfilDosenDetail from "../views/ProfilDosenDetail";
import ProfilJurusan from "../views/ProfilJurusan";
import ProfilStaff from "../views/ProfilStaff";
import ProfilStaffDetail from "../views/ProfilStaffDetail";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/dosen" element={<ProfilDosen />} />
      <Route path="/dosen-detail" element={<ProfilDosenDetail />} />
      <Route path="/staff" element={<ProfilStaff />} />
      <Route path="/staff-detail" element={<ProfilStaffDetail />} />
      <Route path="/jurusan" element={<ProfilJurusan />} />
      <Route path="/d3" element={<ProfilD3 />} />
      <Route path="/d4" element={<ProfilD4 />} />

    </Routes>
  );
};

export default Main;
