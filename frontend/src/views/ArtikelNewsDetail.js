import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import RilisBerita from "../components/RilisBerita";
import { BASE_URL } from "../datasource/consts";
import { fetchOne } from "../datasource/routes/artikel";
import Moment from "moment";

const ArtikelNewsDetail = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    fetchOne(id).then((newData) => {
      setData(newData);
    });
  }, []);

  return (
    <div className="w-5/6 font-lora mx-auto mt5 mb5">
      <div className="w-3/5 mb3 text-center">
        <h1 className="font-lora font-bold text-6xl text-[40px] my-[2%]">
          {data?.Judul}
        </h1>
        <p className="text-sm color-navyblue opacity-70 font-bold">
          {data?.Author} - {data?.Tag}
        </p>
        <p className="text-sm color-navyblue opacity-70 font-bold">
          {Moment(data?.Tanggal).format("DD-MM-YYYY")}
        </p>
      </div>
      <div className="flex justify-between mx-auto">
        <div className="w-3/5">
          <div className="mb3 flex justify-center">
            <div>
              <img
                src={BASE_URL + (data?.MediaGambar ?? [])[0]?.url}
                className="max-w-[725px] max-h-[450px]"
              />
              <p className="text-sm color-navyblue opacity-70 font-bold">
                Photo: {data?.AuthorGambar}
              </p>
            </div>
          </div>
          <p className="text-xl indent-8 mb-2">{data?.Artikel}</p>
        </div>
        <RilisBerita />
      </div>
    </div>
  );
};

export default ArtikelNewsDetail;
