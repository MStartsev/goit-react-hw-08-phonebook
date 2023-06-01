import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import css from './pages.module.css';

import { signIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    dispatch(signIn(data));
    reset();
  };

  return (
    <div className={css['form-container']}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={css['form-title']}>Log In</h1>
        <div className={css.content}>
          <label className={css.label}>
            <input
              className={css.input}
              {...register('email', {
                pattern: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/i,
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className={css['error-message']} role="alert">
                Input valid Email address.
              </p>
            )}
          </label>

          <label className={css.label}>
            <input
              className={css.input}
              {...register('password', {
                required: true,
                minLength: 7,
                maxLength: 20,
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className={css['error-message']} role="alert">
                Password must contain between 7 and 20 characters.
              </p>
            )}
          </label>
        </div>
        <button className={css.submit} type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
