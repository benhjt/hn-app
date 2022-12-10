import React from 'react';

import { Link } from 'react-router-dom';
import NavLink from '../NavLink';

const Separator = () => <div className="h-5/6 w-px bg-black">&nbsp;</div>;

const Header = () => (
  <nav className="flex px-2 bg-orange-600">
    <Link to="/news/1" className="font-semibold mr-3">
      Hacker News
    </Link>
    <NavLink to="/news/1">Top</NavLink>
    <Separator />
    <NavLink to="/newest/1">New</NavLink>
    <Separator />
    <NavLink to="/show/1">Show</NavLink>
    <Separator />
    <NavLink to="/ask/1">Ask</NavLink>
    <Separator />
    <NavLink to="/jobs/1">Jobs</NavLink>
  </nav>
);

export default Header;
