import "../App.css";
import "../styles/footer.css";

const Footer = () => {
  return (
  <div className="flex flex-col justify-between">
    <div className="bg-footer flex items-start text-xl font-lora justify-between color-gray pt-7">
      <div className="w-1/3">
        <a href="#">
          <div className="w-full mr3 flex items-center mb-10">
            <img src="/img/icons/polban.png" style={{ width: 100, height: 100 }} />
            <h2 className="text-white header-title ml2 text-xl">
              JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
            </h2>
          </div>
        </a>
        <p className="mb-10">Jl. Gegerkalong Hilir, Ds. Ciwaruga, Ciwaruga, Kec. Parongpong, Kota Bandung, Jawa Barat 40012</p>
        <p className="mb3">Phone: (022) 2013789</p>
        <p className="mb3">Fax: (022) 2013889</p>
        <p className="mb3">Privacy Policy</p>

      </div>
      <div className="w-1/5">
        <p className="pb-3 mb-4 border-bottom header-title text-white">
          Program Studi
        </p>
        <p className="text-base mb-2">D3 Teknik Informatika</p>
        <p className="text-base mb-2">D4 Teknik Informatika</p>
      </div>
      <div className="w-1/5">
        <p className="pb-3 mb-4 border-bottom header-title text-white">
          Tentang JTK
        </p>
        <p className="text-base mb-2">Profil</p>
        <p className="text-base mb-2">Staff</p>
        <p className="text-base mb-2">Kurikulum</p>
        <p className="text-base mb-2">Prestasi</p>
      </div>
      <div className="w-1/5">
        <p className="pb-3 mb-4 border-bottom header-title text-white">
          Koneksi
        </p>
        <p className="text-base mb-2">Kontak</p>
        <p className="text-base mb-2">Kerja Sama</p>
      </div>
    </div>
    <div className="flex justify-between pl5 pr5 py-3 items-center" style={{background: '#202020'}}>
      <p className="text-base color-gray">Jurusan Teknik Komputer dan Informatika. 2022. All Rights reserved.</p>
      <div className="color-orange text-2xl">
        <span className="mr-2">
          <ion-icon name="logo-instagram"></ion-icon>
        </span>
        <span className="mr-2">
          <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span>
          <ion-icon name="logo-linkedin"></ion-icon>
        </span>
      </div>
    </div>
  </div>
  );
};

export default Footer;
