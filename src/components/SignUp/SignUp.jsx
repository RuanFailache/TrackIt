import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import {
  ContainerStyle,
  LinkStyle,
} from '../../styles/Styles';

import SignUpForm from './SignUpForm';

const SignUp = function () {
  return (
    <ContainerStyle>
      <Logo />

      <SignUpForm />

      <LinkStyle>
        <Link to="/entrar">
          Já tem uma conta? Faça login!
        </Link>
      </LinkStyle>
    </ContainerStyle>
  );
};

export default SignUp;
