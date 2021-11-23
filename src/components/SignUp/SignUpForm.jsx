import React, {
  useState,
  useEffect,
} from 'react';

import {
  TextInputStyle,
  FilledButtonStyle,
  SignFormStyle,
} from '../Styles';

const SignUpForm = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const [isSubmitEnabled, setIsSubmitEnable] = useState(false);

  useEffect(() => {
    let isEffectAtive = true;

    if (isEffectAtive) {
      setIsSubmitEnable(
        name.length > 0
        && email.length > 0
        && password.length > 0
        && image.length > 0,
      );
    }

    return () => {
      isEffectAtive = false;
    };
  }, [name, email, password, image]);

  return (
    <SignFormStyle onSubmit={(e) => e.preventDefault()}>
      <TextInputStyle
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <TextInputStyle
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="senha"
      />

      <TextInputStyle
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nome"
      />

      <TextInputStyle
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="foto"
      />

      <FilledButtonStyle type="submit" desabled={!isSubmitEnabled}>
        Cadastrar
      </FilledButtonStyle>
    </SignFormStyle>
  );
};

export default SignUpForm;
