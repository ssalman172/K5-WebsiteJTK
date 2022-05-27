import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner'
import Pagination from '../components/Pagination';

const images = [
  "/img/kerja-sama/MIT_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/google_logo.png",
  "/img/kerja-sama/google_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/MIT_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/google_logo.png",
  "/img/kerja-sama/MIT_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/google_logo.png",
  "/img/kerja-sama/MIT_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/google_logo.png",
  "/img/kerja-sama/MIT_logo.png",
  "/img/kerja-sama/gojek_logo.png",
  "/img/kerja-sama/google_logo.png",
];

const DaftarPrestasi = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().sub_url;
  const paginationContainerRef = useRef();

  return (
    <div>
      <Banner title="Info Kerja Sama" img="/img/kerja-sama/banner.png" />
      <div className="w-7/12 mr-auto ml-auto font-lora">
        <div className="flex flex-col items-center mb3 mt3" ref={paginationContainerRef}>
          <div className="flex text-4xl w-full justify-around">
            <Link to="/kerja-sama/internasional">
              <span
                className={
                  sub_url === "internasional"
                    ? selectionActiveClass
                    : selectionNotActiveClass
                }
              >
                Internasional
              </span>
            </Link>
            <Link to="/kerja-sama/nasional">
              <span
                className={
                  sub_url === "nasional"
                    ? selectionActiveClass
                    : selectionNotActiveClass
                }
              >
                Nasional
              </span>
            </Link>
          </div>
          {(sub_url === "internasional" || sub_url === "nasional") && (
            <div className="grid grid-cols-3 gap-4 w-full mt-5">
              {currentItems.map((item) => {
                return (
                  <img
                    src={item}
                    width={320}
                    height={320}
                    className="self-center justify-self-center"
                  />
                );
              })}
            </div>
          )}
        </div>
          <div className="mb-5">
            <Pagination
              itemsPerPage={9}
              wholeDataGetter={images}
              currentDataSetter={setCurrentItems}
              offsetTop={paginationContainerRef.current?.offsetTop}
            />
          </div>
      </div>
    </div>
  );
};

export default DaftarPrestasi;
