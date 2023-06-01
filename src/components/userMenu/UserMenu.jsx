import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useSelectors } from 'hooks/UseSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());
  const { userName, userEmail } = useSelectors();

  return (
    <div className={css.wrapper}>
      <p className={css.user}>
        Welcome, &nbsp;<span className={css.name}> {userName}</span>
      </p>
      <p className={css.email}>{userEmail}</p>

      <Link className={css.logout} onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};
