import React, { ReactNode } from 'react';

import { NavLink as RouterNavLink } from 'react-router-dom';

type NavLinkProps = {
  children: ReactNode;
  to: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => (
  <RouterNavLink
    className={({ isActive }) => (isActive ? 'underline' : 'no-underline')}
    to={to}
  >
    {children}
  </RouterNavLink>
);

export default NavLink;
