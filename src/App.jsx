import React, { useState } from "react";
import './App.css';  // Mengimpor file CSS utama
import 'bootstrap/dist/css/bootstrap.min.css';
import Halaman2 from './Halaman2';  // Mengimpor Halaman 2
import Halaman1 from './Halaman1';  // Halaman untuk Hadiah 1
import Halaman3 from './Halaman3';  // Halaman untuk Hadiah 3
import LoginPage from './LoginPage';  // Halaman Login untuk password
import 'font-awesome/css/font-awesome.min.css'; // Import font-awesome CSS



function App() {
  const [page, setPage] = useState(1); // Untuk melacak halaman aktif
  const [authenticated, setAuthenticated] = useState(false); // Status autentikasi

  // Fungsi untuk berpindah ke halaman login (Halaman 2 - meminta password)
  const handleMasukHadiah2 = () => {
    setPage(3);  // Pindah ke Halaman Login (untuk meminta password)
  };

  // Fungsi untuk berpindah ke halaman konten Hadiah 1, Hadiah 2, atau Hadiah 3
  const handleMasuk = (hadiahId) => {
    if (hadiahId === 2) {
      handleMasukHadiah2();  // Pindah ke halaman login jika Hadiah 2
    } else if (hadiahId === 1) {
      setPage(4);  // Pindah ke Halaman 1 untuk Hadiah 1
    } else if (hadiahId === 3) {
      setPage(5);  // Pindah ke Halaman 3 untuk Hadiah 3
    }
  };

  // Fungsi untuk menangani login dan mengubah status autentikasi
  const handleLoginSuccess = () => {
    setAuthenticated(true);  // Tandai sebagai berhasil login
    setPage(2);  // Pindah ke Halaman 2 (setelah login berhasil)
  };

  // Fungsi untuk kembali ke halaman utama
  const handleBack = () => {
    setPage(1); // Pindah kembali ke halaman utama
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
                  src="img/card6.jpg"
                  className="card-img-top"
                  alt="Birthday Gift 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 1</h5>
                  <p className="card-text">Kamu pasti suka dengan hadiah ini!</p>
                  <button className="btn btn-info" onClick={() => handleMasuk(1)}>Masuk</button> {/* Tombol Masuk untuk Hadiah 1 */}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <img
                  src="img/card2.jpg"
                  className="card-img-top"
                  alt="Birthday Gift 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 2</h5>
                  <p className="card-text">Hadiah ini penuh dengan cinta untukmu!</p>
                  <button className="btn btn-info" onClick={() => handleMasuk(2)}>Masuk</button> {/* Tombol Masuk untuk Hadiah 2 */}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <img
                  src="img/card3.jpg"
                  className="card-img-top"
                  alt="Birthday Gift 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 3</h5>
                  <p className="card-text">Hadiah ketiga untukmu yang spesial!</p>
                  <button className="btn btn-info" onClick={() => handleMasuk(3)}>Masuk</button> {/* Tombol Masuk untuk Hadiah 3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Halaman Login untuk Password */}
      {page === 3 && <LoginPage onLoginSuccess={handleLoginSuccess} onBack={handleBack} />}

      {/* Halaman 2 (Konten setelah password benar untuk Hadiah 2) */}
      {page === 2 && <Halaman2 onBack={handleBack} />}
      
      {/* Halaman 1 (Konten spesifik untuk Hadiah 1) */}
      {page === 4 && <Halaman1 onBack={handleBack} />}
      
      {/* Halaman 3 (Konten spesifik untuk Hadiah 3) */}
      {page === 5 && <Halaman3 onBack={handleBack} />}
    </div>
  );
}

export default App;
