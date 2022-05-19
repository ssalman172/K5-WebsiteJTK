import "../App.css";
import RilisBerita from "../components/RilisBerita";

const ArtikelNewsDetail = () => {
  return (
    <div className="w-5/6 font-lora mx-auto mt5 mb5">
      <div className="w-3/5 mb3 text-center">
        <h1 className="font-lora font-bold text-6xl text-[40px] my-[2%]">
          TISIGRAM 2021 Raih Penghargaan Kompetisi Internal Terbaik
        </h1>
        <p className="text-sm color-navyblue opacity-70 font-bold">
          Azhar Subhan Fauzi - Prestasi
        </p>
        <p className="text-sm color-navyblue opacity-70 font-bold">
          Monday, 23 November 2020
        </p>
      </div>
      <div className="flex justify-between mx-auto">
        <div className="w-3/5">
          <div className="mb3 flex justify-center">
            <div>
              <img
                src="/img/artikel-news/detail/artikel1.png"
                className="max-w-[725px] max-h-[450px]"
              />
              <p className="text-sm color-navyblue opacity-70 font-bold">
                Photo: Pubdok/Shalahuddin
              </p>
            </div>
          </div>
          <p className="text-xl indent-8 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lorem
            bibendum adipiscing orci, erat dapibus neque massa. Ut at convallis
            enim, mollis tortor. Pharetra, elementum vitae, dignissim et rhoncus
            eu. In aliquam tellus vehicula arcu commodo senectus quis
            pellentesque. Ut aliquam eu dui vel vel, consectetur.
          </p>
          <p className="text-xl indent-8 mb-2">
            Lorem aenean tincidunt senectus dolor faucibus in. Lorem nunc cras
            purus purus, suspendisse purus orci lacus. Maecenas risus posuere
            posuere diam sapien imperdiet pretium nec. Lacus nunc, imperdiet
            ultrices lectus elementum augue pellentesque. Nulla amet, nec amet,
            ipsum, urna rhoncus, risus. Felis egestas malesuada varius praesent
            ornare diam, mattis in pulvinar. Habitant eget mauris tellus viverra
            sodales lacus ac. Amet quis praesent posuere id potenti duis.
            Hendrerit in adipiscing purus fermentum, tempor pellentesque
            tincidunt at. Dolor felis lorem erat turpis ac. Eleifend dignissim
            duis vestibulum et turpis fermentum. Risus non faucibus venenatis
            posuere. Elementum adipiscing sed cursus in velit faucibus et.
          </p>
          <p className="text-xl indent-8 mb-2">
            Et ut nulla viverra integer amet nunc. Mattis nulla dolor tellus
            eget praesent. Sed enim auctor risus ut diam blandit. Et, et amet
            nulla aliquet nunc. Sed mauris quam quam venenatis dui consectetur
            amet nibh. Sed nulla orci quam tellus nec et vel, a. Eget quam vel
            molestie leo pellentesque elementum amet, mi. Duis nulla quam felis
            feugiat sem eget nulla libero, sapien. Pharetra, molestie id nam sem
            massa bibendum. Tincidunt dui convallis amet, scelerisque gravida
            tellus non.
          </p>
        </div>
        <RilisBerita />
      </div>
    </div>
  );
};

export default ArtikelNewsDetail;
