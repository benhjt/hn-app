import { ReactNode } from 'react';

import { NavLink as RouterNavLink } from 'react-router-dom';
import cn from 'classnames';

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <RouterNavLink
    className={({ isActive }) =>
      cn(isActive ? 'text-white' : 'text-black', 'no-underline')
    }
    to={to}
  >
    {children}
  </RouterNavLink>
);

export default NavLink;
