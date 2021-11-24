import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  TextInputStyle,
  FilledButtonStyle,
} from '../../styles/Styles';

import SignFormStyle from '../../styles/SignStyles';
import { doSignIn } from '../../services/api';
import UserContext from '../../context/Context';

const SignInForm = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitEnabled, setIsSubmitEnable] = useState(false);

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await doSignIn({
        email,
        password,
      });

      setUser({ ...result.data });

      navigate('/habitos');
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
