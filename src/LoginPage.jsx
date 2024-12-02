import React, { useState, useEffect } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fungsi untuk menangani perubahan input password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Efek untuk memeriksa password setiap kali ada perubahan
  useEffect(() => {
    // Validasi password langsung setelah user mengetik
    if (password === '290816') {
      onLoginSuccess(); // Login berhasil
    } else if (password !== '') {
      setError('');
    } else {
      setError(''); // Reset error jika input kosong
    }
  }, [password, onLoginSuccess]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Byby Pasti<br/>Tau Password Ini</h2>
        
        {/* Tampilkan pesan error jika password salah */}
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label></label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="    Masukkin password"
            className="form-control"
            autoFocus
          />
        </div>

        {/* Ganti tombol Kembali menjadi icon back */}
        <button onClick={onBack} className="back-btn">
          <i className="fas fa-arrow-left"></i> {/* Font Awesome icon */}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
