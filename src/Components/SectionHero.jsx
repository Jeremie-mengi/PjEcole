import hiroImg  from "../assets/img/schools-rem.png"
function SectionHero() {

    return(
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

)}

export default SectionHero;