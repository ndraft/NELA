import React from 'react';

function Halaman3({ onBack }) {
  return (
    <div className="page-container">
      <h2>Hadiah 3: Cinta yang Abadi!</h2>
      <p>
        Hadiah ini adalah tanda cinta dan perhatian dariku untukmu. Aku berharap
        kamu selalu merasa dihargai dan dicintai!
      </p>
      <button className="btn btn-secondary" onClick={onBack}>Kembali</button>
    </div>
  );
}

export default Halaman3;
