import "../App.css";

const ContentList = (props) => {
  return (
    <div
      className="flex justify-between font-lora mb2 pb-4"
      style={{ borderBottom: `1px solid rgba(20, 46, 70, 0.25)` }}
    >
      {!props.isArtikel &&
        <div>
          <a href="#" className="text-3xl color-navyblue hover:underline">
            Ruang Kelas
          </a>
          <p className="text-sm mt2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis
            sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra
            molestie amet. Id erat faucibus odio mus lectus rhoncus porta.
            Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh
            cras lectus dolor at.
          </p>
        </div>}
      <img
        src="/img/sarana-prasarana/sarana1.png"
        style={{ maxWidth: 300, maxHeight: 160 }}
      />
      {props.isArtikel &&
        <div className="ml2">
          <a href="#" className="text-xl color-navyblue hover:underline">
            Obsterik dari JTK sabet Juara 1 Hackaton BuildOn Indonesia 2020
          </a>
          <p className="text-xs color-navyblue opacity-70 mt1">
            Akademik | 23 November 2021
          </p>
          <p className="text-sm mt2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis
            sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra
            molestie amet. Id erat faucibus odio mus lectus rhoncus porta.
            Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh
            cras lectus dolor at.
          </p>
        </div>}
    </div>
  )
};

export default ContentList;
