import React from 'react';

function Halaman3({ onBack }) {
  // Fungsi untuk membuka album foto
  const handleOpenAlbum = () => {
    window.open('https://photos.app.goo.gl/1bAsA6kjYJ5yGnJ48', '_blank');  // Ganti dengan tautan album foto yang sesuai
  };

  return (
    <div className="page-container">
      <h1 style={{ fontFamily: '"Edu AU VIC WA NT Pre", cursive', fontWeight: 'normal', fontStyle: 'normal', textAlign: 'center' }}>
            -Album 
          
            Nostalgia-
          </h1>
      
      <p style={{ fontSize: '12px' }}>Selamat Datang di Hadiah ketiga byby!!. Byby harus lihat seberapa lucunya byby dulu🫵🏻!!.</p>
      

      

      {/* Menambahkan gambar di atas tombol "Lihat Album Foto" */}
      <img 
        src="img/halaman3.jpg"  // Ganti dengan URL gambar yang sesuai
        alt="Hadiah Cinta" 
        className="gift-image" 
        style={{ width: '350px', height: 'auto', display: 'block', margin: '0 auto' }}  // Ukuran gambar lebih kecil
      />
      <br/>
<p style={{ fontSize: '12px', textAlign:'center',fontWeight:'bold',fontSize:'15px'}}>210 Items</p>
      {/* Tombol untuk membuka album foto */}
      <button className="btn btn-info" onClick={handleOpenAlbum}>Lihat Album Foto</button>

      {/* Tombol Kembali */}
      <button className="btn btn-secondary" onClick={onBack}>Kembali</button>
    </div>
  );
}

export default Halaman3;
