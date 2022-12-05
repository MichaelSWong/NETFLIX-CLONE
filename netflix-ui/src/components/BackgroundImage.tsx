import background from '../assets/login.jpg';
import { BackgroundContainer } from '../styles';

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src={background} alt="Background" />
    </BackgroundContainer>
  );
};

export default BackgroundImage;
