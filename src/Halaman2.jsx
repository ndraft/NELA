import React from 'react';
import './Halaman2.css';  // Mengimpor file CSS khusus Halaman 2

const Halaman2 = () => {
  return (
    <div className="halaman2">
      <h1 className="text-center">🎉 Halaman Kedua 🎉</h1>
      <p className="text-center">
        Selamat datang di halaman kedua! Semoga hari ini menjadi kenangan yang tak terlupakan. 😊
      </p>
      <div className="card mt-4">
        <img
          src="https://via.placeholder.com/300"
          className="card-img-top"
          alt="Birthday Cake"
        />
        <div className="card-body">
          <h5 className="card-title">Kue Ulang Tahun</h5>
          <p className="card-text">Kue spesial untukmu! Semoga semakin manis hidupmu seperti kue ini. 🍰</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-success">Terima Kasih!</button>
      </div>

      {/* Tombol Kembali ke Halaman 1 */}
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>Kembali</button>
      </div>
    </div>
  );
};

export default Halaman2;
