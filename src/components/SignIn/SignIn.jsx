import React from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  ContainerStyle,
  SignLinkStyle,
} from '../Styles';

import SignInForm from './SignInForm';
import Logo from '../Logo/Logo';

const SignIn = function () {
  return (
    <ContainerStyle>
      <Logo />

      <SignInForm />

      <SignLinkStyle>
        <Link to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </Link>
      </SignLinkStyle>
    </ContainerStyle>
  );
};

export default SignIn;
