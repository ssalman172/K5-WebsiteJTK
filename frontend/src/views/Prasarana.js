import "../App.css";
import Banner from "../components/BannerCard";
import ContentList from "../components/ContentList";

const Prasarana = () => {
  return (
    <div>
      <Banner
        title="Sarana Prasarana"
        img="img/sarana-prasarana/sarana-banner.png"
      />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl mb3 mt3">
          <a
            href="#"
            className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 mr3"
          >
            Sarana
          </a>
          <a href="#" className="color-navyblue underline font-bold">
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

export default Prasarana;
