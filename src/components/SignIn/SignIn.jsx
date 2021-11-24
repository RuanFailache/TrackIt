import React from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  ContainerStyle,
  LinkStyle,
} from '../../styles/Styles';

import SignInForm from './SignInForm';
import Logo from '../Logo/Logo';

const SignIn = function () {
  return (
    <ContainerStyle>
      <Logo />

      <SignInForm />

      <LinkStyle>
        <Link to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </Link>
      </LinkStyle>
    </ContainerStyle>
  );
};

export default SignIn;
