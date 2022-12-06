import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.png';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { NetflixContainer } from '../styles';
import { useNavigate } from 'react-router-dom';

const Netflix = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <NetflixContainer>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img
          src={backgroundImage}
          alt='Background'
          className='background-image'
        />
        <div className='container'>
          <div className='logo'>
            <img src={MovieLogo} alt='Movie Logo' />
          </div>
          <div className='buttons flex'>
            <button
              className='flex j-center a-center'
              onClick={() => navigate('/player')}
            >
              <FaPlay />
              Play
            </button>
            <button className='flex j-center a-center'>
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </NetflixContainer>
  );
};

export default Netflix;
