import React from 'react';

function SectionContact() {
  return (
    <section id="contact" className="contact section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Pour toute question ou assistance, n'hésitez pas à nous contacter.
           Nous sommes disponibles pour répondre à vos besoins et vous offrir un soutien personnalisé.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Addresse</h3>
                  <p>Imprimerie n°4 C/Gombe</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Telephone</h3>
                  <p>+243813961583</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>jeremiemengi248@example.com</p>
                </div>
              </div>

       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63653.88952660677!2d15.257316827774046!3d-4.341821827650323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3bd887c867df%3A0x41435cae738d08f3!2sSENAPI%20%7Cservice%20national%20des%20approvisionnements%20et%20de%20l'imprimerie!5e0!3m2!1sfr!2scd!4v1725229793674!5m2!1sfr!2scd"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      ></iframe>
               
             
            </div>
          </div>

          <div className="col-lg-7">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Nom</label>
                  <input type="text" name="name" id="name-field" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Objet</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div> */}

                  <button type="submit">Envoyer</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SectionContact;
