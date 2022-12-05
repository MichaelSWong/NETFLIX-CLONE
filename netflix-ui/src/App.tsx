import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';

const App = () => {
  const loginRoutes = {
    path: 'login',
    element: <Login />,
    children: [],
  };
  const signupRoutes = {
    path: 'signup',
    element: <Signup />,
    children: [],
  };
  const netflixRoutes = {
    path: '/',
    element: <Netflix />,
    children: [],
  };
  const routing = useRoutes([loginRoutes, signupRoutes, netflixRoutes]);
  return <>{routing}</>;
};

export default App;
