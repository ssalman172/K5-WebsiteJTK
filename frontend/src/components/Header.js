import "../App.css";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-header text-white flex items-center text-xl font-lora">
      <Link to="/">
        <div className="flex items-center">
          <img src="/img/icons/polban.png" style={{ width: 50 }} />
          <div className="whitespace-nowrap	ml4">
            <p className="text-base">POLITEKNIK NEGERI BANDUNG</p>
            <p className="text-base">JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA</p>
          </div>
        </div>
      </Link>
      <Link to="/jurusan" className="hover:underline ml-auto mr2">
        JTK
      </Link>
      <Link to="#" className="hover:underline mr2">
        AKADEMIK
      </Link>
      <Link to="#" className="hover:underline mr2">
        MAHASISWA
      </Link>
      <Link to="#" className="hover:underline mr2">
        LAINNYA
      </Link>
      <Link to="/info-kontak" className="hover:underline mr2">
        KONTAK
      </Link>
      <Link to="#" className="mr1">
        <img src="/img/icons/EN.png" style={{ width: 32, height: 21 }} />
      </Link>
      <Link to="#" className="mr1">
        <img src="/img/icons/ID.png" style={{ width: 32, height: 21 }} />
      </Link>
      <Link to="#">
        <ion-icon name="search-sharp"></ion-icon>
      </Link>
    </div>
  );
};

export default Header;
