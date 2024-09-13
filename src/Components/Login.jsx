import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
  // Utilisation de useForm pour gérer les champs du formulaire et les erreurs
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email: data.username, // Correspondance du champ
        password: data.password, // Correspondance du champ
      });

      if (res.status === 200) {
        localStorage.setItem('tokenUser', JSON.stringify(res.data));
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('User connecté avec succès');
        window.location.href = "/eleve";
      }
    } catch (error) {
      console.log(error?.response);
      const err = error?.response?.data?.message;
      alert(err || 'Erreur lors de la connexion');
    }
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Votre URL de base
  });

  // Intercepteur pour ajouter le jeton d'authentification à chaque requête
  axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('tokenUser');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <span className="d-none d-lg-block " style={{ fontSize: '2rem' }}>Bienvenue</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Connectez-vous à votre compte</h5>
                      <p className="text-center small">Entrez votre nom d'utilisateur et votre mot de passe pour vous connecter</p>
                    </div>

                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="text"
                            name="username"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            id="yourUsername"
                            {...register("username", { required: "Please enter your email" })}
                          />
                          {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Mot de passe</label>
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="yourPassword"
                          {...register("password", { required: "Please enter your password" })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                      </div>

                      <div className="col-12 text-end">
                        <a href="/login" className="small">Mot de passe oublié?</a>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Avez vous un compte? <a href="/register">Créer un compte</a></p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by <a href="#">Ecomil</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </main>
  );
}

export default Login;
