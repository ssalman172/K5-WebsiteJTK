import { Link } from "react-router-dom";
import "../App.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="bg-footer flex items-start text-xl font-lora justify-between color-gray pt-7">
        <div className="w-1/3">
          <Link to='/'>
            <div className="w-full mr3 flex items-center mb-10">
              <img src="/img/icons/polban.png" style={{ width: 80 }} />
              <h2 className="text-white header-title ml4 text-xl">
                JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
              </h2>
            </div>
          </Link>
          <p className="mb-10">
            Jl. Gegerkalong Hilir, Ds. Ciwaruga, Ciwaruga, Kec. Parongpong, Kota
            Bandung, Jawa Barat 40012
          </p>
          <p className="mb3">Phone: (022) 2013789</p>
          <p className="mb3">Fax: (022) 2013889</p>
          <span className="hover:underline mb3">
            Privacy Policy
          </span>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Program Studi</p>
          <Link to='/profil/d3'>
            <span className="hover:underline text-base mb-2">
              D3 Teknik Informatika
            </span>
          </Link>
          <Link to='/profil/d4'>
            <span className="hover:underline text-base mb-2">
              D4 Teknik Informatika
            </span>
          </Link>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Tentang JTK</p>
          <Link to='/profil/jurusan'>
            <span className="hover:underline text-base mb-2">
              Profil
            </span>
          </Link>
          <Link to='/dosen'>
            <span className="hover:underline text-base mb-2">
              Dosen
            </span>
          </Link>
          <Link to='/staff'>
            <span className="hover:underline text-base mb-2">
              Staff
            </span>
          </Link>
          <Link to='/kurikulum'>
            <span className="hover:underline text-base mb-2">
              Kurikulum
            </span>
          </Link>
          <Link to='/prestasi/mahasiswa'>
            <span className="hover:underline text-base mb-2">
              Prestasi
            </span>
          </Link>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Koneksi</p>
          <Link to='/info-kontak'>
            <span className="hover:underline text-base mb-2">
              Kontak
            </span>
          </Link>
          <Link to='/kerja-sama/internasional'>
            <span
              className="hover:underline text-base mb-2"
            >
              Kerja Sama
            </span>
          </Link>
        </div>
      </div>
      <div
        className="flex justify-between pl5 pr5 py-3 items-center"
        style={{ background: "#202020" }}
      >
        <p className="text-base color-gray">
          Jurusan Teknik Komputer dan Informatika. 2022. All Rights reserved.
        </p>
        <div className="color-orange text-2xl">
          <a href="#" className="mr-2">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" className="mr-2">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
