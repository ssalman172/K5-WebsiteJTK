import "../App.css";
import ProfilCard from "../components/ProfilCard";
import Pagination from '../components/Pagination';
import { useState } from "react";

const dataDosen = [
  {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
  {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
  {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
  {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
  {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
    {
    nama: 'Bambang Wisnuadhi, S.Si., M.T.',
    domisili: 'Bandung, Indonesia',
    kelamin: 'Laki-laki',
    jabaran: 'Lektor',
    statusIkatanKerja: 'Dosen Tetap',
    statusAktivitas: 'Aktif',
    mataKuliah: 'Analisis dan Perancangan Perangkat Lunak 2',
    pendidikanTerakhir: 'S2 Teknik Informatika Institut Teknologi Bandung'
  },
]

const ProfilDosen = () => {
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className="w-11/12 mx-auto">
      {currentItems.map(item => {
        return (
          <ProfilCard isDosen={true} profileData={item} />
        )
      })}
      <div className="mb-5">
        <Pagination
          itemsPerPage={3}
          wholeDataGetter={dataDosen}
          currentDataSetter={setCurrentItems}
        />
      </div>
    </div>
  );
};

export default ProfilDosen;
