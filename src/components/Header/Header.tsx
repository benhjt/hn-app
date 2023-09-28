import { Link } from 'react-router-dom';
import Separator from '../Separator';
import NavLink from '../NavLink';

const Header = () => (
  <nav className="flex px-2 bg-orange-600 items-center">
    <Link to="/news/1" className="font-semibold mr-3 flex items-center">
      <img src="/logo32.png" alt="Hacker News" />
      <span className="p-2">Hacker News</span>
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
