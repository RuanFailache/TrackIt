import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import {
  ContainerStyle,
  SignLinkStyle,
} from '../Styles';

import SignUpForm from './SignUpForm';

const SignUp = function () {
  return (
    <ContainerStyle>
      <Logo />

      <SignUpForm />

      <SignLinkStyle>
        <Link to="/entrar">
          Já tem uma conta? Faça login!
        </Link>
      </SignLinkStyle>
    </ContainerStyle>
  );
};

export default SignUp;
