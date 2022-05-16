import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ProfilDosen from "../views/ProfilDosen";
import ProfilDosenDetail from "../views/ProfilDosenDetail";
import ProfilJurusan from "../views/ProfilJurusan";
import ProfilStaff from "../views/ProfilStaff";
import ProfilStaffDetail from "../views/ProfilStaffDetail";
import Sarana from "../views/Sarana";
import Prasarana from "../views/Prasarana";
import ArtikelNews from "../views/ArtikelNews";
import InfoKontak from "../views/InfoKontak";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/dosen" element={<ProfilDosen />} />
      <Route path="/dosen-detail" element={<ProfilDosenDetail />} />
      <Route path="/staff" element={<ProfilStaff />} />
      <Route path="/staff-detail" element={<ProfilStaffDetail />} />
      <Route path="/sarana" element={<Sarana />} />
      <Route path="/prasarana" element={<Prasarana />} />
      <Route path="/artikel-news" element={<ArtikelNews />} />
      <Route path="/info-kontak" element={<InfoKontak />} />
      <Route path="/jurusan" element={<ProfilJurusan />} />
    </Routes>
  );
};

export default Main;
