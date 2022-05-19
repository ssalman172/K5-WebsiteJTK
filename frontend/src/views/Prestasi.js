import "../App.css";
import Banner from "../components/BannerCard";
import ContentList from "../components/ContentList";

const Prestasi = () => {
  return (
    <div>
      <Banner title="Prestasi" img="/img/sarana-prasarana/sarana-banner.png" />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl mb3 mt3">
          <a
            href="/prestasi/mahasiswa"
            className="color-navyblue underline font-bold mr3"
          >
            Mahasiswa
          </a>
          <a
            href="/prestasi/dosen"
            className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 mr3"
          >
            Dosen dan Tendik
          </a>
          <a
            href="/prestasi/lembaga"
            className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100"
          >
            Lembaga
          </a>
        </div>
        <ContentList isArtikel={false} />
        <ContentList isArtikel={false} />
        <ContentList isArtikel={false} />
        <ContentList isArtikel={false} />
        <ContentList isArtikel={false} />
      </div>
    </div>
  );
};

export default Prestasi;
