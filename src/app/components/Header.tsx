// src/components/Header.js (renombrado a Header.jsx para mayor claridad)
"use client";
import React, { useState } from "react";
import "../assets/styles/page.header.scss"; // Asegúrate de que esta ruta sea correcta

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <ul className="social-medias">
          <li className="social-item"><a href="https:www.youtube.com"> <img src="/facebook.svg"/></a></li>
          <li className="social-item"><a href="https:www.youtube.com"> <img src="/instagram.svg"/></a></li>
          <li className="social-item"><a href="https:www.youtube.com"> <img src="/youtube.svg"/></a></li>
      </ul>
      <img className="logo" src="/ux-responsive.png" alt="Imagen UX Responsive" width="100" height="auto" />
      <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#novedades">Novedades</a></li>
          <li className="nav-item"><a href="#quien-soy">Quién Soy</a></li>
          <li className="nav-item"><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <button className="mobile-menu-trigger" onClick={toggleMobileMenu}>
        ☰ {/* Icono de menú */}
      </button>
    </header>
  );
};

export default Header;
