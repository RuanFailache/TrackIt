import {
  useContext,
  useEffect,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import UserContext from '../context/Context';

const useCheckAuth = function () {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    let isActive = true;

    if (isActive && !user.token) {
      navigate('/entrar');
    }

    return () => {
      isActive = true;
    };
  });

  return user;
};

export default useCheckAuth;
