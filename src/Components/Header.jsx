import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function Header() {
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename" >Ecomil</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#Acceuil" className="active">Acceuil</a></li>
            <li><a href="#Apropos">A propos</a></li>
            <li className="dropdown">
              <a href="#"><span>Nos services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#"></a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#Aide">Aide</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="btn-getstarted" to="/Login">Se connecter </Link>
        <Link className="btn-getstarted" to="/Register">S'incrire</Link>

      </div>
    </header>
  );
}

export default Header;