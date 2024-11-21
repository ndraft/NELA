import React, { useState } from "react";
import './App.css';  // Mengimpor file CSS utama
import 'bootstrap/dist/css/bootstrap.min.css';
import Halaman2 from './Halaman2';  // Mengimpor Halaman2

function App() {
  const [page, setPage] = useState(1);

  // Fungsi untuk berpindah ke halaman 2
  const handleMasuk = () => {
    setPage(2); // Pindah ke halaman 2 ketika tombol Masuk ditekan
  };

  return (
    <div className="container mt-5">
      {/* Halaman 1 */}
      {page === 1 && (
        <div className={`page page1 ${page === 1 ? 'show' : ''}`}>
          <div className="message-container text-center">
            <h1>
              Selamat Ulang Tahun 
              <br />
              Alma Naila Shafa Nasywa!
            </h1>
            <p>Semoga byby aku suka ya sama kadonya☺️</p>
          </div>

          {/* Card Section */}
          <div className="row mt-5">
            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 1</h5>
                  <p className="card-text">Kamu pasti suka dengan hadiah ini!</p>
                  <button className="btn btn-info" onClick={handleMasuk}>Masuk</button> {/* Tombol Masuk */}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 2</h5>
                  <p className="card-text">Hadiah ini penuh dengan cinta untukmu!</p>
                  <button className="btn btn-info">Masuk</button> {/* Tombol Masuk */}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 3</h5>
                  <p className="card-text">Hadiah ketiga untukmu yang spesial!</p>
                  <button className="btn btn-info">Masuk</button> {/* Tombol Masuk */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Halaman 2 */}
      {page === 2 && <Halaman2 />}
    </div>
  );
}

export default App;
