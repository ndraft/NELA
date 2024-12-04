import React from 'react';

function Halaman3({ onBack }) {
  // Fungsi untuk membuka album foto
  const handleOpenAlbum = () => {
    window.open('https://photos.app.goo.gl/1bAsA6kjYJ5yGnJ48', '_blank');  // Ganti dengan tautan album foto yang sesuai
  };

  return (
    <div className="page-container">
      <h2 style={{ textAlign: 'center' }}>ALBUM NOSTALGIA! ❤️</h2>
      <p>
        Hadiah ini adalah tanda cinta dan perhatian dariku untukmu. Aku berharap
        kamu selalu merasa dihargai dan dicintai.
      </p>

      {/* Menambahkan gambar di atas tombol "Lihat Album Foto" */}
      <img 
        src="img/halaman3.jpg"  // Ganti dengan URL gambar yang sesuai
        alt="Hadiah Cinta" 
        className="gift-image" 
        style={{ width: '350px', height: 'auto', display: 'block', margin: '0 auto' }}  // Ukuran gambar lebih kecil
      />

      {/* Tombol untuk membuka album foto */}
      <button className="btn btn-info" onClick={handleOpenAlbum}>Lihat Album Foto</button>

      {/* Tombol Kembali */}
      <button className="btn btn-secondary" onClick={onBack}>Kembali</button>
    </div>
  );
}

export default Halaman3;
