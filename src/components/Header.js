import "../App.css";
import "../styles/header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-header text-white flex items-center text-xl font-lora">
      <a href="#">
        <Link to='/'>
          <div className="flex items-center">
            <img src="/img/icons/polban.png" style={{ width: 50 }} />
            <div className="whitespace-nowrap	ml4">
              <p className="text-base">
                POLITEKNIK NEGERI BANDUNG
              </p>
              <p className="text-base">
                JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
              </p>
            </div>
          </div>
        </Link>
      </a>
      <a href="#" className="hover:underline ml-auto mr2">
        JTK
      </a>
      <a href="#" className="hover:underline mr2">
        AKADEMIK
      </a>
      <a href="#" className="hover:underline mr2">
        MAHASISWA
      </a>
      <a href="#" className="hover:underline mr2">
        LAINNYA
      </a>
      <a href="#" className="hover:underline mr2">
        KONTAK
      </a>
      <a href="#" className="mr1">
        <img src="/img/icons/EN.png" style={{ width: 32, height: 21 }} />
      </a>
      <a href="#" className="mr1">
        <img src="/img/icons/ID.png" style={{ width: 32, height: 21 }} />
      </a>
      <a href="#">
        <ion-icon name="search-sharp"></ion-icon>
      </a>
    </div>
  );
};

export default Header;
