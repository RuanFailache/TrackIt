import React from 'react';

import {
  ContainerStyle,
} from '../../styles/Styles';

import Header from '../Header/Header';
import ListHabits from './ListHabits';
import TitleBox from './TitleBox';
import Footer from '../Footer/Footer';

import useCheckAuth from '../../hooks/useCheckAuth';

const Habits = function () {
  useCheckAuth();

  return (
    <>
      <Header />

      <ContainerStyle>
        <TitleBox />
        <ListHabits />
      </ContainerStyle>

      <Footer />
    </>
  );
};

export default Habits;
