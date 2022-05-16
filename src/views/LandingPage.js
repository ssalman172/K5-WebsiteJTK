import "../App.css";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div>
      <div className="banner text-5xl text-white flex items-end">
        <p className="ml2 mb2">Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id Kemenparekraf</p>
      </div>
      <div className="prodi-container flex justify-center items-center mb2">
        <div className="prodi-card flex flex-col items-center justify-center mr5">
          <p className="text-white text-8xl mb-5">D3</p>
          <p className="text-white text-2xl mb-5">Teknik Informatika</p>
          <a href="/d3" className="text-sm prodi-card-btn py-2 px-5">
            Selengkapnya
          </a>
        </div>
        <div className="prodi-card flex flex-col items-center justify-center ml5">
          <p className="text-white text-8xl mb-5">D4</p>
          <p className="text-white text-2xl mb-5">Teknik Informatika</p>
          <a href="/d4" className="text-sm prodi-card-btn py-2 px-5">
            Selengkapnya
          </a>
        </div>
      </div>

      <div className="ml-auto mr-auto mb2 w-5/6">
        <p className="text-6xl font-bold mb2">Berita Terbaru</p>
        <div className="flex justify-between">
          <div className="content-card mr3 h-full">
            <img src="/img/landing/img-1.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="content-card mr3 h-full">
            <img src="/img/landing/img-2.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="content-card h-full">
            <img src="/img/landing/img-3.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto mr-auto w-5/6 mb2">
        <p className="text-6xl font-bold mb2">Agenda</p>
        <div className="flex justify-between">
          <div className="content-card mr3 h-full">
            <img src="/img/landing/img-1.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="content-card mr3 h-full">
            <img src="/img/landing/img-2.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="content-card h-full">
            <img src="/img/landing/img-3.png" className="h-7/12 w-full" />
            <div className="m5 h-5/12">
              <p className="text-xl text-white mb2">
                Mahasiswa JTK Raih Prestasi dalam Program Nyatakan.id
                Kemenparekraf
              </p>
              <p className="text-white text-xs mb5">22 November 2020</p>
              <div className="flex justify-end items-end mt-14">
                <a
                  className="text-end text-sm mt-auto hover:underline text-white"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
