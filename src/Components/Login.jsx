import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Configuration d'axios pour ajouter automatiquement le jeton d'authentification
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // URL de base
  });

  axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('tokenUser');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("/login", {
        email: data.username,
        password: data.password,
      });

      if (res.status === 200) {
        localStorage.setItem('tokenUser', JSON.stringify(res.data));
        alert('User connecté avec succès');
        window.location.href = "/eleve";
      }
    } catch (error) {
      console.log(error?.response);
      const err = error?.response?.data?.message;
      alert(err || 'Erreur de connexion');
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="text"
                            name="username"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            id="yourUsername"
                            {...register("username", { required: "Please enter your username" })}
                          />
                          {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="yourPassword"
                          {...register("password", { required: "Please enter your password" })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="rememberMe"
                            {...register("remember")}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Don't have an account? <a href="pages-register.html">Create an account</a></p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
