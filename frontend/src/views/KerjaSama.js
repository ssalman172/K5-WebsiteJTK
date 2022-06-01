import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";

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
        <div
          className="flex flex-col items-center mb3 mt3"
          ref={paginationContainerRef}
        >
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
            <div className="flex w-screen py-8 px-[6%] justify-center">
              <div className="w-[292px] border p-7 h-[1100px] overflow-y-scroll">
                {currentItems.map((item) => {
                  return (
                    <img
                      src={item}
                      width={280}
                      height={280}
                      className="self-center justify-self-center"
                    />
                  );
                })}
              </div>
              <div className="w-3/4 ml3">
                <h1 className="font-normal text-[40px] mb-4">
                  Kerja Sama JTK dan Lembaga/Perusahaan
                </h1>
                <p className="indent-8 mb-3 text-xl">
                  Lembaga/Perusahaan adalah perusahaan yang bergerak pada bidang
                  lorem ipsum. JTK bekerja sama dengan lembaga mulai lorem ipsum
                  1500s ketika lorem ipsum dolo reti.
                </p>
                <p className="indent-8 mb-3 text-xl">
                  Hasil kerja sama yang telah dicapai saat ini adalah lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                  blandit pellentesque mauris donec laoreet est tortor magna.
                  Tellus ultrices enim rhoncus mi eget aenean hendrerit feugiat
                  etiam. Imperdiet tempor in pulvinar et vestibulum egestas
                  fusce suspendisse imperdiet.
                </p>
                <p className="indent-8 mb-3 text-xl">
                  Tellus ultrices enim rhoncus mi eget aenean hendrerit feugiat
                  etiam. Imperdiet tempor in pulvinar et vestibulum egestas
                  fusce suspendisse imperdiet. Posuere blandit pellentesque
                  mauris donec laoreet est tortor magna, pulvinar et vestibulum
                  egestas fusce suspendisse imperdiet. Pulvinar et vestibulum
                  egestas fusce suspendisse imperdiet. Posuere blandit
                  pellentesque mauris donec laoreet est tortor magna, pulvinar
                  et vestibulum egestas fusce suspendisse imperdiet
                </p>
                <p className="indent-8 mb-3 text-xl">
                  Kesepakatan baru yang telah dicapai saat ini adalah lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                  blandit pellentesque mauris donec laoreet est tortor magna.
                  Tellus ultrices enim rhoncus mi eget aenean hendrerit feugiat
                  etiam. Imperdiet tempor in pulvinar et vestibulum egestas
                  fusce suspendisse imperdiet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DaftarPrestasi;
