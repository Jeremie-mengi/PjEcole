function SectionAbout() {
  return (
    // About Section
    <section id="about" className="about section">
      
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Suivi</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
        {   ` Le suivi scolaire est essentiel pour assurer la progression 
            des élèves et identifier leurs besoins.Adapter l'enseignement et soutenir les apprentissages pour maximiser les réussites.
`}
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Le suivi scolaire aide à évaluer les progrès des élèves et à ajuster les stratégies éducatives.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Un suivi scolaire régulier assure une éducation de qualité pour tous les élèves. .</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Un suivi rigoureux aide chaque élève à progresser efficacement.
              </span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
       {   `  Le suivi scolaire joue un rôle essentiel dans l'accompagnement des élèves. 
            Il permet de détecter les besoins spécifiques, d'adapter les méthodes d'enseignement, 
            et d'assurer une progression continue. Grâce à un suivi rigoureux, les élèves bénéficient d'un soutien personnalisé, favorisant leur réussite académique. 
            Ce processus implique une collaboration étroite entre enseignants, parents et élèves, pour créer un environnement propice à l'apprentissage. 
            En fin de compte, un suivi scolaire efficace contribue à réduire les écarts de performance, à renforcer la confiance des élèves, et à préparer chaque enfant à un avenir prometteur.
`}
            </p>
            <a href="#" className="read-more">
              <span>En savoir plus</span><i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
    // End About Section
  );
}

export default SectionAbout;
