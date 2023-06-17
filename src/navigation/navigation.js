import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useAuth } from 'components/hooks';

export const Nav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
