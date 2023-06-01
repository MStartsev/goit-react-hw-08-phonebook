import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelectors } from 'hooks/UseSelectors';
import Loader from 'components/Loader/Loader';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <ul className={css.list}>
            {isLoggedIn && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive && css.activeLink} ${css.link} ${css.title}`
                    }
                    to="/"
                  >
                    PhoneBook
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive && css.activeLink} ${css.link}`
                    }
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </li>
                <li>
                  <UserMenu />
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive && css.activeLink} ${css.link} ${css.title}`
                    }
                  >
                    PhoneBook
                  </NavLink>
                </li>
                <li>
                  <div className={css.container}>
                    <NavLink
                      className={({ isActive }) =>
                        `${isActive && css.activeLink} ${css.link} `
                      }
                      to="/register"
                    >
                      SignUp
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `${isActive && css.activeLink} ${css.link} `
                      }
                      to="/login"
                    >
                      LogIn
                    </NavLink>
                  </div>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
