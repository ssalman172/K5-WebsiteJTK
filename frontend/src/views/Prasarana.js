import "../App.css";
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";

const Prasarana = () => {
  return (
    <div>
      <Banner
        title="Sarana Prasarana"
        img="img/sarana-prasarana/sarana-banner.png"
      />
      <div className="w-2/3 mx-auto">
        <div className="flex text-4xl mb3 mt3">
          <a
            href="/sarana"
            className="color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 mr3"
          >
            Sarana
          </a>
          <p className="color-navyblue underline font-bold">Prasarana</p>
        </div>
        <ContentList
          isArtikel={false}
          title='Ruang Kelas'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/sarana-prasarana/sarana1.png'
        />
        <ContentList
          isArtikel={false}
          title='Ruang Kelas'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/sarana-prasarana/sarana1.png'
        />
        <ContentList
          isArtikel={false}
          title='Ruang Kelas'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/sarana-prasarana/sarana1.png'
        />
        <ContentList
          isArtikel={false}
          title='Ruang Kelas'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem scelerisque sit rhoncus ut pulvinar. Purus a, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus at dolor viverra molestie amet. Id erat faucibus odio mus lectus rhoncus porta. Pulvinar, congue lacinia felis sit non pulvinar mus. Turpis sem nibh cras lectus dolor at.'
          img='/img/sarana-prasarana/sarana1.png'
        />
      </div>
    </div>
  );
};

export default Prasarana;
