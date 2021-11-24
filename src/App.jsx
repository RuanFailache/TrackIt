import React, {
  useMemo,
  useState,
} from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  Helmet,
} from 'react-helmet';

import ResetGlobalStyle from './styles/ResetGlobalStyle';
import GlobalStyles from './styles/GlobalStyles';

import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Habits from './components/Habits/Habits';

import UserContext from './context/Context';

const App = function () {
  const [user, setUser] = useState({});

  const userState = useMemo(() => ({
    user,
    setUser,
  }));

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Playball&display=swap" rel="stylesheet" />
      </Helmet>

      <ResetGlobalStyle />
      <GlobalStyles />

      <UserContext.Provider value={userState}>
        <Routes>
          <Route path="entrar" element={<SignIn />} />
          <Route path="cadastro" element={<SignUp />} />
          <Route path="habitos" element={<Habits />} />
          <Route path="*" element={<Habits />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
