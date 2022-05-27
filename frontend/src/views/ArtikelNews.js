import { useRef, useState } from "react";
import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";
import Pagination from "../components/Pagination";
import RilisBerita from "../components/RilisBerita";

const dummyData = [
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
  {
    title: 'Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio corporis enim aliquid aliquam modi sequi atque libero labore cupiditate ipsum, totam voluptatum sit. Neque illum architecto animi repudiandae perferendis. Corporis iste harum nesciunt quos? Officiis iure ab perferendis soluta eaque illo assumenda, veritatis ut sit neque est quasi expedita!',
    img: '/img/artikel-news/artikel1.png',
    category: 'akademik',
    date: '23 November 2021'
  },
]

const ArtikelNews = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const paginationContainerRef = useRef();

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
                  title={elem.title}
                  content={elem.content}
                  img={elem.img}
                  category={elem.category}
                  date={elem.date}
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
        {/* RILIS BERITA HARUSNYA STICKY */}
        <div className="mt3">
          <RilisBerita />
        </div>
      </div>
    </div>
  );
};

export default ArtikelNews;
