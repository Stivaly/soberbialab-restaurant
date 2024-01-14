import React from 'react'
import './App.css'
import './index.css'


export const NavFirst = () => {
  return (
    <>
        <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md d-flex align-items-center">
              <p className="mb-0 phone"><span className="mailus"></span> <a href="#"></a><span className="mailus">contactanos:</span> <a href="#">contacto@soberbialab.cl</a></p>
            </div>
            <div className="col-12 col-md d-flex justify-content-md-end">
              <p className="mb-0">L - V / 10:00-21:00, Sab / 10:00-19:00</p>
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Soberbia<span>lab</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Inicio</a></li>
              <li className="nav-item"><a href="about" className="nav-link">Nosotros</a></li>
              <li className="nav-item"><a href="chef" className="nav-link">Chef</a></li>
              <li className="nav-item"><a href="blog" className="nav-link">Eventos</a></li>
              <li className="nav-item"><a href="contact" className="nav-link">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavFirst;