import { NavLink } from 'react-router-dom';
import Icon from '../Icons/planet.png';
import '../styles/Navbar.css';

const NavBar = () => (
  <nav className="Navbar">
    <img src={Icon} alt="Logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <ul>
      <li>Rockets</li>
      <li>Missions</li>
      <NavLink>My Profile</NavLink>
    </ul>
  </nav>
);

export default NavBar;
