import "../App.css";

const BasicInfo = (props) => {
  return (
    <div className="flex rounded bg-navyblue text-white mb3 p3">
      <img id="basic-info-img" src="/img/profil/person.png" />
      <div className="ml3">
        <p className="font-bold text-3xl mb-10">
          Bambang Wisnuadhi, S.Si., M.T.
        </p>
        <div className="grid grid-cols-2 gap-7 text-lg">
          <div className="font-normal">
            {props.isDosen && (
              <div>
                <p className="mb-2">Program Studi</p>
                <p className="mb-2">Mata Kuliah yang Diampu</p>
              </div>
            )}
            <p className="mb-2">Status</p>
            <p className="mb-2">Jabatan Fungsional</p>
          </div>
          <div className="font-bold">
            {props.isDosen && (
              <div>
                <p className="mb-2">D4 Teknik Informatika</p>
                <p className="mb-2">Analisis dan Perancangan Perangkat Lunak 2</p>
              </div>
            )}
            <p className="mb-2">Aktif</p>
            <p className="mb-2">Lektor</p>
          </div>
        </div>
      </div>
    </div>
  );
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic? (202X)
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
          <p className="text-3xl font-bold">D3</p>
          <p className="text-xl font-normal">
            Politeknik Negeri Bandung, Bandung, Jawa Barat, Indonesia
          </p>
          <p className="text-xl font-normal">1994</p>
        </div>
        <div className="mb2">
          <p className="text-3xl font-bold">S1</p>
          <p className="text-xl font-normal">
            Universitas Padjadjaran, Bandung, Jawa Barat, Indonesia
          </p>
          <p className="text-xl font-normal">1997</p>
        </div>
        <div>
          <p className="text-3xl font-bold">S2</p>
          <p className="text-xl font-normal">
            Institut Teknologi Bandung, Bandung, Jawa Barat, Indonesia
          </p>
          <p className="text-xl font-normal">2002</p>
        </div>
      </div>
      {/* Project Info */}
      <ProjectInfo isDosen={props.isDosen} />
    </div>
  );
};

export default ProfilDetailCard;
