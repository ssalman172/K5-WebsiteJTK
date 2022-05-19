import "../App.css";
import Banner from "../components/BannerCard";
import ContentList from "../components/ContentList";
import RilisBerita from "../components/RilisBerita";

const ArtikelNews = () => {
  return (
    <div>
      <Banner title="Artikel" img="img/artikel-news/artikel-banner.png" />
      <div className="w-11/12 flex justify-between mx-auto">
        <div className="w-4/5 mr2">
          <h1 className="font-lora font-bold color-navyblue text-[40px] my-[2%]">
            Berita JTK
          </h1>
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
          <ContentList isArtikel={true} />
        </div>
        <div className="mt3">
          <RilisBerita />
        </div>
      </div>
    </div>
  );
};

export default ArtikelNews;
