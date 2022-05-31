import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import { BASE_URL } from "../datasource/consts";
import { fetchAll } from "../datasource/routes/prasarana";

const Prasarana = () => {
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
          <Link to='/sarana'>
            <span
              className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100"
            >
              Sarana
            </span>
          </Link>
          <p className="color-navyblue underline font-bold ml-3">Prasarana</p>
        </div>
        {
          data.map((elem) => {
            return (
              <ContentList
                isArtikel={false}
                title={elem?.Nama}
                content={elem?.Deskripsi}
                img={BASE_URL + (elem?.Thumbnail ?? [])[0]?.url}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Prasarana;
