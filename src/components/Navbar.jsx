import { NavLink } from 'react-router-dom';
import Icon from '../Icons/planet.png';
import '../styles/navbar.css';

const NavBar = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: '/missions', text: 'Missions' },
    { path: '/profile', text: 'My Profile' },
  ];

  return (
    <nav className="navbar">
      <div className="title-container">
        <img src={Icon} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : undefined,
              })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
