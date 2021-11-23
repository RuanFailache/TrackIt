import React, {
  useEffect,
  useState,
} from 'react';

import {
  TextInputStyle,
  FilledButtonStyle,
  SignFormStyle,
} from '../Styles';

const SignInForm = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitEnabled, setIsSubmitEnable] = useState(false);

  useEffect(() => {
    let isEffectAtive = true;

    if (isEffectAtive) {
      setIsSubmitEnable(
        email.length > 0
        && password.length > 0,
      );
    }

    return () => {
      isEffectAtive = false;
    };
  }, [email, password]);

  return (
    <SignFormStyle onSubmit={(e) => e.preventDefault()}>
      <TextInputStyle
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />

      <TextInputStyle
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Senha"
      />

      <FilledButtonStyle type="submit" disabled={!isSubmitEnabled}>
        Entrar
      </FilledButtonStyle>
    </SignFormStyle>
  );
};

export default SignInForm;
