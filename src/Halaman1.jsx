import React from 'react';
import './Halaman1.css';  // Mengimpor file CSS khusus Halaman 1

const Halaman1 = () => {
  return (
    <div className="halaman1">
      <h1 style={{ fontFamily: '"Edu AU VIC WA NT Pre", cursive', fontWeight: 'normal', fontStyle: 'normal', textAlign: 'center' }}>
      - Hadiah Pertama -
      </h1>
      
      
      <p style={{ fontSize: '13px' }}>Selamat datang di hadiah pertama byby! Semoga byby suka ya sama video dibawah ini😊.</p>
      
      {/* Menampilkan Video YouTube */}
      <div className="video-container mt-4">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/1tRh0u7qHKQ"  // Ganti dengan ID video YouTube yang sesuai
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

export default Halaman1;