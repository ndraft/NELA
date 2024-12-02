import React from 'react';

function Halaman3({ onBack }) {
  // Fungsi untuk membuka album foto
  const handleOpenAlbum = () => {
    window.open('https://photos.app.goo.gl/9GWT62FevWB5LuJFA', '_blank');  // Ganti dengan tautan album foto yang sesuai
  };

  return (
    <div className="page-container">
      <h2>Hadiah 3: Cinta yang Abadi!</h2>
      <p>
        Hadiah ini adalah tanda cinta dan perhatian dariku untukmu. Aku berharap
        kamu selalu merasa dihargai dan dicintai.
      </p>

      {/* Tombol untuk membuka album foto */}
      <button className="btn btn-info" onClick={handleOpenAlbum}>Lihat Album Foto</button>

      {/* Tombol Kembali */}
      <button className="btn btn-secondary" onClick={onBack}>Kembali</button>
    </div>
  );
}

export default Halaman3;
