import React from 'react';
import img1  from "../assets/img/masonry-portfolio/1.jpg"
import img2  from "../assets/img/masonry-portfolio/2.jpg"
import img3   from "../assets/img/masonry-portfolio/8.webp"
import img4   from "../assets/img/masonry-portfolio/4.jpeg"
import img5   from "../assets/img/masonry-portfolio/5.webp"
import img6   from "../assets/img/masonry-portfolio/9.jpg"
import img7   from "../assets/img/masonry-portfolio/7.jpg"
import img8   from "../assets/img/masonry-portfolio/3.webp"
import img9   from "../assets/img/masonry-portfolio/10.webp"






function  SectionPortFollo() {
  return (
    <>
      {/* <!-- Portfolio Section --> */}
    <section id="portfolio" class="portfolio section">

      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Projets Éducatifs</h2>
        <p>
        L'éducation est essentielle pour les enfants, 
        car elle leur ouvre les portes du savoir.</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" class="filter-active">Elèves</li>
            <li data-filter=".filter-app">Autorités</li>
            <li data-filter=".filter-product">Ecoles</li>
            <li data-filter=".filter-branding">Cartographie</li>
          </ul>
          {/* <!-- End Portfolio Filters --> */}

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={img1} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>College IKELE </h4>
                <p>Kinshasa</p>
                <a href={img1} title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={img2} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>College MPOSO </h4>
                <p>Mbandaka</p>
                <a href={img2} title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={img3} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Ecole UKU </h4>
                <p>Bukavu</p>
                <a href={img3} title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={img4} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Complexe Scolaire LOKILO</h4>
                <p>Inongo</p>
                <a href={img4} title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={img5} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>  Lycée MBIPA </h4>
                <p>Mai ndombe</p>
                <a href={img5} title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={img6} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Ecole Vulipa</h4>
                <p>Kolwezi</p>
                <a href={img6} title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={img7} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Ministere de l'Education Nationale et Nouvelle Citoyenneté</h4>
                <p>RDC</p>
                <a href={img7} title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={img8} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Lycée Iposo</h4>
                <p>Kwango</p>
                <a href={img8} title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={img9} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Carte Scolaire</h4>
                <p>RDC</p>
                <a href={img9} title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

          </div>
          {/* <!-- End Portfolio Container --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Portfolio Section --> */}
    </>
  );
}

export default SectionPortFollo;