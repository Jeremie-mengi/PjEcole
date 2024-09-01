import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // URL de base
  });

  const onSubmit = async (data) => {
    try {
      // Envoi des données de l'utilisateur pour créer un compte
      const res = await axiosInstance.post("/register", {
        nom: data.nom,
        postnom: data.postnom,
        email: data.email,
        password: data.password,
        telephone: data.telephone,
      });

      if (res.status === 201) { // Code 201 pour création réussie
        // Stocker les informations de l'utilisateur dans le localStorage
        const userData = res.data; // Assurez-vous que l'API renvoie les données utilisateur nécessaires
        localStorage.setItem('user', JSON.stringify(userData));

        alert('Compte créé avec succès');
        window.location.href = "/Login"; // Redirection vers la Page Login
      }
    } catch (error) {
      console.log(error?.response);
      const err = error?.response?.data?.message;
      alert(err || 'Erreur lors de la création du compte');
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Créer un compte</h5>
                      <p className="text-center small">Entrez vos informations personnelles pour créer un compte</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="col-12">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input
                          type="text"
                          name="nom"
                          className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                          id="nom"
                          {...register('nom', { required: 'Veuillez entrer votre nom!' })}
                        />
                        {errors.nom && <div className="invalid-feedback">{errors.nom.message}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="postnom" className="form-label">Postnom</label>
                        <input
                          type="text"
                          name="postnom"
                          className={`form-control ${errors.postnom ? 'is-invalid' : ''}`}
                          id="postnom"
                          {...register('postnom', { required: 'Veuillez entrer votre postnom!' })}
                        />
                        {errors.postnom && <div className="invalid-feedback">{errors.postnom.message}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          {...register('email', {
                            required: 'Veuillez entrer une adresse email valide!',
                            pattern: {
                              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                              message: 'Format d\'email invalide',
                            },
                          })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          {...register('password', { required: 'Veuillez entrer votre mot de passe!' })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="telephone" className="form-label">Téléphone</label>
                        <input
                          type="tel"
                          name="telephone"
                          className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                          id="telephone"
                          {...register('telephone', {
                            required: 'Veuillez entrer votre numéro de téléphone!',
                            pattern: {
                              value: /^[0-9]{10,15}$/,
                              message: 'Format de numéro de téléphone invalide',
                            },
                          })}
                        />
                        {errors.telephone && <div className="invalid-feedback">{errors.telephone.message}</div>}
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Créer un compte</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-center">
                  <p className="small">Vous avez déjà un compte? <a href="/Login">Connectez-vous</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterForm;
