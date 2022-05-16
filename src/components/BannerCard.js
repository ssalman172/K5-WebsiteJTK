import "../App.css";

const BannerCard = (props) => {
  console.log(props.img);
  return (
    <div>
      <div
        className="banner text-7xl text-white flex items-center justify-center"
        style={{ background: `url(${props.img})` }}
      >
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default BannerCard;
