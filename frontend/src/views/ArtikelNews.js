import { useEffect, useRef, useState } from "react";
import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import Pagination from "../components/Pagination";
import RilisBerita from "../components/RilisBerita";
import { BASE_URL } from "../datasource/consts";
import { fetchAll } from "../datasource/routes/artikel";
import Moment from "moment";

const ArtikelNews = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const paginationContainerRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll().then((newData) => {
      setData(newData);
    })
  }, []);

  return (
    <div>
      <Banner title="Artikel" img="img/artikel-news/artikel-banner.png" />
      <div className="w-11/12 flex justify-between mx-auto">
        <div className="w-4/5 mr2" ref={paginationContainerRef}>
          <h1 className="font-lora font-bold color-navyblue text-[40px] my-[2%]">
            Berita JTK
          </h1>
          {
            currentItems.map(elem => {
              return (
                <ContentList
                  isArtikel={true}
                  id={elem?.id}
                  title={elem?.Judul}
                  content={elem?.Artikel}
                  img={BASE_URL + (elem?.MediaGambar ?? [])[0]?.url}
                  category={elem?.Tag}
                  date={Moment(elem?.Tanggal).format('DD-MM-YYYY')}
                />
              )
            })
          }
          <div className="mb-5">
            <Pagination
              itemsPerPage={6}
              wholeDataGetter={data}
              currentDataSetter={setCurrentItems}
              offsetTop={paginationContainerRef.current?.offsetTop}
            />
          </div>
        </div>
        {/* RILIS BERITA HARUSNYA STICKY */}
        <div className="mt3">
          <RilisBerita />
        </div>
      </div>
    </div>
  );
};

export default ArtikelNews;
