import { NavLink } from 'react-router-dom';

import './navigation.style.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'navigation__item navigation__item--active'
            : 'navigation__item'
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          isActive
            ? 'navigation__item navigation__item--active'
            : 'navigation__item'
        }
      >
        Orders
      </NavLink>
    </nav>
  );
};

export default Navigation;
