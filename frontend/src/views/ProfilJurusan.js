import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import VisiMisi from '../components/VisiMisi'

const misi = [
  'Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia yang profesional dibidang teknologi informasi;',
  'Menyelenggarakan program penelitian yang menghasilkan produk unggulan dibidang teknologi informasi;',
  'Meningkatkan pemanfaatan teknologi informasi di lingkungan internal maupun lingkungan eksternal (industri, pemerintah dan masyarakat umum);',
  'Menjadi tempat bagi sivitas akademika untuk saling bertukar gagasan dalam lingkungan yang kondusif.'
]

const ProfilJurusan = () => {
  return (
    <div>
      <Banner img="/img/landing/banner.png" />
      <div className='font-lora w-7/12 ml-auto mr-auto mt-10 mb-12'>
        <h1 className='font-bold text-5xl text-center'>Sambutan Ketua Jurusan</h1>
        <div className='flex items-center mt-10'>
          <div className='w-[25%]'>
            <div>
              <img src="/img/kajur.png" className='rounded-full object-cover w-full mr-auto ml-auto object-center'/>
            </div>
            <h1 className='font-bold text-xl text-center mt-4'>Bambang Wisnuadhi, S.Si., M.T.</h1>
          </div>
          <div className='ml-12 text-justify w-[75%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, odio quisquam. Corrupti iure numquam laborum at suscipit ipsam labore vel earum maiores voluptatum, dolorum quidem facilis laudantium consectetur aliquam maxime? Laboriosam quia earum ipsam neque quod, quam, unde, expedita omnis voluptas dolores laborum nisi consectetur animi repellendus aliquam nesciunt quaerat ipsum ab velit ratione molestias? Repudiandae dolor dolores maxime natus officia recusandae repellat vel, enim facilis, odio quidem hic temporibus minus quis debitis soluta! Dolores at corrupti nisi nesciunt quae excepturi est provident, accusantium ratione, consectetur voluptatibus dolorum modi rem accusamus, necessitatibus quam? Aliquam aliquid, ut reiciendis assumenda atque earum doloremque architecto nisi ullam dicta aspernatur itaque qui distinctio fugit perspiciatis quo magnam dolorum quos id laboriosam. Illum at, pariatur a corporis ex neque eos nobis architecto consequuntur totam! Eveniet, corporis? Quod, aspernatur? Quibusdam veniam voluptatibus nesciunt, obcaecati officia nihil debitis id facere corporis optio eius dolore ut provident, non sint? Dignissimos vel laudantium maiores harum nesciunt exercitationem, enim reiciendis error iure est nemo quod similique necessitatibus placeat numquam, odio veritatis fugit officiis facilis. Officia quis magnam distinctio aspernatur est expedita ab dicta veritatis ea.</p>
          </div>
        </div>
        <h1 className='font-bold text-5xl mt-14'>Sejarah JTK POLBAN</h1>
        <div className='flex items-center mt-10 text-justify'>
          {/* THIS IS SERIUSLY JUST A PLACEHOLDER, BAD DESIGN */}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo maxime nostrum aspernatur commodi vero nobis aperiam laborum modi quam recusandae ipsa cum voluptatem dolores, porro id sequi expedita, sit, suscipit similique. Sequi enim ratione voluptatibus odio incidunt, aliquid sint voluptas a temporibus facere commodi dolor atque sapiente aspernatur et deleniti recusandae adipisci quisquam, rerum culpa accusamus quibusdam! Amet soluta, sequi fugit at nihil possimus optio? Repudiandae optio eveniet velit numquam, sunt odit molestias eius sequi libero. Tenetur nemo quod eius commodi repellendus animi inventore veritatis illo, beatae vitae aliquid fugiat aut, accusamus officiis modi quos maxime amet. Quam, iste.</p>
          <p className='ml-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nostrum doloribus excepturi, maiores fuga nemo veniam. Aliquam, eaque pariatur tenetur assumenda perferendis, quidem fuga molestias repellendus ex laborum iure ipsa similique, impedit alias consequatur dolorem hic. Odit temporibus dicta quam enim voluptatum maiores! Dolorum debitis placeat commodi nostrum, saepe consectetur officia molestias molestiae iure eius et, labore soluta illo deleniti repellat dicta quae inventore ducimus odit enim quibusdam rerum tempora sapiente expedita. Temporibus dolores excepturi, consectetur provident quos nemo eos similique officiis soluta dolor beatae odio aspernatur nihil atque omnis, ratione iste totam voluptatum deleniti maxime tenetur. Ipsum, quidem commodi.</p>
        </div>
      </div>
      <VisiMisi 
        visi="JTK memiliki visi untuk menjadi jurusan unggulan dan terdepan di bidang pengkajian, penerapan dan pengembangan teknologi informasi, yang diakui baik di tingkat nasional maupun internasional." 
        misi={misi}  
      />
    </div>
  )
}

export default ProfilJurusan