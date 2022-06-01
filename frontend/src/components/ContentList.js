import { Link } from "react-router-dom";
import "../App.css";

const ContentList = ({ id, isArtikel, title, content, img, date, category }) => {
  return (
    <div
      className="flex justify-between font-lora mb2 pb-4 items-center"
      style={{ borderBottom: `1px solid rgba(20, 46, 70, 0.25)` }}
    >
      {!isArtikel &&
        <div>
          <Link to={`/artikel-news/${id}`}>
            <span className="text-3xl color-navyblue hover:underline">
              {title}
            </span>
          </Link>
          <p className="text-sm mt2 mr-[4rem] text-justify">
            {content?.slice(0, 700)}...<Link to={`/artikel-news/${id}`} className="color-navyblue hover:underline">read more</Link>
          </p>
        </div>}
      <img
        src={img}
        style={{ maxWidth: 300, maxHeight: 160 }}
      />
      {isArtikel &&
        <div className="ml2">
          <Link to={`/artikel-news/${id}`}>
            <span className="text-3xl color-navyblue hover:underline">
              {title}
            </span>
          </Link>
          <p className="text-xs color-navyblue opacity-70 mt1">
            {category} | {date}
          </p>
          <p className="text-sm mt2">
            {content}
          </p>
        </div>}
    </div>
  )
};

export default ContentList;
