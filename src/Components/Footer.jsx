import React from 'react'

function Footer() {
  return (
    <>
   
   <footer id="footer" className="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4>Motivation</h4>
                <p>L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">Ecomil</span>
              </a>
              <div className="footer-contact pt-3">
                <p></p>
                <p>Imprimerie 04 C/Gombe</p>
                <p className="mt-3"><strong>Telephone:</strong> <span>+243813961583</span></p>
                <p><strong>Email:</strong> <span>jeremiemengi248@example.com</span></p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Liens</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Accueil</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">A propos</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Nos Services</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Aide</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Autres Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Conception de sites Web</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Développement Web</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Gestion des produits</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Suivez-nous</h4>
              <p>Rester connecté(e) et ne rien manquer de nos actualités</p>
              <div className="social-links d-flex">
                {/* <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Ecomil</strong> </p>
          <div className="credits">
            Designed by <a href="#">Jeremie Mengi</a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;
