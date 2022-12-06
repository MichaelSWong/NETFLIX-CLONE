import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { INavbar } from '../interfaces';
import { NavContainer } from '../styles';
import logo from '../assets/logo.png';

const Navbar = ({ isScrolled }: INavbar) => {
  const navigate = useNavigate();
  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login');
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? 'scrolled' : ''} flex`}>
        <div className='left flex a-center'>
          <div className='brand flex a-center j-center'>
            <img src={logo} alt='Logo' />
          </div>
          <ul className='links flex'>
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='right flex a-center'>
          <div className={`search ${showSearch ? 'show-search' : ''}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type='text'
              placeholder='Search'
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
