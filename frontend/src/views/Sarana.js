import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import { BASE_URL } from "../datasource/consts";
import { fetchAll } from "../datasource/routes/sarana";

const Sarana = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll().then((newData) => {
      setData(newData);
    })
  }, []);

  return (
    <div>
      <Banner
        title="Sarana Prasarana"
        img="img/sarana-prasarana/sarana-banner.png"
      />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl mb3 mt3">
          <p className="color-navyblue underline font-bold mr3">Sarana</p>
          <Link to='/prasarana'>
            <span
              className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100"
            >
              Prasarana
            </span>
          </Link>
        </div>
        {
          data.map((elem) => {
            return (
              <ContentList
                isArtikel={false}
                title={elem?.Nama}
                content={elem?.Deskripsi}
                img={BASE_URL + elem?.Thumbnail.url}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Sarana;
