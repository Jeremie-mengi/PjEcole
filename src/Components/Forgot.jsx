import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Forgot = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [message, setMessage] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/forgot", {
        telephone: data.telephone,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      });

      if (res.status === 200) {
        setMessage('Mot de passe réinitialisé avec succès. Vous pouvez vous connecter.');
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error?.response);
      const err = error?.response?.data?.message;
      setMessage(err || 'Erreur lors de la réinitialisation du mot de passe');
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section reset-password min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Réinitialisation du mot de passe</h5>
                      <p className="text-center small">Entrez votre numéro de téléphone et le nouveau mot de passe</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                        <label htmlFor="newPassword" className="form-label">Nouveau mot de passe</label>
                        <input
                          type="password"
                          name="newPassword"
                          className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                          id="newPassword"
                          {...register('newPassword', { required: 'Veuillez entrer un nouveau mot de passe!' })}
                        />
                        {errors.newPassword && <div className="invalid-feedback">{errors.newPassword.message}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">Confirmez le mot de passe</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          id="confirmPassword"
                          {...register('confirmPassword', {
                            required: 'Veuillez confirmer votre mot de passe!',
                            validate: value => value === getValues('newPassword') || 'Les mots de passe ne correspondent pas',
                          })}
                        />
                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Réinitialiser le mot de passe</button>
                      </div>
                      {message && <div className="col-12 text-center mt-3">{message}</div>}
                    </form>
                  </div>
                </div>
                <div className="text-center">
                  <p className="small">Vous vous souvenez de votre mot de passe? <a href="/login">Connectez-vous</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Forgot;
