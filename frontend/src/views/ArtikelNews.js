import "../App.css";
import BannerCard from "../components/BannerCard";
import ContentList from "../components/ContentList";
import RilisBerita from "../components/RilisBerita";

const ArtikelNews = () => {
  return (
    <div>
      <BannerCard title="Artikel" img="img/artikel-news/artikel-banner.png" />
      <div className="w-11/12 flex justify-between mx-auto">
        <div className="w-4/5 mr2">
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
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
        </div>
        <RilisBerita />
      </div>
    </div>
  );
};

export default ArtikelNews;
