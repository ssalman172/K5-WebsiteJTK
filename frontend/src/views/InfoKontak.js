import "../App.css";

const InfoKontak = () => {
  return (
    <div className="flex relative font-lora m2">
      <div className="w-1/5"></div>
      <div className="flex w-4/5 h-[500px] bg-[#1A2C43] pt-9">
        <div className="w-1/5"></div>
        <div className="w-4/5">
          <h2 className="text-white text-4xl mb-8 font-bold">Kirim Pesan</h2>
          <form className="pr-[3%] w-full text-white text-base font-semibold">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-full mb-7"
            />
            <div className="flex mb-7">
              <input
                type="text"
                placeholder="Alamat Email"
                className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2 mr2"
              />
              <input
                type="text"
                placeholder="Nomor Telepon"
                className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2"
              />
            </div>
            <textarea
              type="text"
              placeholder="Nama Lengkap"
              className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-full h-[150px] resize-none mb-6"
            />
            <input
              type="submit"
              value="Send"
              className="bg-[#D65D0E] px-10 py-2 hover:cursor-pointer hover:bg-[#fc7f2c]"
            />
          </form>
        </div>
      </div>
      <div className="absolute top-[5%] w-1/3 h-[444px] bg-[#D65D0E] p-6 pl-8">
        <h2 className="text-4xl font-bold mb-[7%]">Hubungi Kami</h2>
        <div className="flex text-base font-semibold text-white items-center mb5">
          <img
            src="/img/icons/info-kontak/location.png"
            className="w-[64px] h-[64px] mr5 -ml-[2%]"
          />
          <div>
            <p className="mb2">
              Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten
              Bandung Barat, Jawa Barat
            </p>
            <p>Kode Pos 40559 | Kotak Pos Bandung 1234</p>
          </div>
        </div>
        <div className="flex text-base font-semibold text-white items-center mb5">
          <img
            src="/img/icons/info-kontak/call.png"
            className="w-[64px] h-[64px] mr5 -ml-[2%]"
          />
          <div>
            <p className="mb2">022 – 2013789 | 022 – 2015271</p>
            <p className="mb2">022 – 2013898 (Hunting)</p>
            <p>022 – 2013889 (Fax)</p>
          </div>
        </div>
        <div className="flex text-base font-semibold text-white items-center mb5">
          <img
            src="/img/icons/info-kontak/email.png"
            className="w-[64px] h-[64px] mr5 -ml-[2%]"
          />
          <p>humas@jtk.polban.ac.id</p>
        </div>
      </div>
    </div>
  );
};

export default InfoKontak;
