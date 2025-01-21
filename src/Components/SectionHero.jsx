import hiroImg  from "../assets/img/schools-rem.png"
function SectionHero() {

    return(
<section id="hero" className="hero section dark-background">

<div className="container">
  <div className="row gy-4">
    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
      <h1>{`Solution conçue pour Transformer l'Expérience Educative`}</h1>
      <p> Que vous soyez un enseignant, un parent, un élève, ou un administrateur, 
        notre application vous offre les outils nécessaires pour gérer efficacement les activités scolaires.</p>
      <div className="d-flex">
        <a href="#about" className="btn-get-started">Commencer</a>
        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Regarder la vidéo</span></a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={hiroImg} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</section>

)}

export default SectionHero;