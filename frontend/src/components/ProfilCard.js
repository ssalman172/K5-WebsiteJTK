import { Link } from "react-router-dom";
import "../App.css";
import "../styles/profil-card.css";

const ProfilCard = ({isDosen, profileData}) => {
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
            <Link to='/dosen-detail'>
              <p className="my-2 text-xl hover:underline">{profileData?.nama}</p>
            </Link>
            <p className="my-2 text-base">{profileData?.domisili}</p>
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
          {isDosen && (
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
          <p>: {profileData?.kelamin || '-'}</p>
          <p>: {profileData?.jabatan || '-'}</p>
          <p>: {profileData?.pendidikan || '-'}</p>
          <p>: {profileData?.statusIkatanKerja || '-'}</p>
          <p>: {profileData?.statusAktivitas || '-'}</p>
          {isDosen && (
            <div>
              <p>: {profileData?.expertise || '-'}</p>
              <p>: {profileData?.kbk || '-'}</p>
              <p>: {profileData?.mataKuliah || '-'}</p>
              <p>: {profileData?.pengalamanProyek || '-'}</p>
              <p>: {profileData?.pengalamanKegiatan || '-'}</p>
              <p>: {profileData?.prestasi || '-'}</p>
              <p>: {profileData?.publikasiIlmiah || '-'}</p>
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
        <p>{profileData?.pendidikanTerakhir || '-'}</p>
      </div>
    </div>
  );
};

export default ProfilCard;
