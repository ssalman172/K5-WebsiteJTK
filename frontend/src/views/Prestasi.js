import "../App.css";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import { useRef, useState } from "react";
import Pagination from "../components/Pagination";

const dummyData = [
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png'
  },
]

const Prestasi = () => {
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().sub_url;
  const [currentItems, setCurrentItems] = useState([]);
  const paginationContainerRef = useRef();

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
                title={elem.title}
                content={elem.content}
                img={elem.img}
              />
            )
          })
        }
        <div className="mb-5">
          <Pagination
            itemsPerPage={6}
            wholeDataGetter={dummyData}
            currentDataSetter={setCurrentItems}
            offsetTop={paginationContainerRef.current?.offsetTop}
          />
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
