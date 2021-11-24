import React, {
  useState,
  useEffect,
} from 'react';

import {
  TextInputStyle,
  FilledButtonStyle,
} from '../../styles/Styles';

import SignFormStyle from '../../styles/SignStyles';
import { doSignUp } from '../../services/api';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await doSignUp({
        name,
        email,
        password,
        image,
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignFormStyle onSubmit={handleSubmit}>
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
