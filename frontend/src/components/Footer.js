import "../App.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="bg-footer flex items-start text-xl font-lora justify-between color-gray pt-7">
        <div className="w-1/3">
          <a href="#">
            <div className="w-full mr3 flex items-center mb-10">
              <img src="/img/icons/polban.png" style={{ width: 80 }} />
              <h2 className="text-white header-title ml4 text-xl">
                JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
              </h2>
            </div>
          </a>
          <p className="mb-10">
            Jl. Gegerkalong Hilir, Ds. Ciwaruga, Ciwaruga, Kec. Parongpong, Kota
            Bandung, Jawa Barat 40012
          </p>
          <p className="mb3">Phone: (022) 2013789</p>
          <p className="mb3">Fax: (022) 2013889</p>
          <a href="#" className="hover:underline mb3">
            Privacy Policy
          </a>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Program Studi</p>
          <a href="/d3" className="hover:underline text-base mb-2">
            D3 Teknik Informatika
          </a>
          <a href="/d4" className="hover:underline text-base mb-2">
            D4 Teknik Informatika
          </a>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Tentang JTK</p>
          <a href="/jurusan" className="hover:underline text-base mb-2">
            Profil
          </a>
          <a href="/dosen" className="hover:underline text-base mb-2">
            Dosen
          </a>
          <a href="/staff" className="hover:underline text-base mb-2">
            Staff
          </a>
          <a href="/kurikulum" className="hover:underline text-base mb-2">
            Kurikulum
          </a>
          <a
            href="/prestasi/mahasiswa"
            className="hover:underline text-base mb-2"
          >
            Prestasi
          </a>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="pb-3 mb-4 border-bottom text-white">Koneksi</p>
          <a href="/info-kontak" className="hover:underline text-base mb-2">
            Kontak
          </a>
          <a href="/kerja-sama" className="hover:underline text-base mb-2">
            Kerja Sama
          </a>
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
