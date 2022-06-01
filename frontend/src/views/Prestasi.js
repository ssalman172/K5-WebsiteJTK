import "../App.css";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import { fetchAll } from "../datasource/routes/artikel";
import { BASE_URL } from "../datasource/consts";

const Prestasi = () => {
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().sub_url;
  const [currentItems, setCurrentItems] = useState([]);
  const paginationContainerRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    fetchAll().then((newData) => {
      const cleanData = newData.filter((elem) =>  elem?.Category.split('_')[1].toLowerCase() === sub_url);
      setData(cleanData);
    })
  }, [sub_url]);

  return (
    <div>
      <Banner title="Prestasi" img="/img/sarana-prasarana/sarana-banner.png" />
      <div className="w-2/3 mx-auto" ref={paginationContainerRef}>
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
        {
          currentItems.map(elem => {
            return (
              <ContentList
                isArtikel={false}
                id={elem?.id}
                title={elem?.Judul}
                content={elem?.Artikel}
                img={BASE_URL + (elem?.MediaGambar ?? [])[0]?.url}
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
    </div>
  );
};

export default Prestasi;
