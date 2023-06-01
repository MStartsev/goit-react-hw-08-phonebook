import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { Navigation } from '../navigation/Navigation';
import { getUser } from 'redux/auth/operations';
import { useSelectors } from 'hooks/UseSelectors';
import Loader from '../Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelectors();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <>
          <h2>Loading Phonebook...</h2>
          <Loader />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <PrivateRoute>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PrivateRoute>
                  <Register />
                </PrivateRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <RestrictedRoute>
                  <Contacts />
                </RestrictedRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
