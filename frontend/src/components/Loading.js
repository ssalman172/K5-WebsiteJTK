import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <div className="img-container">
        <div className="flex justify-center items-center">
          <img src="/img/icons/polban.png" className="loading-img" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
