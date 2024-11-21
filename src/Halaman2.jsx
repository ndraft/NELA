import React from 'react';
import './Halaman2.css';  // Mengimpor file CSS khusus Halaman 2

const Halaman2 = () => {
  return (
    <div className="halaman2">
      <h1 className="text-center">🎉 Halaman Kedua 🎉</h1>
      <p className="text-center">
        Selamat datang di halaman kedua! Semoga hari ini menjadi kenangan yang tak terlupakan. 😊
      </p>
      
      {/* Menampilkan Video YouTube */}
      <div className="video-container mt-4">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Ganti dengan ID video YouTube yang sesuai
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>back</button>
      </div>
    </div>
  );
};

export default Halaman2;
