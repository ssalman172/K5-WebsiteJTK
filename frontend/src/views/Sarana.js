import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";

const Sarana = () => {
  return (
    <div>
      <Banner
        title="Sarana Prasarana"
        img="img/sarana-prasarana/sarana-banner.png"
      />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl mb3 mt3">
          <p className="color-navyblue underline font-bold mr3">Sarana</p>
          <a
            href="/prasarana"
            className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100"
          >
            Prasarana
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

export default Sarana;
