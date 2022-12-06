import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { PlayerContainer } from '../styles';
import video from '../assets/video.mp4';

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayerContainer>
      <div className='player'>
        <div className='back'>
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </PlayerContainer>
  );
};

export default Player;
