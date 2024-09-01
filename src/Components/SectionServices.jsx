import React from 'react';

function SectionServices() {
  return (
    // Services Section
    <section id="services" className="services section light-background">
      
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services  Kelasi</h2>
        <p>Nous offrons une gamme complète de services scolaires pour faciliter
           la gestion quotidienne des établissements éducatifs. De la gestion des présences des élèves
            à la communication efficace avec les parents, notre plateforme est conçue pour optimiser 
            le suivi scolaire et simplifier les tâches administratives. Que vous soyez un enseignant,
             un administrateur ou un parent, nos outils vous permettent de rester connectés et informés,
              assurant ainsi un environnement éducatif harmonieux et performant.</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-activity icon"></i></div>
              <h4><a href="#" className="stretched-link">Presence des eleves</a></h4>
              <p>
              La présence des élèves est essentielle 
              pour assurer un suivi scolaire efficace et 
              favoriser leur réussite scolaire.</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="#" className="stretched-link">Communication des parents </a></h4>
              <p>La communication des parents implique l'envoi régulier d'informations sur les progrès scolaires, 
                les événements scolaires, et les comportements des élèves. Cela permet de renforcer 
                la collaboration entre les enseignants et les parents pour le bien-être et la réussite des élèves.</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
              <h4><a href="#" className="stretched-link">Activités parascolaires</a></h4>
              <p>Les activités parascolaires englobent les sports, les clubs, et autres initiatives qui enrichissent 
                l'expérience éducative des élèves en dehors des heures de cours. 
                Elles favorisent le développement des compétences sociales, la créativité, et l'esprit d'équipe.</p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-broadcast icon"></i></div>
              <h4><a href="#" className="stretched-link"> Comportements et Conduite </a></h4>
              <p>Le suivi des comportements et de la conduite des élèves permet d'assurer un environnement 
                scolaire harmonieux et propice à l'apprentissage. 
                Cela inclut l'observation des attitudes, la gestion des conflits, et le renforcement des valeurs positives.</p>
            </div>
          </div>
          {/* End Service Item */}

        </div>
      </div>
    </section>
    // End Services Section
  );
}

export default SectionServices;
