import React from 'react';

import { Link } from 'react-router-dom';
import NavLink from '../NavLink';

function Header() {
  return (
    <nav>
      <Link to="/news/1">Logo Here</Link>
      <NavLink to="/news/1">Top</NavLink>
      <NavLink to="/newest/1">New</NavLink>
      <NavLink to="/show/1">Show</NavLink>
      <NavLink to="/ask/1">Ask</NavLink>
      <NavLink to="/jobs/1">Jobs</NavLink>
    </nav>
  );
}

export default Header;
