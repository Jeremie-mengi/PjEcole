
import hiroImg  from "../assets/img/schools-rem.png"
import {Link} from "react-router-dom";
function Acceuil() {
  return (
    <>
     <body class="index-page">

<header id="header" class="header d-flex align-items-center fixed-top">
  <div class="container-fluid container-xl position-relative d-flex align-items-center">

    <a href="index.html" class="logo d-flex align-items-center me-auto">
      {/* <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> --> */}
      <h1 class="sitename">Kelasi</h1>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#Acceuil" class="active">Acceuil</a></li>
        <li><a href="#Apropos">A propos</a></li>
        <li class="dropdown"><a href="#"><span>Nos services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#"></a></li>
            <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
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
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <Link class="btn-getstarted" to="/Login">Se connecter </Link>
    <Link class="btn-getstarted" to="/Register">S'incrire</Link>

  </div>
</header>

<main class="main">

    {/* <!-- Hero Section --> */}
    <section id="hero" class="hero section dark-background">

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Solution conçue pour Transformer l'Expérience Educative</h1>
            <p> Que vous soyez un enseignant, un parent, un élève, ou un administrateur, 
              notre application vous offre les outils nécessaires pour gérer efficacement les activités scolaires.</p>
            <div class="d-flex">
              <a href="#about" class="btn-get-started">Commencer</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Regarder la vidéo</span></a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={hiroImg} class="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /Hero Section --> */}
    </main>
</body>
    </>
  )
}

export default Acceuil
