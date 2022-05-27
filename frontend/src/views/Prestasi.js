import "../App.css";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";

const Prestasi = () => {
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().sub_url;

  return (
    <div>
      <Banner title="Prestasi" img="/img/sarana-prasarana/sarana-banner.png" />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl w-full justify-around mb3 mt3">
          <Link to="/prestasi/mahasiswa">
            <span
              className={
                sub_url === "mahasiswa"
                  ? selectionActiveClass
                  : selectionNotActiveClass
              }
            >
              Mahasiswa
            </span>
          </Link>
          <Link to="/prestasi/dosen">
            <span
              className={
                sub_url === "dosen"
                  ? selectionActiveClass
                  : selectionNotActiveClass
              }
            >
              Dosen
            </span>
          </Link>
          <Link to="/prestasi/lembaga">
            <span
              className={
                sub_url === "lembaga"
                  ? selectionActiveClass
                  : selectionNotActiveClass
              }
            >
              Lembaga
            </span>
          </Link>
        </div>
        <ContentList
          isArtikel={false}
          title='Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/artikel-news/artikel1.png'
        />
        <ContentList
          isArtikel={false}
          title='Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/artikel-news/artikel1.png'
        />
        <ContentList
          isArtikel={false}
          title='Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/artikel-news/artikel1.png'
        />
      </div>
    </div>
  );
};

export default Prestasi;
