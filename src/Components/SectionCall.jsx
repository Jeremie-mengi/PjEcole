

function SectionCall() {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      
      <img src="assets/img/cta-bg.jpg" alt="Call to action background"/>
      
      <div className="container">
        
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>EPST</h3>
            <p>
          { ` L'École Primaire et Secondaire (EPST) de la République Démocratique du Congo représente le pilier fondamental du système éducatif national. 
            Avec un réseau d'établissements scolaires répartis sur l'ensemble du territoire, l'EPST joue un rôle crucial dans la formation des jeunes générations. 
            L'objectif principal est d'offrir un accès équitable à une éducation de qualité, en mettant l'accent sur les compétences essentielles et les valeurs citoyennes. 
            Cependant, le secteur rencontre divers défis tels que le manque d'infrastructures adéquates, les pénuries de matériel didactique et les disparités régionales. 
            Malgré ces obstacles, l'EPST s'efforce de promouvoir l'inclusion et le développement durable à travers des initiatives ciblées, visant à améliorer les conditions d'apprentissage et à garantir un avenir meilleur pour tous les élèves.`}
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="https://edu-nc.gouv.cd/">{`Visiter L'EPST`}</a>
          </div>
        </div>

      </div>

    </section>
    // End Call To Action Section
  );
}

export default SectionCall;
