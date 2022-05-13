import "../App.css";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="bg-header w-screen text-white flex items-center text-xl font-lora">
      <a href="#">
        <div className="flex items-center">
          <img src="/img/icons/polban.png" style={{ width: 90, height: 90 }} />
          <p className="header-title ml2">
            JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
          </p>
        </div>
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
