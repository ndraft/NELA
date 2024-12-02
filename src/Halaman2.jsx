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
                Pada hari yang penuh kebahagiaan ini, aku ingin memberikan sedikit catatan yang
                penuh dengan rasa cinta. Semoga kamu merasa senang dan bahagia selalu. Aku berdoa
                agar segala impian dan harapanmu tercapai, dan hidupmu dipenuhi dengan kebahagiaan.
                <br /><br />
                Terima kasih atas semua kebahagiaan yang telah kamu berikan dalam hidupku. Setiap
                momen bersamamu adalah kenangan yang tak ternilai. Semoga kita terus berjalan bersama
                dalam kebahagiaan ini, melalui semua suka dan duka yang datang. Aku mencintaimu lebih
                dari yang bisa kuungkapkan dengan kata-kata.<br /><br />
                Dengan cinta, <br />
                [Your Name]
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
