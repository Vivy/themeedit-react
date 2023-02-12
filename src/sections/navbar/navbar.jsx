import logo from '../../assets/mobile.jpg';
import './navbar.css';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          <img src={logo} alt='the logo' />
        </a>
        <ul className='nav__menu'>
          {data.map(({ id, link, title }) => (
            <li key={id} className='nav__menu'>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
        <button id='theme__icon'>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
