import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { IForm } from '../interfaces';
import { LoginContainer } from '../styles';
import { firebaseAuth } from '../utils/firebase-config';

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<IForm>({
    email: '',
    password: '',
  });

  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <LoginContainer>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={emailOnChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={passwordOnChange}
              />
              <button onClick={loginHandler}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
