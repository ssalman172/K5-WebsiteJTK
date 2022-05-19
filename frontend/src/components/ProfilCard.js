import "../App.css";
import "../styles/profil-card.css";

const ProfilCard = (props) => {
  return (
    <div
      id="profil-card"
      className="w-full flex mt5 mb2 bg-navyblue text-white font-medium font-lora"
    >
      {/* Profile Image */}
      <div className="ml2 mr2 relative w-1/5 h-4/5">
        <div
          id="profil-card-img"
          className="absolute text-center w-full h-full"
        >
          <div className="bg-navyblue2 w-full h-full">
            <img src="/img/profil/person.png" className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-around">
            <p className="my-2 text-xl">Prof. Sanusi M.Eng, Ph.D</p>
            <p className="my-2 text-base">Bandung, Indonesia</p>
          </div>
        </div>
      </div>
      {/* Profile Basic Data */}
      <div className="grid grid-cols-2 gap-4 content-center">
        <div>
          <p>Jenis Kelamin</p>
          <p>Jabatan Fungsional</p>
          <p>Pendidikan Tertinggi</p>
          <p>Status Ikatan Kerja</p>
          <p>Status Aktivitas</p>
          {props.isDosen && (
            <div>
              <p>Expertise</p>
              <p>KBK</p>
              <p>Mata Kuliah yang Diampu</p>
              <p>Pengalaman Proyek/Produk</p>
              <p>Pengalaman Kegiatan/Penelitian</p>
              <p>Prestasi</p>
              <p>Daftar Publikasi Ilmiah</p>
            </div>
          )}
        </div>
        <div>
          <p>: Laki - laki</p>
          <p>: Profesor</p>
          <p>: S3</p>
          <p>: Dosen Tetap</p>
          <p>: Aktif</p>
          {props.isDosen && (
            <div>
              <p>: -</p>
              <p>: -</p>
              <p>: Cloud Computing</p>
              <p>: Travel OK</p>
              <p>: -</p>
              <p>: -</p>
              <p>: -</p>
            </div>
          )}
        </div>
      </div>
      {/* Pendidikan Terakhir */}
      <div
        id="edu-card"
        className="w-1/6 h-4/5 flex flex-col justify-evenly items-center ml-auto mr2 my-auto text-center"
      >
        <p>Pendidikan Terakhir</p>
        <img src="/img/profil/hat.png" />
        <p>S3 Informatics Universitas Colorado</p>
      </div>
    </div>
  );
};

export default ProfilCard;
