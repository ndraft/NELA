import React from "react";
import './App.css';  // Mengimpor file CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        Selamat Ulang Tahun 
        <br />
        Alma Naila Shafa Nasywa!
      </h1>
      <p className="text-center">Semoga byby aku suka ya sama kadonya☺️</p>

      <div className="message text-center">
        <h2>Alma Naila, semoga hari spesialmu ini penuh dengan cinta!</h2>
        <p>Selamat ulang tahun, semoga di setiap langkah hidupmu selalu diberkati.</p>
      </div>

      {/* Card Section */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Birthday Gift 1"
            />
            <div className="card-body">
              <h5 className="card-title">Hadiah 1</h5>
              <p className="card-text">Kamu pasti suka dengan hadiah pertama ini!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Birthday Gift 2"
            />
            <div className="card-body">
              <h5 className="card-title">Hadiah 2</h5>
              <p className="card-text">Hadiah ini penuh dengan cinta untukmu!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Birthday Gift 3"
            />
            <div className="card-body">
              <h5 className="card-title">Hadiah 3</h5>
              <p className="card-text">Hadiah ketiga untukmu yang spesial!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
