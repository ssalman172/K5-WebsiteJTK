import "../App.css";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  return (
    <div className="text-white font-lora">
      <div className="bg-[#191919] h-[35px] flex justify-end items-center text-sm font-medium px-[6%]">
        <Link to="/artikel-news" className="px-3 hover:underline">
          Berita
        </Link>
        <Link to="#" className="px-3 hover:underline">
          Akademik
        </Link>
        <Link to="#" className="px-3 hover:underline">
          E-Learning
        </Link>
        <Link to="#" className="px-3 hover:underline">
          Peta Website
        </Link>
        <div className="flex px-3">
          <img src="/img/icons/ID.png" className="w-[28px] h-[18px] mr-2" />
          <p>Indonesia</p>
          <span className="pt-1 hover:cursor-pointer">
            <ion-icon name="caret-down-outline"></ion-icon>
          </span>
        </div>
        <div className="flex ml3">
          <input
            type="text"
            placeholder="Pencarian"
            className="text-black w-[120px] h-[20px] px-2 rounded-l-sm"
          />
          <button
            type="submit"
            className="pt-[2px] bg-white text-black h-[20px] rounded-r-sm"
          >
            <ion-icon name="search-sharp"></ion-icon>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[170px] bg-[#1A2C43] px-[6%]">
        <Link to="/">
          <div className="flex items-center text-2xl font-medium py-3">
            <img src="/img/icons/polban.png" className="w-[79px] h-[92px]" />
            <div className="ml-5">
              <p>POLITEKNIK NEGERI BANDUNG</p>
              <p>JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center font-bold text-lg text-center font-normal">
          <Link
            to="/"
            className="bg-[#FF7F00] text-black border border-[#1A2C43] px-6 py-3 flex-auto"
          >
            Beranda
          </Link>
          <HeaderDropdown 
            title='Tentang JTK'
            dropdownList={[
              {
                title: 'Profil Jurusan',
                url: '/jurusan'
              },
              {
                title: 'D3 Teknik Informatika',
                url: '/d3'
              },
              {
                title: 'D4 Teknik Informatika',
                url: '/d4'
              },
            ]}
          />
          <HeaderDropdown 
            title='Layanan &amp; Fasilitas'
            dropdownList={[
              {
                title: 'Jurusan',
                url: '/jurusan'
              }
            ]}
          />
          <HeaderDropdown 
            title='Kemahasiswaan'
            dropdownList={[
              {
                title: 'Jurusan',
                url: '/jurusan'
              }
            ]}
          />
          <Link
            to="/tracer-study"
            className="bg-[#191919] border border-[#1A2C43] px-6 py-3 flex-auto hover:bg-[#FF7F00]"
          >
            Tracer Study
          </Link>
          <Link
            to="/info-kontak"
            className="bg-[#191919] border border-[#1A2C43] px-6 py-3 flex-auto hover:bg-[#FF7F00]"
          >
            Kontak
          </Link>
          <HeaderDropdown 
            title='Lainnya'
            dropdownList={[
              {
                title: 'Jurusan',
                url: '/jurusan'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
