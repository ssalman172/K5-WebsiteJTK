import "../App.css";
import "../styles/footer.css";

const Footer = () => {
  return (
  <div className="bg-footer w-screen text-white flex items-start text-xl font-lora grid-cols-4">
    <a href="#">
      <div className="w-full justify-between flex items-center">
        <img src="/img/icons/polban.png" style={{ width: 90, height: 90 }} />
        <p className="header-title ml2">
          JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA
        </p>
      </div>
    </a>
    <div>
      <p className="ml2 header-title">
        Program Studi
      </p>
    </div>
    <div>
      <p className="ml2 header-title">
        Tentang JTK
      </p>
    </div>
    <div>
      <p className="ml2 header-title">
        Koneksi
      </p>
    </div>
  </div>
  );
};

export default Footer;
