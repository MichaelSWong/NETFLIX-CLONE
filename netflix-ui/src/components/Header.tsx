import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ILogin } from '../interfaces';
import { StyledHeader } from '../styles';

const Header = ({ login }: ILogin) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(login ? '/login' : '/signup');
  };
  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={navigateHandler}>{login ? 'Log In' : 'Sign Up'}</button>
    </StyledHeader>
  );
};

export default Header;
