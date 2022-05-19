import "../App.css";

const BasicInfo = (props) => {
  if (props.isDosen) {
    return (
      <div className="flex rounded bg-navyblue text-white mb3 p3">
        <img id="basic-info-img" src="/img/profil/person.png" />
        <div className="ml3">
          <p className="font-bold text-3xl mb-10">
            Prof. Shalahuddin Sanusi M.Eng, Ph.D
          </p>
          <div className="grid grid-cols-2 gap-7 text-lg">
            <div className="font-normal">
              <p className="mb-2">Program Studi</p>
              <p className="mb-2">Mata Kuliah yang Diampu</p>
              <p className="mb-2">Status</p>
              <p className="mb-2">Jabatan Fungsional</p>
            </div>
            <div className="font-bold">
              <p className="mb-2">D4 Teknik Informatika</p>
              <p className="mb-2">Cloud Computing</p>
              <p className="mb-2">Aktif</p>
              <p className="mb-2">Profesor</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex rounded bg-navyblue text-white mb3 p3">
        <img id="basic-info-img" src="/img/profil/person.png" />
        <div className="ml3">
          <p className="font-bold text-3xl mb-10">
            Prof. Shalahuddin Sanusi M.Eng, Ph.D
          </p>
          <div className="grid grid-cols-2 gap-7 text-lg">
            <div className="font-normal">
              <p className="mb-2">Status</p>
              <p className="mb-2">Jabatan Fungsional</p>
            </div>
            <div className="font-bold">
              <p className="mb-2">Aktif</p>
              <p className="mb-2">Profesor</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ProjectInfo = (props) => {
  if (props.isDosen) {
    return (
      <div className="rounded bg-navyblue text-white p3">
        <div className="flex text-3xl mb2">
          <p className="underline font-bold mr3 cursor-default">Project</p>
          <a
            href="#"
            className="color-gray font-normal hover:underline hover:text-white"
          >
            Publikasi
          </a>
        </div>
        <ul className="list-disc text-xl font-normal">
          <li className="mb-2 ml2">
            Improvisasi Fitur serta Kinerja Teknologi Telekomunikasi untuk
            Mitigasi Bencana (2020)
          </li>
          <li className="mb-2 ml2">
            Pengembangan dan Produksi Radar Nasional (2015)
          </li>
          <li className="mb-2 ml2">
            Pengembangan Konten Middleware Untuk Aplikasi Distribusi Materi Ajar
            Pada Siaran TV Digital DVBHPe (2011)
          </li>
        </ul>
      </div>
    );
  }
};

const ProfilDetailCard = (props) => {
  return (
    <div className="w-4/5 ml3 font-lora">
      {/* Basic Info */}
      <BasicInfo isDosen={props.isDosen} />
      {/* Education Info */}
      <div className="rounded bg-navyblue text-white mb3 p3">
        <p className="text-3xl font-bold mb3">Education</p>
        <div className="mb2">
          <p className="text-3xl font-bold">S1</p>
          <p className="text-xl font-normal">
            Institut Teknologi Bandung, Bandung, Jawa Barat, Indonesia
          </p>
          <p className="text-xl font-normal">1995</p>
        </div>
        <div className="mb2">
          <p className="text-3xl font-bold">S2</p>
          <p className="text-xl font-normal">
            Institut Teknologi Bandung, Bandung, Jawa Barat, Indonesia
          </p>
          <p className="text-xl font-normal">1999</p>
        </div>
        <div>
          <p className="text-3xl font-bold">S3</p>
          <p className="text-xl font-normal">
            Colorado University, United States
          </p>
          <p className="text-xl font-normal">2000</p>
        </div>
      </div>
      {/* Project Info */}
      <ProjectInfo isDosen={props.isDosen} />
    </div>
  );
};

export default ProfilDetailCard;
