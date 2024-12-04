import React from "react";
import './Halaman2.css';  // Mengimpor file CSS

const Halaman2 = ({ onBack }) => {
  return (
    <div className="halaman2-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Card untuk Halaman 2 */}
          <div className="card halaman2-card">
            <div className="card-header text-center halaman2-header">
              <h4>Catatan Spesial</h4>
            </div>
            <div className="card-body halaman2-body">
              {/* Konten catatan */}
              <p className="halaman2-note">
                Dear Alma Naila Shafa Nasywa, <br /><br />
                Pada hari Ulang Tahun byby yang penuh kebahagiaan ini, eci ingin memberikan sedikit catatan yang
                penuh dengan rasa cinta pada byby. Semoga byby selalu merasa senang dan bahagia sepanjang hidup ya. Eci selalu berdoa
                agar segala impian dan harapan byby tercapai, dan hidup byby dipenuhi dengan segala kebahagiaan yang byby inginkan.
                <br />
                <br/>
                Semoga byby selalu dijalan yang lurus ya manisku,byby harus selalu sadar bahwa byby adalah wanita yang sempurna
                byby harus tau dimana byby harus ditempatkan, byby ga boleh salah tempat atau jalan yang tidak sepantasnya byby disana karena 
                byby adalah wanita mahal dengan fisik sempurnanya, jangan sampai byby salah memilih jalan dan tempat seperti yang sudah lalu-lalu
                cumilkuu. setelah byby sudah berhasil menempatkan dirinya ketempat aslinya nantinya, byby harus istiqomah ditempat berharga itu, byby jangan
                sampai jatuh lagi kebawah ya sayang karna dibawah bukanlah tempat yang pantas untuk mahluk yang nyaris sempurna seperti byby😊.
                <br/>
                <br/>
                Cara mudah agar byby selalu sadar dimana tempatnya byby harusnya berada adalah dengan cara bercermin, dengan bercermin byby akan selalu melihat salah satu 
                bukti nyata indahnya ciptaan tuhan, dan setelah itu byby akan bersyukur dan harus menjaga keindahan tuhan yang telah dititipkan kepada byby. dengan bersyukur
                dan menyadari betapa sempurnanya titipan itu, byby harus menempatkan byby sepantas mungkin, ya itu dijalan yang lurus😉
                <br />
                <br/>
                Byby, Semoga kita berdua takkan pernah terpisah dan menua bersama di Istana yang nantinya kita bangun dan singgahi selamanya ya.
                Ga kerasa ya eci sudah ikut merayakan Hari Ulang Tahun nela dari byby umur 12 sampai sekarang yang ke 20, Eci harap di Hari Ulang Tahun berikutnya dan sampai 
                kapanpun eci akan selalu ada disetiap hari-hari spesial byby ya🥰. Semoga byby selalu dalam pelukan eci dan begitupun sebaliknya, dari dulu kita 
                selalu janji ga akan pernah saling ninggalin byby, dan eci sampai sekarang menepati janji itu sayangku, aku harap byby jangan pernah biarin eci bernafas tanpamu lagi ya, byby juga harus
                tepatin janji dan komitmen kita berdua ya sayangkuuuuu🤗.
                <br />
                <br />
                Sayangku, Bidadariku, Pujaan Hatiku dan Cinta Sejatiku, eci akan selalu berusaha menjaga byby sampai kapanpun,
                eci akan berusaha selalu ada disamping byby dalam kondisi sedih maupun senang. Mungkin kalo byby bisa belah hatiku dan baca isi pikiranku, byby 
                akan tau sebepera dalam sayang dan cintanya aku kebyby. Aku cinta mati sayang sama byby i know ini cringe tapi kenyataanya seperti itu, kamu
                benar-benar separuh nafasku by. i love u to the moon and back and ur my everything😊😘.
                <br />
                <br />
                Maafin aku ya manisku kalo di Ulang Tahunmu yang 20 ini, eci ga bisa kasih apa-apa, eci ga punya bunga eci blum punya banyak harta
                tapi yang eci punya hanyalah hati yang setia😋. Doain eci ya sayangku Insyaallah tahun depan eci bisa kasih double kado ke byby yup!!. 
                Karna jujur eci malu ke byby, ditahun ini eci malah bikin hancur banyak hal dan ga bisa ngado byby😭.
                <br />
                <br />
                Terima kasih atas semua kebahagiaan yang telah byby berikan dalam hidup eci. Setiap
                momen bersama byby adalah kenangan yang tak ternilai sayangku. Semoga kita terus berjalan bersama
                dalam kebahagiaan ini ya cintaku, melewati semua suka dan duka yang datang. Aku mencintaimu lebih
                dari yang bisa kuungkapkan dengan kata-kata.<br /><br />
                Dengan cinta, <br />
                [Resiandra Bima .S]
              </p>
            </div>
            {/* Tombol Back */}
            <div className="card-footer text-center">
              <button className="btn btn-warning btn-lg halaman2-btn-back" onClick={onBack}>
                Kembali ke Halaman Utama
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halaman2;
