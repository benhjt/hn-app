import React, { ReactNode } from 'react';

import { NavLink as RouterNavLink } from 'react-router-dom';
import cn from 'classnames';

type NavLinkProps = {
  children: ReactNode;
  to: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => (
  <RouterNavLink
    className={({ isActive }) =>
      cn(isActive ? 'text-white' : 'text-black', 'no-underline mx-2')
    }
    to={to}
  >
    {children}
  </RouterNavLink>
);

export default NavLink;
